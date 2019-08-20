function Number(busStops){
  let inPeople = 0;
  let outPeople = 0;
  for(let i = 0; i != busStops.length; ++i) {
    inPeople += busStops[i][0];
    outPeople += busStops[i][1];
  }
  return inPeople - outPeople;
}

console.log(Number([[10,0],[3,5],[5,8]]));


let arr = [[1, 2, 3], [2, 3, 5]].reduce((a, b) => a + b, []);
console.log(arr);

function isValidWalk(walk) {
    if(walk.length == 10) {
        var arr = [0, 0, 0, 0];
        for (let i = 0; i < walk.length; i++) {
            if (walk[i] === 'n') {
                arr[0]++;
            } else if (walk[i] == 's') {
                arr[1]++;
            } else if (walk[i] == 'w') {
                arr[2]++;
            } else if (walk[i] == 'e') {
                arr[3]++;
            }
        }
        if (arr[0] == arr[1] && arr[2] == arr[3]) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
//console.log(Number1(1.7899, 4));

let names = ["Egor", "Nikita", "Vova"];

function likes(names) {
    let length = names.length;
    for(let i = 0; i != names.length; ++i) {
        if(length === 0) {
            return "no one likes this";
        }
        if(length === 1) {
            return names[i] + "likes this";
        }
        if(length === 2) {
            return names[i] + "and" + names[i + 1] + "like this";
        }
        else if (len === 3) {
            return names[i] + ', ' + names[i + 1] + ' and ' + names[i + 2] + ' like this';
        }
        else if (len > 3) {
            return names[i] + ', ' + names[i + 1] + ' and ' + (length - 2) + ' others like this';
        }
    }
}

function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}

function fibonacci(value) {
    if(value <= 1) {
        return value;
    }
    else {
        return fibonacci(value - 1) + fibonacci(value - 2);
    }
}

function tribonacci(array, n) {
  if(n == 0){
  return [];
  }
    if(n == 1){
        return [array[0]];
    }
    if(n == 2){
        return [array[0], array[1]];
    }
    for(let i = 2; i < n - 1; ++i){
        array.push(array[i - 2] + array[i - 1] + array[i]);
    }
    return array;
}

function tribonacci(signature, n){  
  for (var i = 0; i < n - 3; i++) { // iterate n times
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}

function tribonacci(s, n){
  var arr = [];
  for(var i = 0; i < n; i++) {
    arr.push((i < 3) ? s[i] : arr[i - 1] + arr[i - 2] + arr[i - 3]);
  }
  return arr;
}

function tribonacci(sign, n){
  for (var i = 3; i < n; i++) {
     sign[i] = sign[i - 1] + sign[i - 2] + sign[i - 3];
  }
  return sign.slice(0, n);
}

function findSum(n) {
    let sum = 0;
    for(let i = 3; i != n; ++i) {
        if(i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    return sum;
}

function SeriesSum(n)
{
    let sum = 0;
    for(let i = 1; i <= n; i += 0.3) {
        sum += i;
    }
    return sum;
}

function SeriesSum(n) {
    let sum = 0;
   for (let i = 1; i < n; i++) {
     sum += 1 / i * 3;
   }
   return sum.toFixed(2)
 }

function SeriesSum(n)
{
    let sum = 0;
  for(let i = 1; i <= n * 3; i += 3) {
    sum += 1 / i;
  }
  return a.toFixed(2);
}

const comp = (a1, a2) => {
  if (!a1 || !a2 || a1.length !== a2.length) return false;
  return a1.map(x => x * x).sort().toString() === a2.sort().toString();
}

function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}

const comp = (array1, array2) => 
  Array.isArray(array1) &&
  Array.isArray(array2) &&
  array1.every(item => {
    const index = array2.indexOf(Math.pow(item, 2))
    return index > -1 ? array2.splice(index, 1) : false
  })

  function nbYear(p0, percent, aug, p) {
  const percentage = percent / 100
  let result = p0
  let years = 0

  while (result < p) {
    result += result * percentage + aug
    years++
  }
  return years
}

function nbYear(p0, percent, aug, p) {
    let year = 0;
    while(p0 < p) {
        p0 += p0 * (percent / 100) + aug;
    }
    return year;
}

function getAlphabets(){ 
    let result = []; 
    for(let i = 65; i < 91; ++i) { 
    result.push(String.fromCharCode(i)); 
} 
    return result; 
}

console.log(getAlphabets());

function factorial(n)
{
  let temp = 1;
  let temp1 = 1;
  if(n < 0 || n > 12) {
      return RangeError();
  }
  for(let i = 0; i < n - 1; ++i) {
      temp += temp * temp1;
      ++temp1;
  }
  return temp;
}

function factorial(n) {
  if (n < 0 || n > 12)
    throw new RangeError();
  return n <= 1 ? 1 : n * factorial(n - 1);
}

console.log(factorial(5));


/*let a = 4;
a.b = 3;
console.log(a.b  == '3');*/