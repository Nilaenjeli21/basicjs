//9. forEach
//  var angka = [1,2,3,4,5,6,7,8];
//  var nama  = ['Nila', 'Caca', 'Silvia','Putri'];

// //  for(var i = 0;  i<angka.length; i++) {
// //     console.log(angka[i]);
// //  }
// // angka.forEach(function(e) {
// //     console.log(e);
// });

    //10. Map --> mengembalikan array
    // var angka = [1,2,3,4,5,8,7,12,10];
    // var angka2 = angka.map(function(e){
    //     return e * 2;
    // });
    // console.log(angka2.join('-'));

    // 10. sort --> mengurutkan array
    var angka = [1,2,3,4,5,8,7,12,10];
    angka.sort(function(a,b){
        return (a-b);
    })
    console.log(angka.join('-'));