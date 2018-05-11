var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var charArray = text.split(" ");
console.log(charArray);
console.log(charArray[0]);

var dinosaur = 'triceratops';
var secondDinosaur = dinosaur.toUpperCase();
console.log(secondDinosaur); 

var realDinosaur = text.replace( charArray[0], secondDinosaur);

var finalDinosaur = realDinosaur.slice(0,realDinosaur.length/2);
console.log(finalDinosaur);

