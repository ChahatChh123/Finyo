(function($) {
    "use strict";

    var url = window.location.href;

    $('.translate-nav').on('click', function() {
        if ($(this).hasClass('id')) {
            $(this).removeClass('id');
            window.location.replace(url.split('?')[0]);
        } else {
            $(this).addClass('id');
            if (!url.includes('lang=id')) {
                window.location.replace(url.split('?')[0] + '?lang=id');
            }
        }
    });

    $.urlParam = function(name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.search);
        return (results !== null) ? results[1] || 0 : false;
    }

    $(document).ready(function() {
        if ($.urlParam('lang') == 'id') {
            localStorage.setItem('lang', 'id');
        } else {
            localStorage.setItem('lang', 'en');
        }

        // Redirect
        if (localStorage.getItem('lang') == 'id' && !url.includes('lang=id')) {
            localStorage.setItem('lang', 'id');
            window.location.replace(url + '?lang=id');
        }

        // Translate
        if (localStorage.getItem('lang') == 'id' && url.includes('lang=id')) {
            $('.translate-nav').addClass('id');
            $('.hero-text h1').text('Kami Paperpillar');
            $('.hero-text p').text('Kami adalah kumpulan desainer dan pengembang terampil dari Yogyakarta, Indonesia');
            $('.hero-text .btn-talk span').text('Mari Bicara!');
            $('.services-section h2').text('Layanan Kami');
            $('.clients-section h2').text('Klien Kami');
            $('.clients-section p').text('Bekerja secara global, dari pengusaha kecil hingga perusahaan besar.');
            $('.works-section h2').text('Karya Terbaru Kami');
            $('.works-section .btn-work').text('Lihat Study Kasus');
            $('.works-section .btn-other').text('Lihat Karya Lainnya');
            $('.footer-text p').text('Punya ide untuk dikerjakan?');
            $('.footer-text .btn-talk').text('Mari Bicara!');
            $('.blog-hero-text h1').text('Cerita Dari Paperpillar');
            $('.projects-button .btn').text('Lihat Study Kasus');
        }
    });

})(jQuery);