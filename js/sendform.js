

        function SendForm()
        {
            var =document.Test2.Item.selectedIndex;
            var Txt="";
            Txt="Предложено "+document.Test2.Item.length+" напитков"+
                "\nВыбран "+document.Test2.Item.options[sI].text+
                " (value= "+document.Test2.Item.options[sI].value+
                ", index= "+document.Test2.Item.options[sI].index+")";
            if(document.Test2.Item.options[sI].defaultSelected)
                {Txt+="\nЭтот напиток выбирается по умолчанию";}
                
            }
alert('OK');

        }
