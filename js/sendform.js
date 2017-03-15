    $(document).ready(function(){

             // Устанавливаем обработчик потери фокуса для всех полей ввода текста
             $('input#name, input#surname, input#lastname, input#mail, input#issued, input#tel').unbind().blur( function(){
                // Для удобства записываем обращения к атрибуту и значению каждого поля в переменные 
                var id =  $(this).attr('id');
                var val = $(this).val();
                var rv_name = /^[a-zA-Zа-яА-Я]+$/; 
                var rv_email = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
                var rv_inn = /^[0-9]{10}$/;
                var rv_series = /^[0-9]{4}$/;
                var rv_number = /^[0-9]{6}$/;
               // После того, как поле потеряло фокус, перебираем значения id, совпадающее с id данного поля
               switch(id)
               {
                case 'lastname':
                if(val.length > 3 && val != '' && rv_name.test(val))
                {
                  $(this).addClass('not_error');
                  $(this).next('.error').text('Принято')
                  .css('color','green')
                  .animate({'paddingLeft':'5px'},400)
                  .animate({'paddingLeft':'2px'},400);
                }

                      // Иначе, мы удаляем класс not-error, и заменяем его на класс error, говоря о том что поле содержит ошибку валидации,
                      // и ниже в наш контейнер выводим сообщение об ошибке и параметры для верной валидации

                      else
                      {
                          //  $(this).removeClass('not_error').addClass('error')   
                          $(this).next('.error').html('Имя введено неверно')
                          .css('color','red')
                          .animate({'paddingLeft':'5px'},400)
                          .animate({'paddingLeft':'2px'},400);
                        }
                        break;

                        case 'name':
                        if(val.length > 2 && val != '' && rv_name.test(val))
                        {
                          $(this).addClass('not_error');
                          $(this).next('.error').text('Принято')
                          .css('color','green')
                          .animate({'paddingLeft':'5px'},400)
                          .animate({'paddingLeft':'2px'},400);
                        }

                      // Иначе, мы удаляем класс not-error, и заменяем его на класс error, говоря о том что поле содержит ошибку валидации,
                      // и ниже в наш контейнер выводим сообщение об ошибке и параметры для верной валидации

                      else
                      {
                          //  $(this).removeClass('not_error').addClass('error');
                          
                          $(document.getElementById('er_fio')).html('Неверный формат ФИО')
                          .css('color','red')
                          .animate({'paddingLeft':'5px'},400)
                          .animate({'paddingLeft':'2px'},400);
                        }
                        break;

                        
                        
                        if(val != '' && rv_email.test(val))
                        {

                          $(document.getElementById('er_mail')).text('Принято')
                          .css('color','green')
                          .animate({'paddingLeft':'5px'},400)
                          .animate({'paddingLeft':'2px'},400);
                          $("#valid").css({
                            "background-image": "none"
                          });   
                        }
                        else
                        {
                          
                          $(document.getElementById('er_mail')).html('Неверный формат')
                          .css('color','red')
                          .animate({'paddingLeft':'5px'},400)
                          .animate({'paddingLeft':'2px'},400);

                        }
                        break;

                        case 'inn':
                     //  alert('inn');
                     if(val != '')
                     {

                      $(this).next('.error').text('Принято')
                      .css('color','green')
                      .animate({'paddingLeft':'5px'},400)
                      .animate({'paddingLeft':'2px'},400);
                    }
                    else
                    {

                      $(this).next('.error').html('Неверный формат ИНН')
                      .css('color','red')
                      .animate({'paddingLeft':'5px'},400)
                      .animate({'paddingLeft':'2px'},400);
                    }
                    break;

                    case 'issued':
                     //  alert('inn');
                     if(val != '')
                     {

                      $(document.getElementById('er_vidan')).text('Принято')
                      .css('color','green')
                      .animate({'paddingLeft':'5px'},400)
                      .animate({'paddingLeft':'2px'},400);
                    }
                    else
                    {

                      $(document.getElementById('er_vidan')).html('Неверный формат данных')
                      .css('color','red')
                      .animate({'paddingLeft':'5px'},400)
                      .animate({'paddingLeft':'2px'},400);
                    }
                    break;

               } // end switch(...)

             }); // end blur()


             // Теперь отправим с помощью AJAX
             $('form#service').submit(function(e){


              alert('OK');
              //Принято
              function YES(id, str)
              {
                $(document.getElementById(id)).text(str)
                .css('color','red')
                .animate({'paddingLeft':'5px'},400)
                .animate({'paddingLeft':'2px'},400);
              }

              //Отказан

              /*var n = document.getElementById('institut').options.selectedIndex;
              if(document.getElementById('institut').options[n].value == "0") 
                { 
                 YES('er_inst','Не выбран институт')
                } else  {
                 $(document.getElementById('er_inst')).text('Принято')
                .css('color','green')
                        .animate({'paddingLeft':'5px'},400)
                        .animate({'paddingLeft':'2px'},400);
                      } */

                      n = document.getElementById('fund').options.selectedIndex;
                      if(document.getElementById('fund').options[n].value == "0") 
                      { 
                  // alert(document.getElementById('institut').value);
                  $(document.getElementById('er_fond')).text('Поле выбора категории оплаты не заполнено')
                  .css('color','red')
                  .animate({'paddingLeft':'5px'},400)
                  .animate({'paddingLeft':'2px'},400);
                } else  {
                 $(document.getElementById('er_fond')).text('Принято')
                 .css('color','green')
                 .animate({'paddingLeft':'5px'},400)
                 .animate({'paddingLeft':'2px'},400);
               }

               
               if(document.getElementById('mail').value == "" || !rv_email.test(val)) 
               { 
                 $(document.getElementById('er_mail')).text('Неверный формат E-Mail')
                 .css('color','red')
                 .animate({'paddingLeft':'5px'},400)
                 .animate({'paddingLeft':'2px'},400);
               } else  {
                 $(document.getElementById('er_mail')).text('Принято')
                 .css('color','green')
                 .animate({'paddingLeft':'5px'},400)
                 .animate({'paddingLeft':'2px'},400);
               }


               if(document.getElementById('issued').value == "") 
               { 
                
                 $(document.getElementById('er_vidan')).text('Неверный формат данных')
                 .css('color','red')
                 .animate({'paddingLeft':'5px'},400)
                 .animate({'paddingLeft':'2px'},400);
               } else  {
                 $(document.getElementById('er_vidan')).text('Принято')
                 .css('color','green')
                 .animate({'paddingLeft':'5px'},400)
                 .animate({'paddingLeft':'2px'},400);
               }


               if(document.getElementById('lastname').value == "" || document.getElementById('surname').value == "" || document.getElementById('name').value == "") 
               { 
                 
                 $(document.getElementById('er_fio')).html('Неверный формат ФИО')
                 .css('color','red')
                 .animate({'paddingLeft':'5px'},400)
                 .animate({'paddingLeft':'2px'},400);
               } else  {
                 $(document.getElementById('er_fio')).text('Принято')
                 .css('color','green')
                 .animate({'paddingLeft':'5px'},400)
                 .animate({'paddingLeft':'2px'},400);
               }

               if(document.getElementById('street').value == "" || document.getElementById('k').value == "" || document.getElementById('building').value == "" || document.getElementById('flat').value == "")
               { 
                 
                 $(document.getElementById('er_adres')).html('Неверный формат адреса')
                 .css('color','red')
                 .animate({'paddingLeft':'5px'},400)
                 .animate({'paddingLeft':'2px'},400);
               } else  {
                 $(document.getElementById('er_adres')).text('Принято')
                 .css('color','green')
                 .animate({'paddingLeft':'5px'},400)
                 .animate({'paddingLeft':'2px'},400);
               }



               if(!rv_inn.test(document.getElementById('inn').value)) 
               { 
                  // alert('inn');
                  $(document.getElementById('er_inn')).html('Неверный формат ИНН')
                  .css('color','red')
                  .animate({'paddingLeft':'5px'},400)
                  .animate({'paddingLeft':'2px'},400);
                } else  {
                 $(document.getElementById('er_inn')).text('Принято')
                 .css('color','green')
                 .animate({'paddingLeft':'5px'},400)
                 .animate({'paddingLeft':'2px'},400);
               }

               if(!rv_series.test(document.getElementById('seria').value) || !rv_number.test(document.getElementById('number').value)) 
               { 
                  // alert('pasp');
                  $(document.getElementById('er_pasp')).html('Неверный формат паспортных данных')
                  .css('color','red')
                  .animate({'paddingLeft':'5px'},400)
                  .animate({'paddingLeft':'2px'},400);
                }
                else  {
                 $(document.getElementById('er_pasp')).text('Принято')
                 .css('color','green')
                 .animate({'paddingLeft':'5px'},400)
                 .animate({'paddingLeft':'2px'},400);
               }


               if(document.getElementById('category1').value == "...") 
               { 
                 $(document.getElementById('er_kat1')).html('Поле выбора категории не заполнено')
                 .css('color','red')
                 .animate({'paddingLeft':'5px'},400)
                 .animate({'paddingLeft':'2px'},400);
               } else  {
                 $(document.getElementById('er_kat1')).text('Принято')
                 .css('color','green')
                 .animate({'paddingLeft':'5px'},400)
                 .animate({'paddingLeft':'2px'},400);
               }


               if(document.getElementById('category2').value == "...") 
               { 
                 $(document.getElementById('er_kat2')).html('Поле выбора подкатегории не заполнено')
                 .css('color','red')
                 .animate({'paddingLeft':'5px'},400)
                 .animate({'paddingLeft':'2px'},400);
               } else  {
                 $(document.getElementById('er_kat2')).text('Принято')
                 .css('color','green')
                 .animate({'paddingLeft':'5px'},400)
                 .animate({'paddingLeft':'2px'},400);
               }

                  //  alert(document.getElementById('tel').value);

                 // Запрещаем стандартное поведение для кнопки submit
                 e.preventDefault();

                 // После того, как мы нажали кнопку "Отправить", делаем проверку,
                 // если кол-во полей с классов .not_error равно 3(так как у нас всего 3 поля), то есть все поля заполнены верно,
                 // выполняем наш Ajax сценарий и отправляем письмо адресату

                 if($('.not_error').length == 3)
                 {  

                    // Eще одним моментов является то, что в качестве указания данных для передачи обработчику send.php, мы обращаемся $(this) к нашей форме,
                    // и вызываем метод .serialize().
                    // Это очень удобно, т.к. он сразу возвращает сгенерированную строку с именами и значениями выбранных элементов формы.

                    $.ajax({
                      url: 'send.php',
                      type: 'post',
                      data: $(this).serialize(),

                      beforeSend: function(xhr, textStatus){ 
                        $('form#feedback-form :input').attr('disabled','disabled');
                      },

                      success: function(response){
                        $('form#feedback-form :input').removeAttr('disabled');
                        $('form#feedback-form :text, textarea').val('').removeClass().next('.error-box').text('');
                        alert(response);
                      }
                    }); // end ajax({...})
                  }
                  else
                  {
                    return false;
                  }
                // Иначе, если количество полей с данным классом не равно значению 3 мы возвращаем false,
                // останавливая отправку сообщения в невалидной форме

                
           }); // end submit()





  });