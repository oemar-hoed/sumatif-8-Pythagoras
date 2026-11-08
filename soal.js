// =================================================================
// BANK SOAL SUMATIF MATEMATIKA KELAS 8: TEOREMA PYTHAGORAS
// Terdapat 20 Soal (PG Tunggal, PG Kompleks, PG Benar-Salah, Uraian)
// Tingkat Kesukaran: Mudah, Sedang, Sulit
// =================================================================

const bankSoal = [
    // =================================================================
    // BAGIAN 1: 5 SOAL PILIHAN GANDA TUNGGAL (PG Tunggal)
    // =================================================================
    {
        id: "pg1",
        tipe: "pg_tunggal",
        label: "Pilihan Ganda Tunggal (Mudah)",
        pertanyaan: "Sebuah segitiga siku-siku ABC memiliki panjang sisi-sisi penyiku $AB = 9\\text{ cm}$ dan $BC = 12\\text{ cm}$. Panjang hipotenusa (sisi miring) AC dari segitiga tersebut adalah ....",
        opsi: ["13 cm", "14 cm", "15 cm", "17 cm"],
        jawabanBenar: 2 // 15 cm
    },
    {
        id: "pg2",
        tipe: "pg_tunggal",
        label: "Pilihan Ganda Tunggal (Sedang)",
        pertanyaan: "Sebuah tangga yang panjangnya 6,5 meter disandarkan pada dinding sebuah bangunan. Jika jarak antara ujung bawah tangga (kaki tangga) dengan dinding adalah 2,5 meter, maka tinggi dinding yang dicapai oleh ujung atas tangga adalah ....<br><br> <img src='gambar_soal/pgt3.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>",
        opsi: ["5,0 meter", "5,5 meter", "6,0 meter", "6,2 meter"],
        jawabanBenar: 2 // 6,0 meter
    },
    {
        id: "pg3",
        tipe: "pg_tunggal",
        label: "Pilihan Ganda Tunggal (Sedang)",
        pertanyaan: "Diketahui segitiga KLM siku-siku di L dengan besar sudut $\\angle K = 30^\\circ$. Jika panjang hipotenusa $KM = 18\\text{ cm}$, maka panjang sisi LM yang berada di hadapan sudut $30^\\circ$ adalah ....",
        opsi: ["9 cm", "9√2 cm", "9√3 cm", "12 cm"],
        jawabanBenar: 0 // 9 cm
    },
    {
        id: "pg4",
        tipe: "pg_tunggal",
        label: "Pilihan Ganda Tunggal (Sulit)",
        pertanyaan: "Sebuah trapesium sama kaki ABCD memiliki panjang sisi-sisi sejajar $10\\text{ cm}$ dan $22\\text{ cm}$. <br><br> <img src='gambar_soal/pgt2.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Jika panjang kaki trapesium tersebut adalah $10\\text{ cm}$, maka tinggi trapesium tersebut adalah ....",
        opsi: ["6 cm", "8 cm", "9 cm", "12 cm"],
        jawabanBenar: 1 // 8 cm
    },
    {
        id: "pg5",
        tipe: "pg_tunggal",
        label: "Pilihan Ganda Tunggal (Sulit)",
        pertanyaan: "<br><br> <img src='gambar_soal/pgt1.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Sebuah kapal penyelamat berlayar dari pelabuhan P ke arah Timur sejauh $120\\text{ km}$, kemudian berbelok ke arah Selatan sejauh $90\\text{ km}$ menuju posisi kapal nelayan di titik Q. Jarak langsung (garis lurus) antara pelabuhan awal P dengan posisi kapal nelayan Q adalah ....",
        opsi: ["130 km", "140 km", "150 km", "210 km"],
        jawabanBenar: 2 // 150 km
    },

    // =================================================================
    // BAGIAN 2: 5 SOAL PILIHAN GANDA KOMPLEKS (PG Kompleks)
    // =================================================================
    {
        id: "pgk1",
        tipe: "pg_kompleks",
        label: "Pilihan Ganda Kompleks (Mudah)",
        pertanyaan: "Diberikan segitiga DEF yang siku-siku di titik E. Manakah dari pernyataan tentang hubungan kuadrat sisi-sisinya berikut yang <b>BENAR</b>?",
        opsi: [
            { teks: "$DF^2 = DE^2 + EF^2$", benar: "true" },
            { teks: "$DE^2 = DF^2 - EF^2$", benar: "true" },
            { teks: "$EF^2 = DE^2 + DF^2$", benar: "false" },
            { teks: "$EF^2 = DF^2 - DE^2$", benar: "true" }
        ]
    },
    {
        id: "pgk2",
        tipe: "pg_kompleks",
        label: "Pilihan Ganda Kompleks (Sedang)",
        pertanyaan: "Manakah di antara kelompok tiga bilangan berikut yang merupakan <b>Tripel Pythagoras</b>?",
        opsi: [
            { teks: "5, 12, 13", benar: "true" },
            { teks: "8, 15, 17", benar: "true" },
            { teks: "10, 20, 25", benar: "false" },
            { teks: "12, 16, 20", benar: "true" }
        ]
    },
    {
        id: "pgk3",
        tipe: "pg_kompleks",
        label: "Pilihan Ganda Kompleks (Sedang)",
        pertanyaan: "Di dalam sistem koordinat Kartesius terdapat tiga buah titik yaitu $P(1, 1)$, $Q(5, 1)$, dan $R(1, 4)$. Manakah pernyataan berikut yang <b>BENAR</b>?",
        opsi: [
            { teks: "Panjang garis $PQ = 4$ satuan panjang", benar: "true" },
            { teks: "Panjang garis $PR = 3$ satuan panjang", benar: "true" },
            { teks: "Jarak antara titik Q dan R (panjang $QR$) = 5 satuan panjang", benar: "true" },
            { teks: "Segitiga PQR merupakan segitiga siku-siku di titik P", benar: "true" }
        ]
    },
    {
        id: "pgk4",
        tipe: "pg_kompleks",
        label: "Pilihan Ganda Kompleks (Sulit)",
        pertanyaan: "Suatu persegi panjang ABCD memiliki ukuran panjang $AB = 16\\text{ cm}$ dan lebar $BC = 12\\text{ cm}$. Manakah dari pernyataan-pernyataan berikut yang bernilai <b>BENAR</b>?",
        opsi: [
            { teks: "Panjang diagonal AC adalah $20\\text{ cm}$", benar: "true" },
            { teks: "Luas persegi panjang ABCD adalah $192\\text{ cm}^2$", benar: "true" },
            { teks: "Keliling persegi panjang ABCD adalah $40\\text{ cm}$", benar: "false" },
            { teks: "Panjang diagonal BD sama dengan panjang diagonal AC yaitu $20\\text{ cm}$", benar: "true" }
        ]
    },
    {
        id: "pgk5",
        tipe: "pg_kompleks",
        label: "Pilihan Ganda Kompleks (Sulit)",
        pertanyaan: "<img src='gambar_soal/pgk1.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Sebuah kapal patroli berlayar dari dermaga A: 80 km ke Selatan, berbelok 120 km ke Barat, lalu berlanjut 170 km ke Utara hingga berhenti di pos B. Manakah pernyataan berikut yang <b>BENAR</b>?",
        opsi: [
            { teks: "Perpindahan bersih kapal dalam arah Utara-Selatan adalah 90 km ke arah Utara", benar: "true" },
            { teks: "Perpindahan bersih kapal dalam arah Barat-Timur adalah 120 km ke arah Barat", benar: "true" },
            { teks: "Jarak posisi akhir kapal di pos B dari dermaga awal A adalah 150 km", benar: "true" },
            { teks: "Total panjang lintasan yang ditempuh kapal adalah 370 km", benar: "true" }
        ]
    },

    // =================================================================
    // BAGIAN 3: 5 SOAL PILIHAN GANDA BENAR - SALAH (PG Benar/Salah)
    // =================================================================
    {
        id: "bs1",
        tipe: "pg_benar_salah",
        label: "Pilihan Ganda Benar / Salah (Mudah)",
        pertanyaan: "<b>Pernyataan:</b><br>Kelompok tiga bilangan 7, 24, dan 25 merupakan Tripel Pythagoras karena memenuhi hubungan kuadrat $25^2 = 7^2 + 24^2$.",
        opsi: ["BENAR", "SALAH"],
        jawabanBenar: 0 // BENAR
    },
    {
        id: "bs2",
        tipe: "pg_benar_salah",
        label: "Pilihan Ganda Benar / Salah (Sedang)",
        pertanyaan: "<b>Pernyataan:</b><br>Sebuah segitiga yang memiliki panjang sisi $8\\text{ cm}$, $12\\text{ cm}$, dan $15\\text{ cm}$ merupakan jenis segitiga lancip karena $15^2 > 8^2 + 12^2$.",
        opsi: ["BENAR", "SALAH"],
        jawabanBenar: 1 // SALAH (Seharusnya Segitiga Tumpul karena c^2 > a^2 + b^2)
    },
    {
        id: "bs3",
        tipe: "pg_benar_salah",
        label: "Pilihan Ganda Benar / Salah (Sedang)",
        pertanyaan: "<b>Pernyataan:</b><br>Pada segitiga siku-siku sama kaki dengan panjang sisi siku-siku sebesar $10\\text{ cm}$, panjang hipotenusanya adalah $10\\sqrt{2}\\text{ cm}$.",
        opsi: ["BENAR", "SALAH"],
        jawabanBenar: 0 // BENAR
    },
    {
        id: "bs4",
        tipe: "pg_benar_salah",
        label: "Pilihan Ganda Benar / Salah (Sulit)",
        pertanyaan: "<b>Pernyataan:</b><br>Pada segitiga siku-siku dengan sudut $30^\\circ$ dan $60^\\circ$, perbandingan panjang sisi di hadapan sudut $30^\\circ$, sisi di hadapan sudut $60^\\circ$, dan hipotenusa berturut-turut adalah $1 : 2 : \\sqrt{3}$.",
        opsi: ["BENAR", "SALAH"],
        jawabanBenar: 1 // SALAH (Seharusnya 1 : √3 : 2)
    },
    {
        id: "bs5",
        tipe: "pg_benar_salah",
        label: "Pilihan Ganda Benar / Salah (Sulit)",
        pertanyaan: "<b>Pernyataan:</b><br>Lintasan terpendek antara titik $A(3, -2)$ dan titik $B(11, 4)$ pada bidang koordinat Kartesius adalah 10 satuan panjang.",
        opsi: ["BENAR", "SALAH"],
        jawabanBenar: 0 // BENAR
    },

    // =================================================================
    // BAGIAN 4: 5 SOAL URAIAN (Essay)
    // =================================================================
    {
        id: "ur1",
        tipe: "uraian",
        label: "Soal Uraian (Mudah)",
        pertanyaan: "Sebuah segitiga siku-siku ABC siku-siku di titik C. Diketahui panjang hipotenusa $AB = 25\\text{ cm}$ dan panjang salah satu sisi tegaknya $AC = 24\\text{ cm}$.<br>a. Hitunglah panjang sisi BC!<br>b. Hitunglah luas segitiga ABC tersebut!"
    },
    {
        id: "ur2",
        tipe: "uraian",
        label: "Soal Uraian (Sedang)",
        pertanyaan: "Suatu segitiga memiliki panjang sisi-sisi masing-masing $a = 10\\text{ cm}$, $b = 24\\text{ cm}$, dan $c = 27\\text{ cm}$ (dengan $c$ sebagai sisi terpanjang).<br>a. Hitunglah nilai $c^2$ serta nilai $(a^2 + b^2)$!<br>b. Berdasarkan prinsip kebalikan teorema Pythagoras, selidikilah dan tentukan jenis segitiga tersebut (apakah lancip, siku-siku, atau tumpul)!"
    },
    {
        id: "ur3",
        tipe: "uraian",
        label: "Soal Uraian (Sedang)",
        pertanyaan: "Diketahui tiga buah titik pada bidang koordinat Kartesius yaitu titik $A(-1, 1)$, $B(7, 1)$, dan $C(7, 7)$.<br>a. Hitunglah panjang garis AB, panjang garis BC, dan panjang garis AC.<br>b. Tunjukkan dengan gambar dan atau hitungan matematis bahwa segitiga ABC merupakan segitiga siku-siku."
    },
    {
        id: "ur4",
        tipe: "uraian",
        label: "Soal Uraian (Sulit)",
        pertanyaan: "Humam, Arjuna, dan Aldo mencoba mengukur lebar sungai. Ilustrasi ditunjukkan melalui gambar di bawah<br><br> <img src='gambar_soal/Uraian2.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Jika jarak Humam dan Arjuna 6 m, maka lebar sungai tersebut adalah …"
    },
    {
        id: "ur5",
        tipe: "uraian",
        label: "Soal Uraian (Sulit)",
        pertanyaan: "Perhatikan sketsa pada gambar berikut!<br><br> <img src='gambar_soal/Uraian1.jpg' style='max-width: 100%; border-radius: 8px;'><br><br>Sebuah helikopter pengamat sedang melihat ke beberapa objek yang ada di bawahnya dengan ketinggian 500 m di atas permukaan tanah. Objek yang dilihat oleh helikopter tersebut diberi nama titik A, titik B, dan titik C. ($\\sqrt{3} \\ = 1,73$)<br>a. Berapa panjang OB?<br>b. Hitunglah panjang OC!"
    }
];
