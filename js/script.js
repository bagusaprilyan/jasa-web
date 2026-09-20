/* ============ KONFIGURASI ============
   GANTI nomor WA di bawah ini dengan nomor Bos (format 62, tanpa + / 0 depan).
   Contoh: 6281234567890
*/
const WA_NUMBER = '6285647376259';
const WA_TEXT_DEFAULT = 'Halo, saya mau tanya-tanya soal jasa bikin website untuk usaha saya.';

/* ============ Helper WA ============ */
function waURL(text = WA_TEXT_DEFAULT) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

/* ============ Pasang link WA ke semua tombol ============ */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  ['waLink', 'waFoot', 'waFloat'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = waURL();
  });

  /* Tombol "Pilih paket" → isi dropdown + scroll ke form */
  document.querySelectorAll('[data-paket]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const nama = btn.getAttribute('data-paket');
      const sel = document.getElementById('paketSelect');
      if (sel) {
        [...sel.options].forEach(o => { if (o.value.startsWith(nama)) sel.value = o.value; });
      }
    });
  });

  /* ============ Form → WhatsApp ============ */
  const form = document.getElementById('orderForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const d = new FormData(form);
      const nama = (d.get('nama') || '').trim();
      const wa = (d.get('wa') || '').trim();
      const usaha = (d.get('usaha') || '').trim() || '-';
      const paket = d.get('paket') || '-';
      const pesan = (d.get('pesan') || '').trim() || '-';

      const teks =
`Halo WebKu! Saya mau konsultasi 👋

*Nama:* ${nama}
*WA:* ${wa}
*Jenis Usaha:* ${usaha}
*Paket Diminati:* ${paket}
*Kebutuhan:* ${pesan}

Mohon dihubungi ya. Terima kasih!`;

      window.open(waURL(teks), '_blank');

      // Tampilkan konfirmasi ramah
      form.innerHTML = `
        <div class="form-success">
          <div class="big">✅</div>
          <h3>Terima kasih, ${nama || 'Kak'}!</h3>
          <p>WhatsApp Anda sedang dibuka dengan pesan yang sudah terisi.<br>Kalau tidak terbuka otomatis, klik tombol di bawah.</p>
          <a href="${waURL(teks)}" target="_blank" class="btn btn-primary btn-lg" style="margin-top:1.2rem">Buka WhatsApp 💬</a>
        </div>`;
    });
  }

  /* ============ Navbar shadow saat scroll ============ */
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 12);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ============ Animasi reveal DIHAPUS ============
     Alasan: landing page jasa harus SELALU tampil instan & andal.
     Tidak boleh ada risiko konten kosong kalau JS lambat/gagal.
     Keandalan > efek visual. */
});
