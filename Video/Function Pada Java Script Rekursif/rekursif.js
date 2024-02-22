//rekursif adalah sebuah fungsi yang memanggil dirinya sendiri
// input --?function-?pemanggilan fungtionnya sendiri-->nilai atau output (Base case)

// for(var i = 10; i>= 1; i--){
//     console.log(i);
// }
// ini adalah menggunakan looping dan bisa diubah ke fungsi rekursif

function tampilAngka(n) {
    if(n === 0)return;
    console.log(n);
    return tampilAngka(n-1)
}
tampilAngka(10);