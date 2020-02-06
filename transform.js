const RAND_MAX = 32767 
const MAX_UINT = 4294967296

let next = 1;

function rand() {
  next = next * 1103515245 + 12345;
  if(next >= MAX_UINT){
      next %= MAX_UINT
  }
  return Math.floor((next/65536)) % (RAND_MAX + 1);
}

function trans(str){
    let array = str.split("")
    //alert(array)
    // array.map(item => item + item)
    // return array.join(" ")
    array = array.map(item => item.charCodeAt(0))
    //alert(array)
    array = array.map(item => unicodeToMyCode(item))
    //alert(array)
    array = array.map(item => item ^ (rand() % 128))
    //alert(array)
    array = array.map(item => myCodeToUnicode(item))
    //alert(array)
    array = array.map(item => String.fromCharCode(item))
    //alert(array)
    return array.join("")
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
        return false
    }
}