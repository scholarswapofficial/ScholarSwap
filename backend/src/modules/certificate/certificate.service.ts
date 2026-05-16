import PDFDocument from "pdfkit";
import QRCode from "qrcode";
import {Certificate} from "../../models/certificate.model";
import axios from "axios";

export const generateCertificateBuffer = async (
  userName: string,
  courseName: string,
  certificateId: string,
  publicUrl: string
): Promise<Buffer> => {
  return new Promise(async (resolve, reject) => {
    try {
      const doc = new PDFDocument({
        size: "A4",
        layout: "landscape",
      });

      const chunks: Uint8Array[] = [];

      doc.on("data", (chunk) => chunks.push(chunk));
      doc.on("end", () => resolve(Buffer.concat(chunks)));

      // 🔲 QR Code
      const qrData = await QRCode.toDataURL(publicUrl);
      const qrBuffer = Buffer.from(qrData.split(",")[1], "base64");

      // 🎨 Design
      doc.rect(20, 20, doc.page.width - 40, doc.page.height - 40).stroke();

      doc.fontSize(32).text("Certificate of Completion", { align: "center" });

      doc.moveDown();
      doc.fontSize(18).text("This is to certify that", { align: "center" });

      doc.moveDown();
      doc.fontSize(26).text(userName, { align: "center" });

      doc.moveDown();
      doc.fontSize(18).text("has successfully completed", { align: "center" });

      doc.moveDown();
      doc.fontSize(22).text(courseName, { align: "center" });

      doc.moveDown(2);

      doc.text(`Certificate ID: ${certificateId}`, {
        align: "center",
      });

      // QR
      doc.image(qrBuffer, doc.page.width - 150, doc.page.height - 150, {
        width: 100,
      });

      doc.end();
    } catch (err) {
      reject(err);
    }
  });
};

// ✅ Get by Certificate ID
export const getCertificateByIdService = async (certificateId: string) => {
  const cert = await Certificate.findById(certificateId);

  if (!cert || !cert.certificateUrl) {
    throw new Error("Certificate not found");
  }

  return cert.certificateUrl;
};

// ✅ Fetch PDF from Cloudinary
export const fetchPdfBuffer = async (url: string) => {
  const response = await axios.get(url, {
    responseType: "arraybuffer",
  }); 

  return response.data;
};