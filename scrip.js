// Meminta pengguna untuk memasukkan nama
var nama = prompt("Masukkan nama:");

// Meminta pengguna untuk memasukkan umur dan mengonversi input ke dalam tipe data numerik
var umur = parseInt(prompt("Masukkan umur:"));

// Memeriksa apakah umur lebih besar dari 13
if (umur > 13) {
    // Jika ya, meminta pengguna untuk memilih studio
    var pilihanStudio = prompt("Anda boleh masuk studio. Pilih studio A, B, atau C:");

    // Berdasarkan pilihan studio, menampilkan pesan yang sesuai
    switch (pilihanStudio.toUpperCase()) {
        case "A":
            alert("Tiket " + nama + ", Studio A, Umur " + umur);
            break;
        case "B":
            alert("Tiket " + nama + ", Studio B, Umur " + umur);
            break;
        case "C":
            alert("Tiket " + nama + ", Studio C, Umur " + umur);
            break;
        default:
            alert("Pilihan studio tidak valid.");
            break;
    }
} else {
    // Jika tidak, memberikan pesan bahwa mereka tidak boleh masuk studio
    alert("Maaf, Anda tidak boleh masuk studio karena umur Anda di bawah 13 tahun.");
}
