import Reader from "@/components/Reader";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BacaPage() {
  return (
    <main className="reader-page">
      <header className="reader-header">
        <Link href="/" className="back-link"><ArrowLeft size={16}/> Kembali ke arsip</Link>
        <div className="reader-brand">JEJEYYY <span>ARCHIVE</span></div>
        <span className="reader-volume">READING ROOM · DEMO</span>
      </header>
      <section className="reader-intro">
        <div className="section-kicker">THE READING ROOM</div>
        <h1>Ruang <em>membaca.</em></h1>
        <p>Balik halaman dengan tombol atau usap layar. Ini adalah contoh pengalaman membaca; naskah final dapat dimasukkan setelahnya.</p>
      </section>
      <Reader />
      <p className="reader-note">DEMO READING EXPERIENCE · JEJEYYY ARCHIVE</p>
    </main>
  );
}
