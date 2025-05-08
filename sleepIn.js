function sleepIn(weekday, vacation){
  if (weekday == vacation) {
    return true
  } else if (weekday > vacation) {
    return false
  } else {
    return true
  }
}