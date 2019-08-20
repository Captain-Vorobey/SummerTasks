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

function squarePolindrom(n, m) {
    let arr = [];
    let temp = Math.pow(n, 2);
    for(; n != m; ++n) {
        if(temp == polindrom(temp) && n == polindrom(n)) {
            arr.push(n);
        }
    }
    return arr;
}

console.log(squarePolindrom(0, 100));

function deleteNth(your_array, limit) {
  let new_arr = [];
  let counts = {};
  your_array.forEach(function(x) {
    counts[x] = (counts[x] || 0) + 1;
    if (counts[x] <= limit) {
        new_arr.push(x);
    }
  });
  console.log(counts);
  return new_arr;
}

function deleteNth(arr,x){
  while (true) {
    for (var i = 0; i < arr.length; ++i) {
      var count = 0;
      
      for (var j = 0; j < arr.length; ++j) {
      
        if (arr[i] === arr[j]) {
          ++count;
          
          if (count > x) {
            arr.splice(j, 1);
            break;
          }
        }        
      }
      if (j !== arr.length) break;      
    }
    if (i === arr.length) break;
  }
  
  return arr;
}

console.log(deleteNth([20, 37, 21, 21, 20, 20], 1));