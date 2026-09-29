# Poster Promosi Juragankuota.id — Neo-Brutalism (9:16)

5 poster SVG vertikal **1080×1920** (rasio 9:16) untuk Story/Reels IG, Status WA, TikTok.

Gaya **Neo-Brutalism**: border hitam tebal, warna flat kontras tinggi, hard drop-shadow,
stiker/banner miring, dan tipe huruf extra-bold. Semua SVG murni (bisa diedit teks/warna).

## Daftar File

| # | File SVG | Tema | Warna latar |
|---|---|---|---|
| 1 | `01-ppob-9x16.svg` | Semua PPOB (pulsa/data/token/game/e-money) | Navy `#0b1e4d` |
| 2 | `02-paket-data-9x16.svg` | Paket Data semua operator | Cyan `#38e8ff` |
| 3 | `03-game-9x16.svg` | Top Up Game (diamond/UC/voucher) | Ungu `#7b5cff` |
| 4 | `04-token-listrik-9x16.svg` | Token Listrik PLN Prabayar | Emas `#ffd76a` |
| 5 | `05-promo-cashback-9x16.svg` | Ajak jadi Juragan PPOB / cashback s.d 15% | Merah `#ff4b4b` |

File `.png` (1080×1920) adalah hasil render tiap poster, siap upload.

## Palet Brand
- Navy `#0b1e4d` • Emas `#ffd76a` • Merah `#ff4b4b` • Cyan `#38e8ff` • Hijau `#0fbf72` • Ungu `#7b5cff` • Hitam `#111111`

## Cara Render Ulang PNG
Font mengikuti sistem (Montserrat/Poppins/Arial Black). Render pakai Chromium headless:

```bash
cd /home/ubuntu/jasa-web/poster
for f in 01-ppob 02-paket-data 03-game 04-token-listrik 05-promo-cashback; do
  { printf '<!doctype html><meta charset="utf-8"><style>*{margin:0;padding:0}svg{display:block;width:1080px;height:1920px}</style>'; cat "${f}-9x16.svg"; } > "_p_${f}.html"
  chromium --headless --no-sandbox --disable-gpu --hide-scrollbars \
    --window-size=1080,1920 --screenshot="${f}-9x16.png" "file:///home/ubuntu/jasa-web/poster/_p_${f}.html"
  rm -f "_p_${f}.html"
done
```

> Catatan: Chromium di sistem ini adalah versi **snap**, sehingga tidak bisa membaca file di `/tmp`.
> Selalu simpan file HTML bantu di dalam folder `/home/ubuntu/...` saat render.

## Edit
Buka file `.svg` di VS Code / Inkscape / Illustrator. Ganti teks, warna (`fill`),
atau ikon (emoji atau path). Lalu render ulang PNG dengan perintah di atas.
