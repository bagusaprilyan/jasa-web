# WebKu — Jasa Website & Bot WhatsApp untuk UMKM

Landing page portofolio jasa pembuatan website untuk UMKM Indonesia.
Statis (HTML/CSS/JS murni) — **tanpa build step, tanpa server**, tinggal host (Vercel/Netlify/GitHub Pages).

## ✏️ Yang Perlu Diganti Sebelum Live

Buka `js/script.js`, ganti nomor WhatsApp di baris atas:

```js
const WA_NUMBER = '6281234567890'; // ← GANTI dengan nomor WA Anda (format 62, tanpa + / 0)
```

Format: `62` + nomor tanpa `0` depan.
Contoh: `0812-3456-7890` → `6281234567890`

## 🚀 Cara Deploy ke Vercel (via GitHub)

1. Buat repo baru di GitHub (mis. `jasa-web`)
2. Push folder ini:
   ```bash
   git init
   git add .
   git commit -m "Landing page jasa web"
   git remote add origin https://github.com/USERNAME/jasa-web.git
   git push -u origin main
   ```
3. Buka [vercel.com](https://vercel.com) → **Add New Project** → Import repo `jasa-web`
4. Framework Preset: **Other** (karena statis, tanpa build) → Deploy
5. Selesai! Domain `*.vercel.app` langsung aktif. Bisa pasang domain sendiri nanti.

## 📁 Struktur

```
jasa-web/
├── index.html      # halaman utama (hero, layanan, harga, portofolio, FAQ, form)
├── css/style.css   # semua styling (responsive, mobile-friendly)
└── js/script.js    # form→WhatsApp, pilih paket, navbar scroll
```

## 🎨 Kustomisasi

- **Harga/paket**: edit bagian `<!-- HARGA -->` di `index.html`
- **Warna brand**: edit variabel `:root` di `css/style.css` (`--primary`, dll)
- **Portofolio**: edit bagian `<!-- PORTFOLIO -->` — ganti dengan hasil kerja nyata
- **Nama brand**: ganti "WebKu" di `index.html` & `js/script.js`

## ⚡ Fitur

- ✅ Responsive (HP/tablet/desktop)
- ✅ Form konsultasi → langsung kirim ke WhatsApp
- ✅ Tombol "Pilih paket" → otomatis pilih di form
- ✅ SEO: meta description, Open Graph, semantic HTML
- ✅ Tanpa dependency, tanpa build — buka `index.html` langsung jalan
