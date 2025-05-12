function sleepIn(weekday, vacation){
  if (weekday == vacation) {
    return true
  } else if (weekday > vacation) {
    return false
  } else {
    return true
  }
}


function monkeyTrouble(aSmile, bSmile) {
  if (aSmile == bSmile) {
    return true;
  } else if (aSmile > bSmile) {
    return false;
  } else {
    return false;
  }
}  



function sumDouble(a, b){
  if (a == b) {
    return (a + b) * 2
  } else {
    return a + b
  }
 }


 function diff21(n){
  if (n > 21) {
    return (n - 21) * 2
  } else {
    return 21 - n
  }
}



function parrotTrouble(talking, hour){
  if (talking & (hour < 7 || hour > 20)) {
    return true
  } else {
    return false
  }
  
}


function makes10(a, b){
  if (a == 10 || b == 10) {
    return true
  } else if (a + b == 10) {
    return true
  } else {
    return false
  }
}



function notString(str) {
  if (str.startsWith("not")) {
    return str;
  } else {
    return "not " + str;
  }
}