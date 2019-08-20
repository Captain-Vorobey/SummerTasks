function get_digit_array(value, k) { // 1, 2, 5, 7, 8, 10
    let counter = 0;
    let temp = 0;
    let array = new Array();
    for(; parseInt(value); value /= 10)
    {
        temp = parseInt(value % 10);
        array.push(temp);
    }

    for(let i = 0; i != array.length; ++i)
    {
        for(let j = i + 1; j != array.length; ++j)
        {
            if(array[i] == array[j])
            {
                ++counter;
            }
        }
        if(counter == k)
        {
            return true;
        }
    }
    return false;
}

function polindrom(value) { // 3
    let arr = [];
    for(; parseInt(value); value /= 10)
    {
        arr.push(value % 10);
    }

    for(let i = 0, j = arr.length; i != arr.length; ++i, --j)
    {
        if(arr[i] != arr[j])
        {
            return false;
        }
    }
    return true;
}

function differentNumbers(value) { // 4, 6
    let array = new Array();
    for(; parseInt(value); value /= 10) {
        array.push(parseInt(value % 10));
    }

    for(let i = 0; i != array.length; ++i) {
        for(let j = i + 1; j != array.length; ++j) {
            if(array[i] == array[j]) {
                return false;
            }
        }
    }
    return true;
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;

function sumOfFirstDigits (value, k) { // 9
    let temp = 0;
    let array1 = new Array();
    for(; parseInt(value) != 0; value/=10)
    {
        temp = parseInt(value%10);
        array1.push(temp);
    }

    let sum1 = array1.slice(0, k).reduce(reducer);
    let size = array1.length - k;
    let sum2 = array1.slice(size, array1.length).reduce(reducer);
    if(sum1 === sum2)
    {
        return true;
    }
    return false;
}

console.log(polindrom(12321));
console.log(sumOfFirstDigits(123321, 4));