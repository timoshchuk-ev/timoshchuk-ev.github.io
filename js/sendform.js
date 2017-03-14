$(document).ready(function () {


    function YES(th) {
        th.next('.error').text('Принято').css('color', 'green')
            .animate({'paddingLeft': '5px'}, 400)
            .animate({'paddingLeft': '2px'}, 400)
            .addClass('not_error');
    }

    function NO(th) {
        th.next('.error').html('Неверный формат данных').css('color', 'red')
            .animate({'paddingLeft': '5px'}, 400)
            .animate({'paddingLeft': '2px'}, 400)
            .removeClass('not_error').addClass('is_error');
    }

    var rv_email = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
    var rv_inn = /^[0-9]{12}$/;
    var rv_series = /^[0-9]{4}$/;
    var rv_number = /^[0-9]{6}$/;
    var rv_name = /^[a-zA-Zа-яА-Я]+$/;

    // Устанавливаем обработчик потери фокуса для полей ввода текста
    $('input#name, input#surname, input#lastname, input#mail, input#issued, input#tel').unbind().blur(function () {
        // Для удобства записываем обращения к атрибуту и значению каждого поля в переменные
        var id = $(this).attr('id');
        var val = $(this).val();

        // После того, как поле потеряло фокус, перебираем значения id, совпадающее с id данного поля
        switch (id) {

            case 'name':
            case 'surname':
            case 'lastname':
                if (val.length >= 2 && val != '' && rv_name.test(val)) {
                    YES($('input#lastname'));
                }
                else {
                    NO($('input#lastname'));
                }
                break;

            case 'mail':
                if (val != '' && rv_email.test(val)) {
                    YES($(this));
                }
                else {
                    NO($(this));
                }
                break;

            case 'inn':
                if (val != '' && rv_inn.test(val)) {
                    YES($(this));
                }
                else {
                    NO($(this));
                }
                break;

            case 'issued':
                if (val != '') {
                    YES($(this));
                }
                else {
                    NO($(this));
                }
                break;
        } // end switch(...)

    }); // end blur()

    // Теперь отправим с помощью AJAX
    $('form#service').submit(function (e) {

        // var rv_name = /^[a-zA-Zа-яА-Я]+$/;


        if ($('select#institute').val() == "0") {

            NO($('select#institute'));
        } else {
            YES($('select#institute'));
        }


        if ($('select#fund').val() == "0") {
            NO($('select#fund'));
        } else {
            YES($('select#fund'));
        }


        if (document.getElementById('mail').value == "") {
            NO($('input#mail'));
        } else {
            YES($('input#mail'));
        }


        if (document.getElementById('issued').value == "") {

            NO($('input#issued'));
        } else {
            NO($('input#issued'));
        }

        if (document.getElementById('tel').value == "") {
            NO($('input#tel'));
        }
        else {
            YES($('input#tel'));
        }

        if (document.getElementById('lastname').value == "" || document.getElementById('surname').value == "" || document.getElementById('name').value == "") {

            NO($('input#lastname'));
        } else {
            YES($('input#lastname'));
        }

        if (document.getElementById('street').value == "" || document.getElementById('k').value == "" || document.getElementById('building').value == "" || document.getElementById('flat').value == "") {

            $(document.getElementById('er_address')).html('Неверный формат адреса')
                .css('color', 'red')
                .animate({'paddingLeft': '5px'}, 400)
                .animate({'paddingLeft': '2px'}, 400);
        } else {
            $(document.getElementById('er_address')).text('Принято')
                .css('color', 'green')
                .animate({'paddingLeft': '5px'}, 400)
                .animate({'paddingLeft': '2px'}, 400);
        }


        if (!rv_inn.test(document.getElementById('inn').value)) {
            // alert('inn');
            NO($('input#inn'));
        } else {
            YES($('input#inn'));
        }

        if (!rv_series.test(document.getElementById('series').value) || !rv_number.test(document.getElementById('number').value)) {
            // alert('pasp');
            NO($('input#number'));
        }
        else {
            YES($('input#number'));
        }


        if (document.getElementById('category1').value == "...") {
            NO($('input#category1'));
        } else {
            YES($('input#category1'));
        }


        if (document.getElementById('category2').value == "...") {
            NO($('input#category2'));
        } else {
            YES($('input#category2'));
        }

        //  alert(document.getElementById('tel').value);

        // Запрещаем стандартное поведение для кнопки submit
        e.preventDefault();

        // После того, как мы нажали кнопку "Отправить", делаем проверку,
        // если кол-во полей с классов .not_error равно 3(так как у нас всего 3 поля), то есть все поля заполнены верно,
        // выполняем наш Ajax сценарий и отправляем письмо адресату

        if ($('.not_error').length == 5) {
            alert("SUCCESS!");
            // Eще одним моментов является то, что в качестве указания данных для передачи обработчику send.php, мы обращаемся $(this) к нашей форме,
            // и вызываем метод .serieslize().
            // Это очень удобно, т.к. он сразу возвращает сгенерированную строку с именами и значениями выбранных элементов формы.

            $.ajax({
                url: 'send.php',
                type: 'post',
                data: $(this).serieslize(),

                beforeSend: function (xhr, textStatus) {
                    $('form#feedback-form :input').attr('disabled', 'disabled');
                },

                success: function (response) {
                    $('form#feedback-form :input').removeAttr('disabled');
                    $('form#feedback-form :text, textarea').val('').removeClass().next('.error-box').text('');
                    alert(response);
                }
            }); // end ajax({...})
        }
        else {
            alert("FAILED" + $('.not_error').length);
            return false;
        }
        // Иначе, если количество полей с данным классом не равно значению 3 мы возвращаем false,
        // останавливая отправку сообщения в невалидной форме


    }); // end submit()


})
;