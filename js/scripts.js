var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var secondDinosaur = dinosaur.toUpperCase();
var realDinosaur = text.replace('Velociraptor', secondDinosaur);

var finalDinosaur = realDinosaur.slice(0,realDinosaur.length/2);
console.log(finalDinosaur);
