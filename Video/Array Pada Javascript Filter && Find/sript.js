//9. filter --> mencari angka pada array dan mengembalikannya dalam bentuk array
// var angka = [1, 2,4,5,7,9,8,10];
// var angka2 = angka.filter(function(x){
//     return x > 5;
// });
// console.log(angka2.join('-'));

//10.find --> mencari satu nilai angka
var angka = [1, 2,4,5,7,9,8,10];


var angka2 = angka.find(function(x){
    return x > 5;
});
console.log(angka2);