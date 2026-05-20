import { Request, Response } from "express";
import * as service from "./certificate.service";

export const getCertificateById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const certId = Array.isArray(id) ? id[0] : id;

    const url = await service.getCertificateByIdService(certId);

    const pdfBuffer = await service.fetchPdfBuffer(url);

    // 📄 Content type
    res.setHeader("Content-Type", "application/pdf");

    // 📥 Inline display
    res.setHeader(
      "Content-Disposition",
      `inline; filename=certificate-${certId}.pdf`
    );

    // 🚀 CACHING HEADERS
    res.setHeader(
      "Cache-Control",
      "public, max-age=31536000, immutable"
    );

    // 🧠 Optional (better caching validation)
    res.setHeader("ETag", certId);

    res.send(pdfBuffer);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

// Alternative endpoint that redirects to the CDN URL instead of streaming the PDF through the server
export const getCertificateById2 = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const certId = Array.isArray(id) ? id[0] : id;

    const url = await service.getCertificateByIdService(certId);

    // 🚀 Let browser + CDN handle caching
    res.setHeader(
      "Cache-Control",
      "public, max-age=31536000, immutable"
    );

    return res.redirect(url);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};