function stringE(str) {
  let wordsE = str.split("").filter((word) => word === "e");

  if (wordsE.length >= 1 && wordsE.length <= 3) {
    return true;
  } else {
    return false;
  }
}