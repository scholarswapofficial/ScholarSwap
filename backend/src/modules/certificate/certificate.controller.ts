import { Progress } from "../../models/progress.model";
import { Request, Response } from "express";
import * as service from "./certificate.service";

export const getCertificateById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const url = await service.getCertificateByIdService(Array.isArray(id) ? id[0] : id);

    const pdfBuffer = await service.fetchPdfBuffer(url);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "inline; filename=certificate.pdf");

    res.send(pdfBuffer);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};