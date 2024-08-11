<?php


try {
	
	
    // مقداردهی به متغیر نگهدارنده آی دی درخواست دهنده
    @@user_id= @@USER_LOGGED;
    $userLogged =@@USER_LOGGED;
    // کوئری برای دریافت اطلاعات کاربر وارد شده
    $queryMain = "SELECT 
        CONCAT(u.`USR_FIRSTNAME`, ' ', u.`USR_LASTNAME`) AS `Full_Name`
    FROM 
        `users` u
    
    WHERE 
        u.`USR_UID`= '$userLogged'";
    

    $resultMain = executeQuery($queryMain);
    
    //echo '<pre/>';
   // var_dump('queryMain:',$queryMain,' $resultMain',$resultMain);
   // die();

    @@txt_name_translate = $resultMain[1]['Full_Name'];
           
    
    

} catch (Exception $e) {
    die("Error: " . $e->getMessage());
}
