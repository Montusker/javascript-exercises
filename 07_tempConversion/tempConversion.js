const ftoc = function(tempature) {

  return parseFloat(((tempature-32)*5/9).toFixed(1));
};

const ctof = function(tempature) {

  return parseFloat((tempature*9/5+32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
