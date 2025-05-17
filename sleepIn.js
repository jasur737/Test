// function sleepIn(weekday, vacation){
//   if (weekday == vacation) {
//     return true
//   } else if (weekday > vacation) {
//     return false
//   } else {
//     return true
//   }
// }

// function monkeyTrouble(aSmile, bSmile) {
//   if (aSmile == bSmile) {
//     return true;
//   } else if (aSmile > bSmile) {
//     return false;
//   } else {
//     return false;
//   }
// }

// function sumDouble(a, b){
//   if (a == b) {
//     return (a + b) * 2
//   } else {
//     return a + b
//   }
//  }

//  function diff21(n){
//   if (n > 21) {
//     return (n - 21) * 2
//   } else {
//     return 21 - n
//   }
// }

// function parrotTrouble(talking, hour){
//   if (talking & (hour < 7 || hour > 20)) {
//     return true
//   } else {
//     return false
//   }

// }

// function makes10(a, b){
//   if (a == 10 || b == 10) {
//     return true
//   } else if (a + b == 10) {
//     return true
//   } else {
//     return false
//   }
// }

// function notString(str) {
//   if (str.startsWith("not")) {
//     return str;
//   } else {
//     return "not " + str;
//   }
// }

// function missingChar(str, n){
//   return str.slice(0, n) + str.slice(n + 1)
// }



function frontBack(str) {
  if (str.length > 1) {
    return str.slice(-1) + str.slice(1, -1) + str.slice(0, 1);
  } else {
    return str
  }
}


function front3(str){
  return str.slice(0, 3).repeat(3)  
}



function backAround(str){
  return str.slice(-1) + str + str.slice(-1)
 }


 function or35(n){
  if (n % 3 == 0 || n % 5 == 0) {
    return true
  } else {
    return false
  }
}

function front22(str){
  return str.slice(0, 2) + str + str.slice(0, 2)
}

function startHi(str){
  if (str.startsWith("hi")) {
    return true
  } else {
    return false
  }
}

function icyHot(temp1, temp2){
  if (temp1 < 0 && temp2 > 100) {
    return true
  } else if (temp1 > 100 && temp2 < 0) {
    return true
  } else {
    return false
  }
}



function in1020(a, b){
  if ((a >= 10 && a <= 20) || (b >= 10 && b <= 20)) {
    return true
  } else {
    return false
  }
}


function hasTeen(a, b, c){
  if ((a <= 19 && a >= 13) || (b <= 19 && b >= 13) || (c <= 19 && c >= 13)) {
  return true
  } else {
    return false
  }
    
}


function loneTeen(a, b){
  if ((a <= 19 && a >= 13) && (b <= 19 && b >= 13)) {
    return false 
  } else if (a > 19 && b > 19) {
    return false
  } else {
    return true
  }
}


function delDel(str){
  if (str.substring(1, 4) === "del") {
    return str[0] + str.substring(4);
  }else {
    return str;
  }
  }


  function mixStart(str){
    if (str.slice(1, 3) === ("ix")) {
      return true
    } else {
      return false
    }
  }


  function startOz(str){
    if (str.slice(0,2) === 'oz' ) {
      return "oz"
    } else if (str.slice(0, 1) === 'o') {
      return 'o'
    } else if (str.slice(1, 2) === 'z') {
      return 'z'
    } else {
      return ''
    }
  }


  function intMax(a, b, c){
    return Math.max(a, b, c)
  }