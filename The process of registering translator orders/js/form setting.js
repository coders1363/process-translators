// مخفی کردن سابفرم تنظیمات:
let settingSubForm='90855314166af424eaf0c14003695814';
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



//...........................

var grid = $('#grd_trans_details');
var selectedID = $('#hid_selected_translator_id');
selectedID.hide();

function selectOneAndJustOne() {
     let number_of_translators = grid.getNumberRows();
     let counter = 0;
     for (let i = 1; i <= number_of_translators; i++) {
          if (grid.getValue(i, 4) == 1) {
               counter += 1;
          }
     }
     if (counter > 1 || counter == 0)
          return false;
     for (let i = 1; i <= number_of_translators; i++) {
          if (grid.getValue(i, 4) == 1) {
               selectedID.setValue(grid.getValue(i, 1));
          }
     }
     return true;
}
$('#40134433866af6104f34259075846280').setOnSubmit(function () {
     let check = selectOneAndJustOne();
     if (!check) {
          Alert("فقط یک مورد از مترجمین را انتخاب کنید");
          return false;
     }
})


//.......................................

//سابمیت فرمها:
$("#Translator button").click(function(){
    var form_id = $("form").prop('id');
    $("#" + form_id).submitForm();
}).addClass('btn-success');
