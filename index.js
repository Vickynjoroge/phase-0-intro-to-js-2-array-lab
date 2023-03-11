const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);

function appendCat(name) {
    const appendNewCat = [...cats, name];
    return appendNewCat;
}
//appends a cat to the end of the cats array
function prependCat(name) {
    const prependNewCat = [name, ...cats];
    return prependNewCat;
}
//appends a cat to the end of the cats array
function destructivelyAppendCat(Ralph){
cats.push(Ralph);
return Ralph;
}
//prepends a cat to the beginning of the cats array
function destructivelyPrependCat(Bob){
cats.unshift(Bob);
return Bob;
}
//removes the last cat from the cats array
function destructivelyRemoveLastCat(name){
cats.pop(name);
return name;
}
//removes the first cat from the cats array
function destructivelyRemoveFirstCat(name){
cats.shift(name);
return name;
}
//removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat() {
return cats.slice(0,cats.length-1);
}
//removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat() {
return cats.slice(1);
}