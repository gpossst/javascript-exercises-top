function ftoc(temp) {
  let output;
  let final;
  output = (temp-32)*(5/9);
  final = Math.round(output*10)/10;
  return final;
}

function ctof(temp) {
  let output;
  let final;
  output = (temp*9/5)+32;
  final = Math.round(output*10)/10;
  return final;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

// npm test tempConversion.spec.js
