// مخفی کردن سابفرم تنظیمات:
let settingSubForm='75680350566adc1f8827f89053881536';
$('#'+settingSubForm).hide();

//__________کد عدم نمایش شماره ردیف در گرید__________


$('.index-row').css ('display' , 'none') ;

$('#grd_trans_details').onAddRow(function(aNewRow , aGrid , rowIndex){


  $('.index-row').css ('display' , 'none') ;
}) ;

//.................................

$(document).ready(function() {
  $('#txt_Final_payment').on('input', function() {
    if ($(this).val().trim() !== '') {
      $('#fil_user_boss_tahghigh').prop('disabled', false);
    } else {
      $('#fil_user_boss_tahghigh').prop('disabled', true);
    }
  });
});


// مدیریت نمایش لینک و فیلد ورودی بر اساس وجود URL مخفی

if($("#hid_fil_boss_user_tahghigh_url").getValue() != "")
{
  $('#fil_user_boss_tahghigh').hide();
  $('#fil_user_boss_tahghigh').disableValidation();
  $("#lnk_fil_boss_tahghigh").show();
  let hid_fil_boss_tahghigh_url = $("#hid_fil_boss_user_tahghigh_url").getValue();
  let hid_fil_boss_tahghigh_name = $("#hid_fil_boss_tahghigh_name").getValue();
  $("#lnk_fil_boss_tahghigh").find('a').prop('href',hid_fil_boss_tahghigh_url).html(hid_fil_boss_tahghigh_name);
}
else{
  $('#fil_user_boss_tahghigh').show();
  $("#lnk_fil_boss_tahghigh").hide();
}

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
