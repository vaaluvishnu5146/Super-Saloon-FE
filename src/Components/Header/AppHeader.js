import React from 'react';
import { HiBars4 } from 'react-icons/hi2';

function AppHeader({ pageName = '', headerColor = '', textColor = '' }) {
  return (
    <nav
      id="app-header"
      className="app-header"
      style={{
        background: headerColor,
        color: textColor,
      }}
    >
      <div className="navigation-container">
        <HiBars4
          style={{
            fontSize: '1.4rem',
            marginRight: '20px',
          }}
        />
        {pageName && <h4>{pageName}</h4>}
      </div>
      <img
        width="35px"
        src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
      />
    </nav>
  );
}

export default AppHeader;
