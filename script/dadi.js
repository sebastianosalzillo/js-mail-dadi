
function lancioDado (){
    let dado = Math.floor(Math.random() * 6) + 1;
    return dado;
}

let usernumber = lancioDado();
let pcnumber = lancioDado();
console.log (usernumber, pcnumber)

// let usernumber =  Math.ceil(Math.random() * 6);
// console.log(usernumber)
// let pcnumber = Math.ceil(Math.random() * 6);
// console.log(pcnumber)

if (usernumber > pcnumber) {
    console.log("complimenti hai vinto");
} else if
    (usernumber < pcnumber) {
    console.log("you are lose")
}else {
    console.log("pareggio");
}