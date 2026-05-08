// app/books/[id]/page.tsx

import PdfViewerWrapper from "@/components/library/PdfViewerWrapper";

export default async function BookPage({ params }: any) {
  const { id } = await params;   // ✅ FIX

  console.log("Book ID:", id);

  return (
    <div className="p-4">
      <PdfViewerWrapper bookId={id} />
    </div>
  );
}