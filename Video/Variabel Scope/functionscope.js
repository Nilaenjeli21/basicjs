///global scope atau global windows
var a = 1;

function tes(){

    var b = 2;
    console.log(a); // akan tampil walaupun mengakses vaiabel diluar scope

}

tes();
console.log(b); //tidak akan tampil karena mengakses vaiabel didalam scope