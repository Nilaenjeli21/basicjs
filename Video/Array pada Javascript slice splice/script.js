// splice  --> untuk menyisipkan alamat array ditengah tengah
//splice(indexAwal, MauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// var arr = ["Nila", "Salsa", "Dila", "Rahmi"];
// arr.splice(1, 3, 'Ketrin', 'Ayu');
// console.log(arr.join('-'));

// slice --> mengiris array, mengambil beberapa bagian dari array untuk menjadikan array baru
// slice(awal,akhir);  
var arr = ["Nila", "Salsa", "Dila", "Rahmi"];
var arr2 = arr.slice(1, 3);
console.log(arr2.join('-'));