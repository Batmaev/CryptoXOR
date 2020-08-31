/**
 * Расшифровывает зашифрованное, шифрует незашифрованное
 * @param {string} str что шифруем 
 * @param {number} seed ключ
 */
function trans(str, seed){
    const fib = new Fibonacci(seed)

    return str .
    split("") .
    map(item => replace(item)) . 
    map(item => item.charCodeAt(0)) .
    map(item => unicodeToMyCode(item)) .
    map(item => item ^ (fib.getRandomValue() % 32)) .
    map(item => myCodeToUnicode(item)) .
    map(item => String.fromCharCode(item)) .
    join("");
}

/**Заменяет Ё на Е,
 * чтобы было проще перейти от кодов Unicode к маленьким числам MyCode, 
 * с которыми удобно делать xor
 */
function replace(c){
    if(c === "Ё") return "Е";
    if(c === "—") return "-";
    if(c === "–") return "-";
    return c
}

/* Программа использует 160 символов. Их внутренее представление - числа от 0 до 159.
   159 = 10011111
   Если X < 160, а Y < 32,
   то X `xor` Y < 160.

   Если бы использовать 161 или 159 символов, то это замечательное свойство нарушится.
   Вот почему нет места для большой буквы Ё
 */

 /**
  * Отображение хаотично разбросанных по таблице Unicode латиницы и кириллицы
  * в отрезок [0, 159], с которым удобно делать xor
  * @param {number} n код Unicode: ascii, кириллица или маленькая буква Ё
  */
function unicodeToMyCode(n){
    if(n < 31){
        alert(`Похоже, вы ввели недопустимый символ с кодом ${n}. Автор сайта предполагал, что это невозможно.`)
        return false
    } else if(n < 127){ // это ascii
        return n - 32
    } else if(n >= 1040 && n <= 1103){ // Это кириллица
        return n - 945
    } else if(n === 1105){ // это буква ё
        return 159
    }
     else {
        alert(`Жаль, но символ ${String.fromCharCode(n)} не поддерживается`)
        return false
    }
}

function myCodeToUnicode(n){
    if(n < 0){
        return false
    }
    else if(n <= 94){
        return n + 32
    }
    else if(n < 159){
        return n + 945
    }
    else if(n === 159){ // это буква ё
        return 1105
    }
    else{
        return n + 944
    }
}