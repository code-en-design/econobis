<?php


namespace App\Http\Controllers\Api\Setting;


use App\Eco\ContactGroup\ContactGroup;
use App\Jobs\Portal\GeneratePortalCss;
use Config;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Spatie\Valuestore\Valuestore;

class SettingController
{

    public function get(Request $request)
    {
        $key = $request->input('key');

        if(!$this->isWhiteListed($key)){
            return [];
        }

        return [
            $key => $this->getStore()->get($key)
        ];
    }

    public function multiple(Request $request)
    {
        $store = $this->getStore();
        $keys = $this->getWhitelistedKeys($request);

        $response = [];

        foreach ($keys as $key){
            $response[$key] = $store->get($key);
        }

        return $response;
    }

    public function store(Request $request)
    {
        $store = $this->getStore();
        if(empty($store->get('portalUrl'))){
            if(empty($request['defaultContactGroupMemberId'])){
                $contactGroupMember = new ContactGroup();
                $contactGroupMember->type_id = 'static';
                $contactGroupMember->composed_of = 'contacts';
                $contactGroupMember->name =  'Wil lid worden op basis van inschrijving.';
                $contactGroupMember->description = '';
                $contactGroupMember->dynamic_filter_type = 'and';
                $contactGroupMember->save();
                $request['defaultContactGroupMemberId'] = $contactGroupMember->id;
            }
            if(empty($request['defaultContactGroupNoMemberId'])){
                $contactGroupNoMember = new ContactGroup();
                $contactGroupNoMember->type_id = 'static';
                $contactGroupNoMember->composed_of = 'contacts';
                $contactGroupNoMember->name =  'Wil geen lid worden op basis van inschrijving en betaald.';
                $contactGroupNoMember->description = '';
                $contactGroupNoMember->dynamic_filter_type = 'and';
                $contactGroupNoMember->save();
                $request['defaultContactGroupNoMemberId'] = $contactGroupNoMember->id;
            }
        }

        $keyValues = $this->getWhitelistedKeyValues($request);

        $store->put($keyValues);

        GeneratePortalCss::dispatch();

        //get logo
        $logo = $request->file('attachmentLogo')
            ? $request->file('attachmentLogo') : false;

        if($logo){
            //store logo
            if (!$logo->isValid()) {
                abort('422', 'Error uploading file logo');
            }

            try{
                if(Config::get('app.env') == "local")
                {
                    Storage::disk('public_portal_local')->putFileAs('images', $request->file('attachmentLogo'), 'logo.png' );
                }else{
                    Storage::disk('public_portal')->putFileAs('images', $request->file('attachmentLogo'), 'logo.png' );
                }
            }catch (Exception $exception){
                Log::error('Opslaan gewijzigde logo.png mislukt : ' . $exception->getMessage());
            }

        }

        //get favicon
        $favicon = $request->file('attachmentFavicon')
            ? $request->file('attachmentFavicon') : false;

        if($favicon){
            //store favicon
            if (!$favicon->isValid()) {
                abort('422', 'Error uploading file favicon');
            }
            try{
                if(Config::get('app.env') == "local")
                {
                    Storage::disk('public_portal_local')->putFileAs('/', $request->file('attachmentFavicon'), 'favicon.ico' );
                }else{
                    Storage::disk('public_portal')->putFileAs('/', $request->file('attachmentFavicon'), 'favicon.ico' );
                }
            }catch (Exception $exception){
                Log::error('Opslaan gewijzigde favicon.ico mislukt : ' . $exception->getMessage());
            }

        }
        return $store->all();
    }

    protected function getWhitelistedKeyValues(Request $request): array
    {
        $keyValues = [];
        foreach ($request->all() as $key => $value) {
            if ($this->isWhiteListed($key)) {
                $keyValues[$key] = $value;
            }
        }

        return $keyValues;
    }

    protected function getWhitelistedKeys(Request $request): array
    {
        $keys = [];
        foreach ($request->input('keys', []) as $key) {
            if ($this->isWhiteListed($key)) {
                $keys[] = $key;
            }
        }

        return $keys;
    }

    protected function isWhiteListed($key): bool
    {
        return in_array($key, [
            'portalActive',
            'portalName',
            'cooperativeName',
            'portalWebsite',
            'portalUrl',
            'backgroundColor',
            'backgroundTextColor',
            'backgroundImageColor',
            'backgroundImageTextColor',
            'headerPortalIconColor',
            'backgroundSecondaryColor',
            'backgroundSecondaryTextColor',
            'buttonColor',
            'buttonTextColor',
            'responsibleUserId',
            'contactResponsibleOwnerUserId',
            'checkContactTaskResponsibleUserId',
            'checkContactTaskResponsibleTeamId',
            'emailTemplateNewAccountId',
            'linkPrivacyPolicy',
            'showNewAtCooperativeLink',
            'newAtCooperativeLinkText',
            'pcrPowerKwhConsumptionPercentage',
            'pcrGeneratingCapacityOneSolorPanel',
            'defaultContactGroupMemberId',
            'defaultContactGroupNoMemberId',
        ]);
    }

    protected function getStore(): Valuestore
    {
        $filePath = (storage_path('app' . DIRECTORY_SEPARATOR . 'portal-settings.json'));
        return Valuestore::make($filePath);
    }
}