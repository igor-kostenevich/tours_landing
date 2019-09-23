$(document).ready(function(){

    // jQuery.validator.addMethod("phoneUS", function (phone_number, element) {
    //     phone_number = phone_number.replace(/\s+/g, "");
    //     return this.optional(element) || phone_number.length > 9 && phone_number.match(/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
    // }, "Please specify a valid phone number");

    $('#form-tours').validate({
        rules: {
            name: {
              required: true,
              minlength: 3,
              onfocusout: false
            },
            email: {
                required: true,
                email: true,
                onfocusout: false
            },
            tel: {
                required: true,
                number: true,
                maxlength: 10,
                minlength: 10
                // digits: true,
                // phoneUS: true
            },
            countries: {
                required: true
            }
          },
          
          messages: {
            name: {
              required: "Заполните поле!",
              minlength: jQuery.validator.format("Имя должно содержать не меньше {0}-х символов!")
            },
            email: {
                required: "Заполните поле!",
                email: "example@example.com"
            },
            tel: {
                required: 'example - 0505716996',
                number: "Можно вводить только числовые значения!",
                minlength: "Номер телефона не может быть меньше 10 символов",
                maxlength: "Номер телефона не может быть больше 10 символов"
            },
            countries: {
                required: "Выберите страну"
            }
          }
    });
    
});

// 