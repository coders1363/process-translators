<?php
try {
    // اجرای پرسوجو برای یافتن اعضای گروه با شناسه GRP_UID
    $results = executeQuery("SELECT USR_UID FROM `group_user` WHERE `GRP_UID` = '757046411664f02dc0e54b1023074723'");

    // مقدار دهی متغیر های لازم برای ایجاد مورد جدید در سیستم
    $process_uid ='24917987866af1e36aeb906028458720';
    $task_uid ='50669428366af203fc94f66096411925';
    $variables = array(
        'hide_source_app_uid' => @@APPLICATION,
        'txt_Translation_time' => @@txt_Translation_time ,
		'txt_Translation_cost' => @@txt_Translation_cost
    );
    
    // ایجاد یک مورد جدید در سیستم برای هر عضو گروه مترجمین
    foreach ($results as $result) {
        $user_uid = $result['USR_UID'];
        
        // ایجاد یک مورد جدید در سیستم با استفاده از تابع PMFNewCase
        $newCaseUID = PMFNewCase($process_uid, $user_uid, $task_uid, $variables, "TO_DO");
    }
} catch (Exception $e) {
    // در صورت بروز خطا، نمایش پیام خطا به صورت JSON
    die(json_encode(array('result' => 'error', 'message' => $e->getMessage())));
