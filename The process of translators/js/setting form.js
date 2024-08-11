// مخفی کردن سابفرم تنظیمات:
let settingSubForm='75680350566adc1f8827f89053881536';
$('#'+settingSubForm).hide();

//__________کد عدم نمایش شماره ردیف در گرید__________


$('.index-row').css ('display' , 'none') ;

$('#grd_trans_details').onAddRow(function(aNewRow , aGrid , rowIndex){


  $('.index-row').css ('display' , 'none') ;
}) ;


//.....................................................

//تابع نمایش پیغام
function showAlert(type, message) {

  //استفاده از کتابخانه نوتیفیلیکس
  Notiflix.Notify.init({
    rtl: true,
    fontFamily: "Quicksand",
    useGoogleFont: true,
    position: "right-top",
    success: { notiflixIconColor: "#ffffff" },
    failure: { notiflixIconColor: "#ffffff" },
    warning: { notiflixIconColor: "#ffffff" }
  });

  switch (type) {
    case "error":
      Notiflix.Notify.failure(message);
      break;
    case "warning":
      Notiflix.Notify.warning(message);
      break;
    case "success":
      Notiflix.Notify.success(message);
      break;
    case "info":
      Notiflix.Notify.info(message);
      break;
              }

}


//توابع ماسک
var inputMaskTypes = {
  mobile: ['txt_mobile'],
  integer: ['txt_Translation_cost','txt_Translation_number','txt_prepayment','txt_Final_payment','txt_Translation_time'],
  pars: ['txt_name','txt_Translator_username','txt_name_Translator','txt_Description','txr_order_desc'],
  email: [ "txt_email"],

};
createInputmask(inputMaskTypes);


//.......................................

//سابمیت فرمها:
$("#Translator button").click(function(){
    var form_id = $("form").prop('id');
    $("#" + form_id).submitForm();
}).addClass('btn-success');
