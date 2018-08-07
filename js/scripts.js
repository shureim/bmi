
var bmi = function(weight,height) {
  return weight/height/height;
};
var weight = parseInt(prompt("Enter weight in Kg:"));
var height = parseInt(prompt("Enter height in M:"));
var result  =BMI(weight,height,weight)
alert(result)
