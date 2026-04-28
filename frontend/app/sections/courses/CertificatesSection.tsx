"use client";

import { certificatesData } from "@/constant/courses/certificates";
import "@/styles/sections/courses/certificates.scss";

export default function CertificatesSection() {
  return (
    <>
      {/* HEADER */}
      <div className="cert-header">
        <h1>{certificatesData.title}</h1>
        <p>{certificatesData.subtitle}</p>
      </div>

      {/* STATS */}
      <div className="cert-stats">

        <div className="stat-card">
          <h3>{certificatesData.stats.total}</h3>
          <p>Certificates Earned</p>
        </div>

        <div className="stat-card">
          <h3>{certificatesData.stats.latest.date}</h3>
          <p>{certificatesData.stats.latest.course}</p>
        </div>

        <div className="stat-card highlight">
          <p>Keep Learning!</p>
          <span>Complete more courses to earn new certificates.</span>
        </div>

      </div>

      {/* GRID */}
      <div className="cert-grid">
        {certificatesData.certificates.map((cert) => (
          <div key={cert.id} className="cert-card">

            {/* IMAGE */}
            <div className="cert-image">
              <img src={cert.image} alt={cert.title} />
            </div>

            {/* CONTENT */}
            <div className="cert-body">
              <h3>{cert.title}</h3>
              <p>Completed on {cert.date}</p>

              <button className="download-btn">
                ⬇ Download
              </button>
            </div>

          </div>
        ))}
      </div>
    </>
  );
}