$(document).ready(function(){$("#form-tours").validate({rules:{name:{required:!0,minlength:3,onfocusout:!1},email:{required:!0,email:!0,onfocusout:!1},tel:{required:!0,number:!0,maxlength:10,minlength:10},countries:{required:!0}},messages:{name:{required:"Заполните поле!",minlength:jQuery.validator.format("Имя должно содержать не меньше {0}-х символов!")},email:{required:"Заполните поле!",email:"example@example.com"},tel:{required:"example - 0505716996",number:"Можно вводить только числовые значения!",minlength:"Номер телефона не может быть меньше 10 символов",maxlength:"Номер телефона не может быть больше 10 символов"},countries:{required:"Выберите страну"}}})});