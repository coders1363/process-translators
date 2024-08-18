<?php

try {
	// دریافت مقدار شناسه درخواست
	$app_uid = @@APPLICATION;

	
	// کوئری برای دریافت اطلاعات مرتبط با شناسه درخواست
	$fetchRequestDetailsQuery = "SELECT `APP_UID`, `APP_NUMBER`, `APP_STATUS`, `TXT_NAME_TRANSLATE`,`HIDE_SOURCE_APP_UID`, `TXT_TRANSLATION_TIME`, `TXT_TRANSLATION_COST` FROM `pmt_translate`
WHERE HIDE_SOURCE_APP_UID= '$app_uid' AND RAD_ACCEPT_TRANS = '1'";

	// اجرای کوئری
	$resultMain = executeQuery($fetchRequestDetailsQuery);

	//echo '<pre>';var_dump($fetchRequestDetailsQuery);die();
	//dd($fetchRequestDetailsQuery);
	// بررسی وجود نتایج و تنظیم مقادیر گرید
	if (count($resultMain) > 0) {
		$review_list = [];
		foreach ($resultMain as $key => $app) {
			$review_list[$key] = [
				'txt_id_translate' => $app['APP_UID'],
				'txt_name_translate' => $app['TXT_NAME_TRANSLATE'],
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