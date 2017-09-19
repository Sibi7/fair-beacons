$(document).ready(function () {

    $(".menu-link").click(function () {
        $("ul").slideToggle("slow", function () {
        });
    });



    $('input#Name, input#Email, input#Phone, textarea#Message').unbind().blur( function(){
        var id = $(this).attr('id');
        var val = $(this).val();


        switch(id)
        {
            case 'Name':
                var rv_name = /^[a-zA-Zа-яА-Я]+$/;

                if (val.length > 2 && val != '' && rv_name.test(val)) {
                    $(this).addClass('not_error').removeClass('error');
                    $(this).next('.error-box').addClass('correctly')
                        .css({'color': 'transparent'})
                        .animate({'right':'30px'},400)
                        .animate({'right':'0'},400)
                        .animate({'right':'15px'},400)
                        .animate({'right':'0'},400)
                        .animate({'right':'5px'},400)
                        .animate({'right':'0'},400);
                    $(this).css({'color': '#ccc'})
                } else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error-box').removeClass('correctly')
                        .css('color','red')
                        .animate({'right':'30px'},400)
                        .animate({'right':'0'},400)
                        .animate({'right':'15px'},400)
                        .animate({'right':'0'},400)
                        .animate({'right':'5px'},400)
                        .animate({'right':'0'},400);
                    $(this).css({'color': 'red'})
                }
                break;

            // Проверка email
            case 'Email':
                var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
                if (val != '' && rv_email.test(val))
                {
                    $(this).addClass('not_error').removeClass('error');
                    $(this).next('.error-box').addClass('correctly')
                        .css({'color': 'transparent'})
                        .animate({'right':'30px'},400)
                        .animate({'right':'0'},400)
                        .animate({'right':'15px'},400)
                        .animate({'right':'0'},400)
                        .animate({'right':'5px'},400)
                        .animate({'right':'0'},400);
                    $(this).css({'color': '#ccc'})
                } else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error-box').removeClass('correctly')
                        .css('color','red')
                        .animate({'right':'30px'},400)
                        .animate({'right':'0'},400)
                        .animate({'right':'15px'},400)
                        .animate({'right':'0'},400)
                        .animate({'right':'5px'},400)
                        .animate({'right':'0'},400);
                    $(this).css({'color': 'red'})
                }
                break;
            case 'Phone':
                var rv_Phone = /^[0-9]+$/;

                if (val.length > 2 && val != '' && rv_Phone.test(val)) {
                    $(this).addClass('not_error').removeClass('error');
                    $(this).next('.error-box').addClass('correctly')
                        .css({'color': 'transparent'})
                        .animate({'right':'30px'},400)
                        .animate({'right':'0'},400)
                        .animate({'right':'15px'},400)
                        .animate({'right':'0'},400)
                        .animate({'right':'5px'},400)
                        .animate({'right':'0'},400);
                    $(this).css({'color': '#ccc'})
                } else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error-box').removeClass('correctly')
                        .css('color','red')
                        .animate({'right':'30px'},400)
                        .animate({'right':'0'},400)
                        .animate({'right':'15px'},400)
                        .animate({'right':'0'},400)
                        .animate({'right':'5px'},400)
                        .animate({'right':'0'},400);
                    $(this).css({'color': 'red'})
                }
                break;
        } // end switch(...)

    }); // end blur()


});