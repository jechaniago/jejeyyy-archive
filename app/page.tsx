import Link from "next/link";
import { ArrowDown, ArrowRight, BookOpen, Feather, Library, Sparkles } from "lucide-react";

const books = [
  { title: "Di Bawah Kaki Penguasa", category: "Drama · Satire", status: "Segera hadir", number: "01", cover: "cover-one" },
  { title: "Nama yang Tertinggal", category: "Fiksi · Sastra", status: "Dalam penulisan", number: "02", cover: "cover-two" },
  { title: "Arsip dari Kesunyian", category: "Prosa · Refleksi", status: "Segera hadir", number: "03", cover: "cover-three" },
];

export default function Home() {
  return (
    <main>
      <div className="announcement">AN INDEPENDENT LITERARY ARCHIVE <span>✦</span> EST. 2026</div>
      <header className="site-header">
        <Link href="/" className="wordmark"><span>JEJEYYY</span><small>ARCHIVE</small></Link>
        <nav>
          <a href="#home">Beranda</a>
          <a href="#collection">Koleksi</a>
          <a href="#about">Tentang</a>
        </nav>
        <div style={{display:"flex",alignItems:"center",gap:18}}>
          <Link className="header-link" href="/admin/tulis">Ruang penulis</Link>
          <a className="header-link" href="#collection">Jelajahi arsip <ArrowRight size={15}/></a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-grain" />
        <div className="hero-content">
          <div className="eyebrow"><span /> THE ART OF STORIES <span /></div>
          <h1>Setiap halaman<br/><em>menyimpan</em> kehidupan.</h1>
          <p className="hero-copy">Sebuah ruang untuk cerita-cerita yang enggan dilupakan. Menyimpan kata, gagasan, dan dunia yang hidup di antara halaman.</p>
          <div className="hero-actions">
            <a className="button-primary" href="#collection">Jelajahi koleksi <ArrowRight size={16}/></a>
            <a className="button-text" href="#about">Mengenal arsip <ArrowDown size={15}/></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Ilustrasi buku terbuka">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="book-glow" />
          <div className="open-book">
            <div className="book-page left-page"><span className="page-mark">J</span><i>JEJEYYY ARCHIVE</i></div>
            <div className="book-page right-page"><span className="page-title">A story<br/>begins here.</span><i>VOL. I — 2026</i></div>
            <div className="book-spine" />
          </div>
          <div className="art-caption">FIG. 01 — THE BEGINNING OF A STORY</div>
        </div>
        <div className="hero-bottom"><span>SCROLL TO DISCOVER</span><span className="vertical-line" /><span>01 / 03</span></div>
      </section>

      <section className="intro section-wrap" id="about">
        <div className="section-kicker"><Feather size={15}/> A PERSONAL LITERARY COLLECTION</div>
        <div className="intro-grid">
          <h2>Bukan sekadar<br/>tempat membaca.<br/><em>Sebuah tempat pulang.</em></h2>
          <div className="intro-text">
            <p>JEJEYYY ARCHIVE adalah perpustakaan digital independen untuk mengumpulkan dan menerbitkan karya-karya orisinal.</p>
            <p>Di sini, setiap tulisan mendapat ruangnya sendiri. Dibaca perlahan, dinikmati sepenuhnya, dan disimpan agar tak lekang oleh waktu.</p>
            <div className="signature">— JEJEYYY</div>
          </div>
        </div>
      </section>

      <section className="collection section-wrap" id="collection">
        <div className="collection-heading">
          <div><div className="section-kicker"><Library size={15}/> THE COLLECTION</div><h2>Ruang <em>karya.</em></h2></div>
          <span className="collection-count">01 — 03 / ARCHIVE</span>
        </div>
        <div className="book-grid">
          {books.map((book) => (
            <article className="book-card" key={book.number}>
              <div className={`cover ${book.cover}`}>
                <div className="cover-frame"><span className="cover-top">JEJEYYY ARCHIVE</span><span className="cover-symbol">✳</span><strong>{book.title}</strong><span className="cover-bottom">A WORK OF FICTION · {book.number}</span></div>
              </div>
              <div className="book-meta"><span>{book.category}</span><span>{book.number}</span></div>
              <h3>{book.title}</h3>
              <p className="book-status">{book.status}</p>
              <Link href="/baca" className="card-link">Lihat pengalaman membaca <ArrowRight size={14}/></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="reading-banner">
        <div className="banner-icon"><BookOpen size={28}/></div>
        <div><div className="section-kicker">A MORE IMMERSIVE WAY TO READ</div><h2>Buka halaman.<br/><em>Masuki ceritanya.</em></h2><p>Nikmati pengalaman membaca dengan nuansa buku fisik dan animasi membalik halaman.</p></div>
        <Link href="/baca" className="button-outline">Coba ruang baca <ArrowRight size={16}/></Link>
      </section>

      <footer className="footer">
        <div className="footer-brand"><span>JEJEYYY</span><small>ARCHIVE</small></div>
        <p>A HOME FOR STORIES THAT LIVE FOREVER.</p>
        <span>© 2026 JEJEYYY ARCHIVE. ALL STORIES RESERVED.</span>
      </footer>
    </main>
  );
}
