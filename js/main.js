function getRandomInt(min, max) {
  if(min >= max){
    return false;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInt();


function getMaxLine(value, max){
  value = String(value);
  return value.lenght <= max;
}
getMaxLine();
