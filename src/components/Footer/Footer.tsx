import * as React from 'react';
import "./Footer.css";

export interface IFooterProps {
}

export function Footer (props: IFooterProps) {
  return (
    <footer>
      <div className="footer">
        <div style={{ marginLeft: 20 }}>
          <h4 className="fw-600">Sweet Dish</h4>
        </div>
        <div className="about-us">
          <div>
            <h5 className="fw-600">About Us</h5>
          </div>
          <div>
            <h5 className="fw-600">T & C</h5>
          </div>
          <div>
            <h5 className="fw-600">Privacy Policy</h5>
          </div>
          <div>
            <h5 className="fw-600">Contact Us</h5>
          </div>
        </div>
      </div>
    </footer>
  );
}
