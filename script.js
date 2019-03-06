var vowels_list = ["и", "ы", "у", "э", "о", "а", "ю", "я", "е", "ё"];

function vowels_amount() {

//Создаем переменную в которую будем записывать результат подсчета
    var vowels_counter = 0;

    //Создаем переменную в которую забираем из DOM пользовательскую строку
    var vowels_field = document.getElementById("vowels_field").value;

    //Приводим к нижнему регистру
    vowels_field = vowels_field.toLowerCase();

    //Цикл который прокручивает полученную строку
    for(var i = 0; i < vowels_field.length; i++) {

        //Сравниваем каждую позицию пользовательской строки с нашим массивом гласных букв и в случае совпадения увеличиваем переменную vowels_counter через инкремент
        for(var v = 0; v < 10; v++) {

            if( vowels_field[i] == vowels_list[v] ) vowels_counter++;
        }
    }

    // Сохраняем ссылку на поле с результатом
    var result_field = document.getElementById("result_field");

    // Изменяем ее значение. Число vowels_counter преобразовываем в строку методом toString()
    result_field.value = vowels_counter.toString();}
