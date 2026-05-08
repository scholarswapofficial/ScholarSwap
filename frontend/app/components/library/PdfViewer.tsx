"use client";

import { Document, Page, pdfjs } from "react-pdf";
import { useEffect, useMemo, useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function PdfViewer({ bookId }: { bookId: string }) {
  const [numPages, setNumPages] = useState<number>(0);
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token") || "");
  }, []);

  const onLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const file = useMemo(() => {
    if (!token) return undefined;
  return {
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/library/view/${bookId}`,
    httpHeaders: {
      Authorization: `${token}`,
    },
  };
}, [bookId, token]);

  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      className="w-full flex justify-center bg-gray-100 py-6"
    >
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-4">

     {file && <Document
         file={file}
         onLoadSuccess={onLoadSuccess}
         loading="Loading PDF..."
         >
        {Array.from(new Array(numPages), (_, index) => (
          <Page key={index} pageNumber={index + 1} renderTextLayer={false} 
          renderAnnotationLayer={false} />
        ))}
      </Document> }
        </div>
    </div>
  );
}