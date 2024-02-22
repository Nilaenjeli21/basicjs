// forEach
//  var angka = [1,2,3,4,5,6,7,8];
//  var nama  = ['Nila', 'Caca', 'Silvia','Putri'];

// //  for(var i = 0;  i<angka.length; i++) {
// //     console.log(angka[i]);
// //  }
// // angka.forEach(function(e) {
// //     console.log(e);
// });

    //Map --> mengembalikan array
    var angka = [1,2,3,4,5,8,7,12,10];
    var angka2 = angka.ForEach(function(e){
        return e;
    });
    console.log(angka2.join('-'));