import * as React from 'react';
import "./Footer.css";

export interface IFooterProps {
}

export function Footer (props: IFooterProps) {
  return (
    <footer>
      <div className="footer">
        <div style={{ marginLeft: 20 }}>
          <h4 className="fw-600">Bakar Tat</h4>
        </div>
        <div className="about-us">
          <div>
            <h5 className="fw-600">Hakkımızda</h5>
          </div>
          <div>
            <h5 className="fw-600">E & K</h5>
          </div>
          <div>
            <h5 className="fw-600">Güvenlik Politikası</h5>
          </div>
          <div>
            <h5 className="fw-600">Bize Ulaş</h5>
          </div>
        </div>
      </div>
    </footer>
  );
}
