function in3050(a, b) {
  const in30to40 = (x) => x >= 30 && x <= 40;
  const in40to50 = (x) => x >= 40 && x <= 50;

  return (in30to40(a) && in30to40(b)) || (in40to50(a) && in40to50(b));
}
