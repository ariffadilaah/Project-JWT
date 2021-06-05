'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index); 

    app.route('/tampil')
        .get(jsonku.tampilsemuamahasiswa);

    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarkanid);
    app.route('/tambah')
        .post(jsonku.tambahAliansi);
    app.route('/ubah')
        .put(jsonku.ubahAliansi);
    app.route('/hapus')
        .delete(jsonku.hapusAliansi);
    app.route('/tampilmatakuliah')
        .get(jsonku.tampilgroupmatakuliah);
};