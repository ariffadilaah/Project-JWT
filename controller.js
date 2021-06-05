'use strict';

var response = require('./res');
var connection = require('./koneksi');
const { connect } = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi REST API ku berjalan",res)
};

// menampilkan semua data mahasiswa
exports.tampilsemuamahasiswa = function(req,res){
    connection.query('SELECT * FROM aliansi', function(error, rows, fields) {
        if(error){
            console.log(error);
        }else {
            response.ok(rows, res);
        }
    });
};

//menampilkan semua data mahasiswa berdasarkan id
exports.tampilberdasarkanid = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM aliansi WHERE id_mahasiswa =?', [id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok(rows, res);
            }
        });
};

//menambahkan data
exports.tambahAliansi = function(req,res){
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('INSERT INTO aliansi (nim,nama,jurusan) VALUES(?,?,?)', 
        [nim,nama,jurusan],
        function (error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.ok("berhasil menambahkan data", res)
            }
        });
};

//mengubah data id
exports.ubahAliansi = function(req,res){
    var id = req.body.id_mahasiswa;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('UPDATE aliansi SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?', 
        [nim,nama,jurusan,id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.ok("berhasil ubah data", res)
            }
        });
};

//menghapus data id
exports.hapusAliansi = function(req,res){
    var id = req.body.id_mahasiswa;
    connection.query('DELETE FROM aliansi WHERE id_mahasiswa=?', [id],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else {
            response.ok("berhasil hapus data", res)
        }
    });
}