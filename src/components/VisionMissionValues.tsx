import React from "react";
import "./VisionMissionValues.css";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const VisionMissionValues = () => {
  return (
    <section className="vmv-container">
      {/* Vision */}
      <div className="vmv-card vision">
        <h2>Our Vision</h2>
        <p>
          To become a leading study abroad and education services agency in East Africa, recognised for excellence, transparency, and student success.
        </p>

        <div className="image-circle">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=2047&auto=format&fit=crop"
            alt="Our Vision - Looking ahead"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Mission */}
      <div className="vmv-card mission">
        <h2>Our Mission</h2>
        <p>
          To provide authentic, reliable, and professional education consultancy services that empower students to access quality international education opportunities.
        </p>

        <div className="image-circle">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
            alt="Our Mission - Students working together"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Values */}
      <div className="vmv-card values">
        <h2>Our Values</h2>
        <ul className="vmv-list">
          <li><strong>Integrity:</strong> Operating with honesty and transparency in all our dealings.</li>
          <li><strong>Professionalism:</strong> Delivering expert guidance and dedicated service.</li>
          <li><strong>Student-Centric:</strong> Placing the needs and goals of our students at the heart of everything we do.</li>
          <li><strong>Excellence:</strong> Striving for the highest standards in educational consultancy.</li>
        </ul>

        <div className="image-circle">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
            alt="Our Values - Integrity and Community"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default VisionMissionValues;
