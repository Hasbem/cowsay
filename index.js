const information = require("./information.js")

console.log(information.name)
console.log(information.campus)

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "Bonjour je m'appelle " + information.name + " et je suis au campus " + information.campus,
    e : "oO",
    T : "U "
}));


