<?php


namespace App\Http\Controllers\Api\Setting;


use App\Jobs\Portal\GeneratePortalCss;
use Illuminate\Http\Request;
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

        $keyValues = $this->getWhitelistedKeyValues($request);

        $store->put($keyValues);

        GeneratePortalCss::dispatch();

        //get attachments
        $logo = $request->file('attachment')
            ? $request->file('attachment') : false;

        if($logo){
            //store logo
            if (!$logo->isValid()) {
                abort('422', 'Error uploading file');
            }
//            $logo->storeAs('public_portal' . DIRECTORY_SEPARATOR . 'images',  'logozzz.png');
            Storage::disk('public_portal')->put(DIRECTORY_SEPARATOR . 'images', $logo);
        }
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
            'portalName',
            'cooperativeName',
            'portalWebsite',
            'portalUrl',
            'backgroundColor',
            'backgroundImageColor',
            'backgroundSecondaryColor',
            'buttonColor',
            'responsibleUserId',
            'contactResponsibleOwnerUserId',
            'checkContactTaskResponsibleUserId',
            'checkContactTaskResponsibleTeamId',
            'emailTemplateNewAccountId',
            'linkPrivacyPolicy',
            'showNewAtCooperativeLink',
        ]);
    }

    protected function getStore(): Valuestore
    {
        $filePath = (storage_path('app' . DIRECTORY_SEPARATOR . 'portal-settings.json'));
        return Valuestore::make($filePath);
    }
}