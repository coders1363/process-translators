<?php


// مکان تریگر - قبل از فرم پویای اول
try {
    $hide_source_app_uid = @@hide_source_app_uid; // دریافت مقدار شناسه درخواست
        
        // کوئری برای دریافت اطلاعات کاربر وارد شده
        $queryMain = "SELECT `APP_UID`, `APP_NUMBER`,
        `APP_STATUS`, `TXT_NAME`,
        `TXT_EMAIL`, `TXT_MOBILE`,
        `DRP_TRANSLATION_FIELD` FROM `pmt_translate`
        WHERE APP_UID = '$hide_source_app_uid'";
        
        $resultMain = executeQuery($queryMain);
        
        //var_dump('res:',$resultMain);
        //die();
        
        // بررسی وجود نتایج
        if (isset($resultMain[1])) {
            @@txt_name = $resultMain[1]['TXT_NAME'];
            @@txt_email = $resultMain[1]['TXT_EMAIL'];
            @@txt_mobile = $resultMain[1]['TXT_MOBILE'];
            @@drp_translation_field = $resultMain[1]['DRP_TRANSLATION_FIELD'];
        }
    
    } catch (Exception $e) {
        // استفاده از die برای مدیریت استثناها
        die("خطا: " . $e->getMessage());
    }
    