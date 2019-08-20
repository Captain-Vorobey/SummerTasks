//1
function task13 (value,k){
    let count = 0;
    value *= Math.pow(10,k);
    let temp;
    for(; value; value /= 10){
        temp = parseInt(value % 10);
        if(temp == 9){
            ++count;
        }
    }
    return count;
}
//2
function sum_of_first_k (value,k){
    let sum = 0;
    value *= Math.pow(10,k);
    let temp = 0;
    for(;value; value /= 10){
        temp = parseInt(value % 10);
        sum += temp;
    }
    return sum;
}
//4
function sum_of_next_n (value,k,n){
    let temp;
    let help = n + k;
    let sum = 0;
    value *= Math.pow(10,help);
    for(let i = 0; i < n ; ++i){
        temp = parseInt(value % 10);
        sum += temp;
        value = parseInt(value / 10);
    } 
    return sum;
}
function task15 (value,k,n){
    return sum_of_first_k(value,k) == sum_of_next_n(value,k,n);
}
//4
function value_of_k_num (value,k){
    value *= Math.pow(10,k);
    let answer = parseInt(value % 10);
    return answer;
}
function task16(value,k,n){
    return value_of_k_num(value,k) == sum_of_next_n(value,k,n);
}
//5
function sum_of_previous_n(value,k,n){
    --k;
    value *= Math.pow(10,k);
    let sum = 0;
    let temp;
    for(let i = 0; i < n ; ++i){
    temp = parseInt(value % 10);
    sum += temp;
    value = parseInt(value / 10);
    }
    console.log(sum);
    return sum;
}
function task17(value,k,n){
    return value_of_k_num(value,k) == sum_of_previous_n(value,k,n);
}
//6
//смотреть функцию sum_of_next_n.
//7
function sum_of_int_part (value){
    let sum = 0;
    let temp;
    value = parseInt(value);
    while(value > 0){
        temp = parseInt(value % 10);
        sum += temp;
        value = parseInt(value / 10);
    }
    return sum;
}
function task19(value,k){
    return sum_of_int_part(value) == sum_of_first_k(value,k);
}
//8
//???
//9
function task21(value,n){
    let temp = parseInt(value);
    temp *= Math.pow(10,n);
    value *= Math.pow(10,n);
    value -= temp;
   return all_different(value);
}
//10
function task22(value,n){
    value *= Math.pow(10,n);
    let predicator = parseInt(value % 10);
    let temp;
    for(let i = 0; i < n; ++i){
        temp = parseInt(value % 10);
        if(predicator != temp){
            return false;
        }
        value = parseInt(value / 10);
    }
    return true;
}
//11
function PullArray(value,k) { // 11
    let a = [];
    let help = parseInt(value) * Math.pow(10,k);
    value *= Math.pow(10,k);
    value -= help;
    for(let i = 0; value && i != k; value /= 10, ++i){
        a.push(parseInt(value % 10));
    }
    return a;
}
function CheckOnMonotony(arr) { // 11
    for(let i = 0; i != arr.length; ++i) {
        if(arr[i] < arr[i+1]) {
            return false;
        }
    }
    return true;
}
console.log(CheckOnMonotony(PullArray(3.345,3)));

function numberN(n) { // 1
    for(let a = 0; a != 1000; ++a) {
        for(let b = 0; b != 1000; ++b) {
            if(n == 3 * a + 5 * b) {
                console.log(a);
                console.log(b);
                console.log('-----');               
            }
        }
    }
}

numberN(14);