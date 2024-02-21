function tambah(a, b) {
    return a + b;
}

function kali(a, b){
    return a * b;
}
// var a = parseInt(prompt('Masukkan nilai 1 :'));
// var b = parseInt(prompt('Masukkan nilai 2 :'));
//parsenInt ini digunakan saat variabelnya adalah string, sedangkan yang mau kita gunakan adalah integer.
var hasil = kali(tambah(1, 2), tambah(3, 4));
console.log(hasil);

//jika parameter lebih sedikit daripada argumen, maka argumen lebihnya kan diabakan
//jika parameter lebih banyak daripada argumen, maka parameter lebihnya adalh undifined