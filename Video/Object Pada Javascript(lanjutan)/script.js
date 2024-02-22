var mhs1 ={
    nama :"Nila Enjeli",
    umur : 21,
    kelas :"MI3B",
    ips:[3.71,3.10,3.41,3.65],
    alamat : {
        jalan: "Jl. Sungai Sarik Malai V Suku",
        kota : "Padang Pariaman",
        provinsi: "Sumatera Barat",
    }

    };
var mhs2 ={
    nama    :"Salsabila OktaKirana",
    umur    :22,
    kelas   :"MI3B",
    ips     : [3.71,3.10,3.41,3.65],
    alamat  :{
        jalan: "Jl.Tabiang",
        kota : "Padang ",
        provinsi: "Sumatera Barat",
    }
}

//function deklaration
function objectMahasiswa(nama, umur, kelas,ips,alamat){
    var mhs3 ={};
    mhs3.nama = nama;
    mhs3.umur = umur;
    mhs3.kelas = kelas;
    mhs3.ips =ips;
    mhs3.alamat =alamat;
    return mhs3;
}

var mhs3 = objectMahasiswa('Rahmitul Hasanah', '21','MI3B','4.0',
'Balai Salasa,Pesisir Selatan,Sumatera Barat');

//construktor
function Mahasiswa(nama, umur, kelas,ips,alamat){
//var this = {};
    this.nama=nama;
this.umur=umur;
this.kelas=kelas;
this.ips=ips;
this.alamat=alamat;
}
var mhs4 = new Mahasiswa('Anggun Faza','23','3ATEI', '4.0',['jl.solok selatan','Solok','Sumatera Barat']);

//return this;

