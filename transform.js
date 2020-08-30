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
    if(c === "ё") return "е";
    if(c === "—") return "-";
    if(c === "–") return "-";
    return c
}

function unicodeToMyCode(n){
    if(n < 31){
        alert(`Похоже, вы ввели недопустимый символ с кодом ${n}. Автор сайта предполагал, что это невозможно.`)
        return false
    } else if(n < 128){
        return n - 32
    } else if(n >= 1040 && n <= 1103){
        return n - 944
    } else {
        alert(`Жаль, но символ ${String.fromCharCode(n)} не поддерживается`)
        return false
    }
}

function myCodeToUnicode(n){
    if(n < 0){
        return false
    }
    else if(n <= 95){
        return n + 32
    }
    else if(n <= 159){
        return n + 944
    }
    else{
        return n + 944
    }
}