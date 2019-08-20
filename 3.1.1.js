let a = [2, 2, 2, 3, 4, 4, 5];            // 1 task
let a1 = [3, 4, 5, 5, 6, 6, 7];
let a2 = [...a, ...a1]; // [2, 2, 2, 2, 4, 5, 6, 7, 7, 3, 4, 5, 5]
                        // a[0] = 2, a[3] = 2, a[4] = 4
                        // b[0] = 2, b[1] = 4
let b = [];
let b1 = [];

function MatrixB(array1, array2) {
    for(let i = 0; i != array1.length; ++i) {
            if(array1[i] != array1[i + 1]) {
                array2.push(array1[i]);
            }
    }
    return array2;
}

function MatrixB1(array1, array2) {
    return MatrixB(array1, array2);
}

function counter(array) {
    let counter = 0;
    for(let i = 0; i != array.length; ++i) {
        ++counter;
    }
    return counter;
}

function lastMatrix(array1, array2) {
    let counter1 = 0;
    let counterB = counter(array1);
    let counterB1 = counter(array2);
    if(counterB < counterB1) {
        counter1 = counterB1 - counterB;                // counter = counter > 0 ? --counter : 0;

        for(let i = 0; i != array1.length; ++i) {
        if(counterB < counterB1) {
            array1.push(0);
            counter = counter > 0 ? --counter : 0;
        }
        return array1;
    }
}
    else {
     counter1 = counterB1 - counterB;
     for(let i = 0; i != array2.length; ++i) {
        if(counterB > counterB1) {
            array2.push(0);
            counter = counter > 0 ? --counter : 0;
        }
        return array2;
    }
}
}

console.log(MatrixB(a, b));
console.log(MatrixB(a1, b1));
console.log(counter(b));
console.log(counter(b1));
console.log(lastMatrix(b, b1));
let b2 = [b, b1];
console.log(b2);