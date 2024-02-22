var penumpang = ['Sandika', undefined, 'Doddy'];
var tambahPenumpang = function(namapenumpang, penumpang) {
    //jika angkot kosong 
    if(penumpang.length == 0){
        //tambah penumpang di awal array
        penumpang.push(nama.Penumpang);  
        
        //kembalikan isi array dan keluar dari function
        return penumpang;
     }else {
        //telusuri seluruh kursi dari awal
        for(var i = 0; i< penumpang.length; i++) {
            //jika ada kursi kosong
            if(penumpang[i] == undefined) {
                //tambah penumpang di kursi tersebut
                penumpang[i] = namapenumpang;
                //kembalikan isi array & keluar dari function
                return penumpang;
            }
            //jika sudah ada nama yang sama
            else if (penumpang[i] == namapenumpang ) {
                  //tampilkan pesan kesalahannya
                  console.log(namapenumpang + ' Penumpang sudah ada ');
                //kembalika isi array dan keluar dari function
                return penumpang;
            }
          
            //jika seluruh kursi terisi
            else if(i == penumpang.length - 1) {
                //tambah penumpang diakhir array
                penumpang.push(namapenumpang);
                //kembalikan isi array dan keluar dari function
                return penumpang;

            }
          
        }
    }
}
  //jika angkot kosong, tampilkan pesan bahwa angkot kosong
  var hapusPenumpang = function(namapenumpang,penumpang) {
    if(penumpang.length==0){
    console.log(namapenumpang + ' Didalam angkot belum ada penumpang');
    return penumpang;
}


else{

    for(var i=0; i<penumpang.length; i++){
       //jika ada 2 nama penumpang, buat undefined pada nama salah satu penumpang
            if(penumpang[i] == namapenumpang){
            penumpang[i] = undefined;
            return penumpang;
            }
            else if(i==penumpang.length -1){
                console.log(namapenumpang+ ' Nama nya tidak ada didalam Angkot');
                return penumpang;
              }
}
}
  }
  

  