# JEJEYYY ARCHIVE

Starter website for an independent digital literary archive.

## Requirements
- Node.js 20.9 or newer
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Deploy to Vercel
1. Create a GitHub repository and upload this project.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the GitHub repository.
4. Keep the detected Next.js settings and deploy.
5. After deployment, check whether `jejeyyy-archive.vercel.app` is available. If not, choose another project name.

## Customize
- Homepage: `app/page.tsx`
- Reading room demo and sample text: `components/Reader.tsx`
- Visual theme: `app/globals.css`
- Site title and metadata: `app/layout.tsx`

The included reading room is a demo with sample placeholder text. Replace it with your own manuscript before publishing.


## Ruang Penulis & Autosave
- Buka `/admin/tulis` untuk mengedit naskah **Teater Di Bawah Kaki Penguasa** yang disertakan.
- Autosave berjalan sekitar 1,2 detik setelah aktivitas mengetik berhenti.
- Draf disimpan di `localStorage` browser/perangkat yang digunakan. Ini bukan sinkronisasi cloud; pindah perangkat atau menghapus data browser tidak akan membawa draf tersebut.
- Gunakan tombol **Ekspor TXT** secara berkala untuk membuat cadangan.
- File DOCX asli dan versi teks hasil ekstraksi tersedia di `public/naskah/`.

## Batasan tahap ini
Autosave lokal sudah diimplementasikan. Login admin, penyimpanan Supabase, sinkronisasi lintas perangkat, riwayat revisi, dan penerbitan bab belum terhubung. Jangan anggap halaman editor ini sebagai sistem multi-user/cloud sebelum integrasi backend dilakukan.
