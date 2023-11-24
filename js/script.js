$(document).ready(function () {
    $(".download-btn").click(function () {
        var animeName = $(this).data("anime");
        alert(`Memulai mengunduh`);
        // Tambahkan logika unduhan di sini
    });
});

$(document).ready(function () {
    // Toggle menu pada saat mengklik hamburger
    $('.hamburger-menu-deris').click(function () {
        console.log('Toggle menu clicked'); // Tambahkan ini
        $('.menu-deris').toggleClass('show');
    });

    // Menutup menu saat item menu diklik
    $('.menu-deris a').click(function () {
        console.log('Menu item clicked'); // Tambahkan ini
        $('.menu-deris').removeClass('show');
    });

    // Menutup menu saat mengklik di luar menu
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.menu-container-deris').length) {
            console.log('Clicked outside menu'); // Tambahkan ini
            $('.menu-deris').removeClass('show');
        }
    });
});


// Perbarui script untuk Dark Mode
$(document).ready(function () {
    // Set Dark Mode sesuai nilai localStorage saat halaman dimuat
    var darkModeEnabled = localStorage.getItem("darkModeEnabled");
    if (darkModeEnabled === "true") {
        $('body').addClass('dark-mode');
        $('#theme-toggle-deris').prop('checked', true);
    }

    // Toggle Dark Mode saat mengklik tombol tema
    $('#theme-toggle-deris').change(function () {
        var isChecked = this.checked;
        $('body').toggleClass('dark-mode', isChecked);
        // Simpan preferensi Dark Mode dalam localStorage
        localStorage.setItem("darkModeEnabled", isChecked);
    });
});