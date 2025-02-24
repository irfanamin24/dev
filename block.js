(function() {
    "use strict";

    // 🔹 1. DETEKSI PERUBAHAN UKURAN JENDELA (Untuk Mode Docked DevTools)
    window.addEventListener('resize', function() {
        if (window.outerWidth - window.innerWidth > 160 || window.outerHeight - window.innerHeight > 160) {
            console.log("DevTools terdeteksi (resize)");
            window.location = "about:blank"; // Redirect atau tutup halaman
        }
    });

    // 🔹 2. LOOP DEBUGGER (Membuat DevTools Lag)
    setInterval(function() {
        console.log("Mencegah inspeksi dengan debugger;");
        debugger; // Mencegah debugging
    }, 1000);

    // 🔹 3. MENCEGAH AKSES CONSOLE (Membersihkan Console Setiap Detik)
    setInterval(function() {
        console.clear(); // Bersihkan console setiap 100ms
        console.log("%cSTOP!", "color: red; font-size: 50px; font-weight: bold;");
    }, 100);

    // 🔹 4. DETEKSI `toString()` (Mencegah Fungsi Disalin)
    (function() {
        let originalToString = Function.prototype.toString;
        Object.defineProperty(Function.prototype, 'toString', {
            value: function() {
                if (originalToString.call(this).length > 100) {
                    console.log("DevTools terdeteksi (Function.toString)");
                    window.location = "about:blank";
                }
                return originalToString.call(this);
            }
        });
    })();

    // 🔹 5. DETEKSI KETERLAMBATAN DEBUGGING (Melalui performance.now())
    setInterval(function() {
        let start = performance.now();
        debugger;
        let end = performance.now();
        if (end - start > 200) {
            console.log("DevTools terdeteksi (Performance.now)");
            window.location = "about:blank";
        }
    }, 1000);

    // 🔹 6. DETEKSI `navigator.webdriver` (Untuk Mendeteksi Bot & Puppeteer)
    if (navigator.webdriver) {
        console.log("Bot atau Puppeteer terdeteksi!");
        window.location = "about:blank";
    }

    // 🔹 7. MENUTUP HALAMAN JIKA DEVTOOLS TERBUKA (Menggunakan deteksi `console.log`)
    setInterval(function() {
        let before = new Date();
        debugger;
        let after = new Date();
        if (after - before > 200) {
            console.log("DevTools terdeteksi (Console Timing)");
            window.location = "about:blank";
        }
    }, 1000);

    // 🔹 8. OBSCURATION (Mengubah Kode agar Sulit Dibaca)
    (function(_0xabcdef) {
        function _0x1234(_0x1a2b) {
            return (_0x1a2b - 0x10);
        }
        var _0x5678 = ["\x44\x65\x76\x54\x6F\x6F\x6C\x73\x20\x64\x65\x74\x65\x6B\x74\x65\x64\x21"];
        console.log(_0x5678[_0x1234(0x10)]);
    })();
})();
