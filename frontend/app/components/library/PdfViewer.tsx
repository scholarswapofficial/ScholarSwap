"use client";

import { Document, Page, pdfjs } from "react-pdf";
import { useEffect, useMemo, useState } from "react";
import "./pdfViewer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function PdfViewer({ bookId }: { bookId: string }) {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [token, setToken] = useState("");

  const userEmail = "user@example.com"; // replace dynamically

  useEffect(() => {
    setToken(localStorage.getItem("token") || "");
  }, []);

  const file = useMemo(() => {
    if (!token) return undefined;

    return {
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/library/view/${bookId}`,
      httpHeaders: {
        Authorization: `${token}`,
      },
    };
  }, [bookId, token]);

  const onLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  if (!file) return <div className="loader">Loading PDF...</div>;

  return (
    <div className="pdf-container" onContextMenu={(e) => e.preventDefault()}>
      
      {/* 🔝 Toolbar */}
      <div className="toolbar">
        <button onClick={() => setPageNumber(p => Math.max(p - 1, 1))}>
          ◀
        </button>

        <input
          type="number"
          value={pageNumber}
          onChange={(e) => setPageNumber(Number(e.target.value))}
        />

        <span>/ {numPages}</span>

        <button onClick={() => setPageNumber(p => Math.min(p + 1, numPages))}>
          ▶
        </button>

        <div className="divider" />

        <button onClick={() => setScale(s => s + 0.2)}>+</button>
        <button onClick={() => setScale(s => Math.max(0.6, s - 0.2))}>-</button>

        <span>{Math.round(scale * 100)}%</span>
      </div>

      {/* 📄 Viewer */}
      <div className="viewer">
        <Document file={file} onLoadSuccess={onLoadSuccess}>
          <div className="page-wrapper">
            
            <Page
              pageNumber={pageNumber}
              scale={scale}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />

            {/* 🔐 Watermark */}
            <div className="watermark">
              {[...Array(5)].map((_, i) => (
                <span key={i}>
                  {userEmail} • ScholarSwap
                </span>
              ))}
            </div>

          </div>
        </Document>
      </div>
    </div>
  );
}