<?php
/**
 * Created by PhpStorm.
 * User: StagiarSoftware
 * Date: 29-1-2018
 * Time: 12:00
 */

namespace App\Http\Traits;


use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Log;


/**
 * Based on: https://laracasts.com/discuss/channels/laravel/encrypting-model-data Please read before using
 *
 * DO NOT USE FOR FOREIGN KEYS!!
 *
**/
trait Encryptable
{
    public function getAttribute($key)
    {
        $value = parent::getAttribute($key);
        if (in_array($key, $this->encryptable)) {
            try {
                if($value) {
                    $value = Crypt::decrypt($value);
                }
            } catch (DecryptException $e) {
                Log::error('Value ' . $value . ' with key ' . $key . ' not decryptable for model: ' . class_basename($this));
                return $value;
            }
        }
        return $value;
    }
    public function setAttribute($key, $value, $encrypt = true)
    {
        if($encrypt)
        {
            if (in_array($key, $this->encryptable)) {
                $value = Crypt::encrypt($value);
            }
        }
        return parent::setAttribute($key, $value);
    }

    public function attributesToArray()
    {
        $attributes = parent::attributesToArray(); // call the parent method

        foreach ($this->encryptable as $key) {

            if (isset($attributes[$key])){

                $attributes[$key] = Crypt::decrypt($attributes[$key]);
            }
        }
        return $attributes;
    }
}