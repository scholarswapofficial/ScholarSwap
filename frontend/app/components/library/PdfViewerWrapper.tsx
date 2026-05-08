"use client";

import dynamic from "next/dynamic";

const PdfViewer = dynamic(
  () => import("./PdfViewer"),
  { ssr: false }
);

export default function PdfViewerWrapper({ bookId }: { bookId: string }) {
  return <PdfViewer bookId={bookId} />;
}