function number1(value) { // 1
    if(value < 1 || value > 1999) {
        console.log('Wrong Number');
    }

    let s = '';
    while(value >= 1000) {
        s += "M";
        value -= 1000;
    }

    while (value >= 900) {
        s += "CM";
        value -= 900;
    }

    while (value >= 500) {
        s += "D";
        value -= 500;
    }

    while (value >= 400) {
        s += "CD";
        value -= 400;
    }

    while (value >= 100) {
        s += "C";
        value -= 100;
    }

    while (value >= 90) {
        s += "XC";
        value -= 90;
    }

    while (value >= 50) {
        s += "L";
        value -= 50;
    }

    while (value >= 40) {
        s += "XL";
        value -= 40;
    }

    while (value >= 10) {
        s += "X";
        value -= 10;
    }

    while (value >= 9) {
        s += "IX";
        value -= 9;
    }

    while (value >= 5) {
        s += "V";
        value -= 5;
    }

    while (value >= 4) {
        s += "IV";
        value -= 4;
    }

    while (value >= 1) {
        s += "I";
        value -= 1;
    }    
    return s;
}

console.log(number1(56));

function oneTime (str) { // 3
     let maybeResult = str.toLocaleLowerCase().split('').map((currentValue, index, array) => {
        return !(array.slice(index + 1).includes(currentValue)) && !(array.slice(0, index).includes(currentValue));
     })
     console.log(maybeResult);
     let str1 = str.split('');
     for(let i = 0; i != maybeResult.length; ++i) {
        if(maybeResult[i]) {
            return str1[i];
        }
     }
     return '';
}

console.log(oneTime('ddqhhj'));

function moreOneTime (str) { // 4
     let maybeResult = str.toLocaleLowerCase().split('').map((currentValue, index, array) => {
         return !(array.slice(index + 1).includes(currentValue)) && !(array.slice(0, index).includes(currentValue));
     })
     let str1 = str.split(',').toString();
     for(let i = 0; i != maybeResult.length; ++i) {
         if(!maybeResult[i]) {
             result = str1.split(str1[i]).join('');
             return moreOneTime(result);
         }
     }
     return result;
}

console.log(moreOneTime('tioaimmt'));