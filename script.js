```javascript
// ================================
// RANDOM BY FIO
// JAVASCRIPT
// ================================


// ================================
// POPUP FOTO
// ================================

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

// Membuka dan memperbesar foto
function openPhoto(src) {
    lightboxImage.src = src;
    lightbox.classList.add("active");

    // Mencegah halaman bergulir ketika popup terbuka
    document.body.style.overflow = "hidden";
}

// Menutup popup foto
function closePhoto() {
    lightbox.classList.remove("active");

    // Mengembalikan halaman agar bisa digulir
    document.body.style.overflow = "";

    // Menghapus foto setelah animasi selesai
    setTimeout(() => {
        if (!lightbox.classList.contains("active")) {
            lightboxImage.src = "";
        }
    }, 350);
}


// ================================
// TOMBOL ESC UNTUK MENUTUP FOTO
// ================================

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closePhoto();
    }
});


// ================================
// TOMBOL MUSIK
// ================================

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

// Memutar atau menjeda musik
musicButton.addEventListener("click", async function() {

    if (music.paused) {
        try {
            await music.play();

            musicButton.textContent = "♫ Pause our music";
            musicButton.classList.add("playing");

        } catch (error) {
            musicButton.textContent = "Musik gagal diputar";

            console.error(
                "Musik tidak dapat diputar:",
                error
            );
        }

    } else {
        music.pause();

        musicButton.textContent = "♫ Play our music";
        musicButton.classList.remove("playing");
    }

});


// ================================
// JIKA MUSIK BERAKHIR
// ================================

music.addEventListener("ended", function() {
    musicButton.textContent = "♫ Play our music";
    musicButton.classList.remove("playing");
});


// ================================
// JIKA FILE MUSIK TIDAK DITEMUKAN
// ================================

music.addEventListener("error", function() {
    console.error(
        "File musik.mp3 tidak ditemukan atau tidak dapat dibaca."
    );
});


// ================================
// MENCEGAH POPUP TERBUKA SAAT HALAMAN
// BARU DIMUAT
// ================================

window.addEventListener("DOMContentLoaded", function() {
    lightbox.classList.remove("active");
});
```