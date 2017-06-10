var text ="Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur ='triceratops';
var upperCase = dinosaur.toUpperCase();

var textReplace = text.replace('Velociraptor', upperCase);


var textReplace = textReplace.slice(0,textReplace.length/2);
console.log(textReplace);
