# pair-project
DB name : sikomers
GET / = tampilan landingpage awal berisi tentang aplikasi (gambaran umum), ada tombol untuk login dan registernya
GET /login = form untuk login
GET /register = form untuk register
POST /register = post form register ke db

GET /sikomers = menampilkan list toko
GET /sikomers/product = menampilkan list produk yg ada di dalam toko
GET /sikomers/product/:id = menampilkan detail produk yg ada di dalam toko
GET /user = menampilkan profil user
GET /user/profile = edit profil user, delete, update
POST /user/profile