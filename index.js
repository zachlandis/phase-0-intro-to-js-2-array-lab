const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat () {
    return cats.push("Ralph")
}

function destructivelyPrependCat() {
    return cats.unshift("Bob")
}

function destructivelyRemoveLastCat () {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}


function appendCat(name) {
    const newCats = [...cats]
    newCats.push(name);
    return newCats;
}

function prependCat(name) {
    const newCats = [...cats]
    newCats.unshift(name);
    return newCats;
}

function removeLastCat(name) {
    const newArray = [...cats]
    newArray.pop(name)
    return newArray
}

function removeFirstCat (name) {
    const newArray = [...cats];
    newArray.shift(name);
    return newArray;
}