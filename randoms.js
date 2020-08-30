const RAND_MAX = 32767 
const MAX_UINT = 4294967296

/**
 * Генерирует случайные числа при помощи методы Фибоначчи с запаздываниями
 */
class Fibonacci {
    /**
     * @param {number} seed зерно для начала генерации случайных чисел
     */
    constructor(seed){
        this.k = 0;
        this.a = 17
        this.b = 5
        /**Длина массива-затравки, который создан линейным конгруэнтным методом */
        this.l = Math.max(this.a, this.b)
        this.arr = linearCongruent(this.l, seed)
    }
    getRandomValue(){
        if(this.k < this.l){
            return Math.round(this.arr[this.k++] * RAND_MAX)
        }
        else{
            ++this.k
            let next = this.arr[this.k - this.a] - this.arr[this.k - this.b]
            if(next < 0){
                next += 1
            }
            this.arr.push(next)
            return Math.round(next * RAND_MAX)
        }
    }
}
/**
 * @returns массив случайных чисел от 0 до 1 длины N, 
 * заполненный линейным конгруэнтным методом
 * @param {number} N число элементов в возвращаемом массиве 
 * @param {number} seed зерно для начала генерации случайных чисел
 */ 
function linearCongruent(N, seed){
    let next
    if(seed !== undefined){
        next = seed
    }
    else{
        alert(`linearCongruent(undefined)`)
    }
    
    function rand() {
        next = next * 1103515245 + 12345;
        if(next >= MAX_UINT){
           next %= MAX_UINT
        }
        return Math.floor(next/65536) % (RAND_MAX + 1);
    }

    let randArr = new Array(N)

    for(let k = 0; k < N; k++){
        randArr[k] = rand()/RAND_MAX
    }
    return randArr
}