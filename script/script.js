const emaillist = [ "zio@gmail.com", "nonno@gmail.com", "peppe@gmail.com" ];
console.log (emaillist);


const useremail = prompt ("inserisci la tua email");
console.log (useremail);

let found;


for (let i = 0; i < emaillist.length; i++) {
    const element = emaillist[i];
    console.log (element);

    if (useremail === element) {
        found = true ;
    }
        
    
}

if  (found) {
    console.log ("email gia presente");}
    else {
        console.log ("email non presente")
    }
