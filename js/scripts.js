var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
 charArray = text.split(" ", 21);
console.log(charArray);
console.log(charArray[0]);

str = charArray.join([separator = ' '])
console.log(str);
var dinosaur = 'triceratops';
var secondDinosaur = dinosaur.toUpperCase();
console.log(secondDinosaur); 

var realDinosaur = str.replace(charArray[0], secondDinosaur);

var finalDinosaur = realDinosaur.slice(0,realDinosaur.length/2);
console.log(finalDinosaur);

