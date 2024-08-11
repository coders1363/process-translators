try {
    // دریافت مقدار شناسه درخواست
    $app_uid = @@APPLICATION;

    // کوئری برای دریافت اطلاعات مرتبط با شناسه درخواست
    $fetchRequestDetailsQuery = "SELECT 
    pt.APP_UID,
        pt.APP_NUMBER,
        pt.APP_STATUS,
        pt.TXT_NAME,
        pt.TXT_EMAIL,
        pt.TXT_MOBILE,
        pt.DRP_TRANSLATION_FIELD,
        pt.HIDE_SOURCE_APP_UID,
        pt.DRP_TRANSLATION_FIELD_LABEL,
        pt.TXT_NAME_TRANSLATE,
        pudt.TXT_TRANSLATION_TIME,
        pudt.TXT_TRANSLATION_COST
FROM `pmt_translate` pt
INNER JOIN pmt_update_db_trans pudt ON pt.APP_UID = pudt.HIDE_SOURCE_APP_UID
WHERE pt.APP_UID = '$app_uid' AND pudt.RAD_ACCEPT_TRANS = '1'";

    // اجرای کوئری
    $resultMain = executeQuery($fetchRequestDetailsQuery);
	//echo '<pre>';var_dump($fetchRequestDetailsQuery);die();
//dd($resultMain);
    // بررسی وجود نتایج و تنظیم مقادیر گرید
    if (count($resultMain) > 0) {
        $review_list = [];
        foreach ($resultMain as $key => $app) {
            $review_list[$key] = [
                'txt_name' => $app['TXT_NAME'],
                'txt_email' => $app['TXT_EMAIL'],
                'txt_mobile' => $app['TXT_MOBILE'],
                'drp_Translation_field' => $app['DRP_TRANSLATION_FIELD'],
                'txt_Translation_time' => $app['TXT_TRANSLATION_TIME'],
                'txt_Translation_cost' => $app['TXT_TRANSLATION_COST']
            ];
        }

        // تنظیم مقادیر گرید
        @@grd_trans_details = $review_list; // اصلاح شده
    }

} catch (Exception $e) {
    // مدیریت استثناها و نمایش خطا
    die("خطا: " . $e->getMessage());
}
