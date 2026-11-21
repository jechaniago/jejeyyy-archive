"use client";

import { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const pages = [
  { type: "cover", title: "JEJEYYY\nARCHIVE", text: "A HOME FOR STORIES THAT LIVE FOREVER." },
  { type: "paper", title: "Catatan Pembuka", text: "Setiap cerita bermula dari sesuatu yang sederhana: sebuah pertanyaan, kenangan, atau kegelisahan yang belum menemukan tempat untuk pulang.\n\nDi dalam arsip ini, kata-kata diberi ruang untuk bernapas. Bacalah perlahan; tidak semua hal harus selesai dalam sekali duduk." },
  { type: "paper", title: "I. Tentang Halaman", text: "Ada hal-hal yang hanya bisa disampaikan melalui cerita. Bukan karena kenyataan tak cukup kuat, melainkan karena imajinasi kadang mampu menyingkap sisi yang luput dari pandangan.\n\nMaka halaman demi halaman dibuka, dan sebuah dunia mulai terbentuk." },
  { type: "paper", title: "II. Sebuah Permulaan", text: "Di luar sana, waktu terus bergerak. Namun di antara sampul sebuah buku, seseorang dapat berhenti sejenak, mendengar pikirannya sendiri, lalu menemukan sesuatu yang selama ini dicari.\n\nMungkin itulah alasan kita membaca." },
  { type: "paper", title: "Catatan Akhir", text: "Terima kasih telah singgah di JEJEYYY ARCHIVE.\n\nSampai bertemu di halaman berikutnya." },
  { type: "back", title: "JEJEYYY ARCHIVE", text: "END OF DEMO" },
];

export default function Reader() {
  const bookRef = useRef<any>(null);
  const [page, setPage] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const prev = () => bookRef.current?.pageFlip()?.flipPrev();
  const next = () => bookRef.current?.pageFlip()?.flipNext();
  const toggleFullscreen = async () => {
    const el = document.getElementById("book-stage");
    if (!document.fullscreenElement && el) {
      await el.requestFullscreen?.();
      setFullscreen(true);
    } else if (document.fullscreenElement) {
      await document.exitFullscreen?.();
      setFullscreen(false);
    }
  };

  return (
    <div className={`reader-shell ${fullscreen ? "is-fullscreen" : ""}`} id="book-stage">
      <div className="book-stage">
        <HTMLFlipBook
          ref={bookRef}
          width={380}
          height={520}
          size="stretch"
          minWidth={280}
          maxWidth={760}
          minHeight={380}
          maxHeight={900}
          maxShadowOpacity={0.42}
          showCover
          mobileScrollSupport
          drawShadow
          flippingTime={850}
          usePortrait={true}
          startPage={0}
          onFlip={(e: any) => setPage(e.data)}
          className="flip-book"
          style={{ margin: "0 auto" }}
        >
          {pages.map((item, index) => (
            <div className={`reader-paper ${item.type}`} key={index}>
              <div className="paper-inner">
                {item.type === "cover" && <div className="reader-cover-mark">✳</div>}
                <span className="paper-running">JEJEYYY ARCHIVE</span>
                <h2>{item.title.split("\n").map((line) => <span key={line}>{line}<br/></span>)}</h2>
                <p>{item.text}</p>
                <span className="paper-number">{item.type === "paper" ? String(index).padStart(2, "0") : "✦"}</span>
              </div>
            </div>
          ))}
        </HTMLFlipBook>
      </div>
      <div className="reader-controls">
        <button onClick={prev} aria-label="Halaman sebelumnya"><ChevronLeft size={19}/></button>
        <span>HALAMAN <b>{page + 1}</b> / {pages.length}</span>
        <button onClick={next} aria-label="Halaman berikutnya"><ChevronRight size={19}/></button>
        <button className="fullscreen-button" onClick={toggleFullscreen} aria-label="Layar penuh"><Maximize2 size={16}/></button>
      </div>
    </div>
  );
}
