<?php

/**
 * config duitku
 */

return [
    'merchant_code' => env(key:'DUITKU_MERCHANT_CODE'),
    'merchant_key'  => env(key:'DUITKU_MERCHANT_KEY'),
    'sandbox_mode'  => env(key:'DUITKU_SANDBOX'),
];