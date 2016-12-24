var natural = require('natural');

var string1 = "close";
var string2 = "closer";
var string3 = "cocojambo";

console.log('JaroWinklerDistance:');
console.log('--------------------');
console.log(string1, string2, '=', natural.JaroWinklerDistance(string1, string2));
console.log(string1, string3, '=', natural.JaroWinklerDistance(string1, string3), '\n');

console.log('LevenshteinDistance:');
console.log('--------------------');
console.log(string1, string2, '=', natural.LevenshteinDistance(string1, string2));
console.log(string1, string3, '=', natural.LevenshteinDistance(string1, string3), '\n');

console.log('DiceCoefficient: ');
console.log('--------------------');
console.log(string1, string2, '=', natural.DiceCoefficient(string1, string2));
console.log(string1, string3, '=', natural.DiceCoefficient(string1, string3), '\n');