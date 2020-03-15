# Panduan Kontribusi
### :newspaper: Untuk menjaga konsistensi tulisan maka diharapkan mengikuti aturan penulisan yang sudah di siapkan. Kunjungi [NBC Guideline](https://github.com/ngalambackend/nbc-guideline/blob/master/NBC-GUIDELINE.md) 
## :clapper: Getting Started
Ikuti alur berikut untuk mulai kontribusi ke NBC
### :one: Clone Repository
Untuk memulai kontribusi, pastikan anda telah memiliki repository `Auto-Generate-Certificate-Name` pada laptop/komputer lokal anda. Jalankan perintah berikut untuk cloning ke komputer lokal anda.
```
$ git clone https://github.com/ngalambackend/Auto-Generate-Certificate-Name.git
```
### :two: Membuat Branch Baru
Sebelum memulai menambahkan perubahan/edit, silahkan buat `branch baru` pada komputer local anda berdasarkan nama perubahan yang akan dilakukan.
Jalankan perintah berikut untuk membuat branch baru dan berpindah ke branch baru
```
$ git checkout -b nama-branch
```
### :three: Lakukan Perubahan atau Tambahan
Sekarang anda dapat memulai melakukan perubahan atau tambahansesuai yang anda inginkan berdasarkan issue yang di ambil.
### :four: Kirim Hasil Perubahan atau Tambahan
Kemudian hirim hasil perubahan atau tambahan pada poin :three: menggunakan perintah berikut
```
$ git add .
$ git commit -m "ceritakan apa yang telah anda lakukan"
$ git push origin nama-branch
```
### :five: Membuat Pull Request
Buat `pull request baru` pada repository [Auto Generate Certificate Name](https://github.com/ngalambackend/Auto-Generate-Certificate-Name) dengan cara
    * Tekan tombol `pull request`
    * Pilih branch `master` sebagai `base` dan branch `anda` sebagai `compare`
    * Submit `pull request`
    * Tunggulah review dari kontriutor lain
    * Jika sudah diterima, maka `pull request` anda akan di merge ke master