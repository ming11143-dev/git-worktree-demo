import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    // Store consent in localStorage and hide the popup
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent">
      <div className="container cookie-consent__inner">
        <div className="cookie-consent__content">
          <h3 className="cookie-consent__title">我們重視您的隱私</h3>
          <p className="cookie-consent__text">
            本網站使用 Cookie 來優化您的瀏覽體驗、提供個人化內容及分析網站流量。繼續瀏覽即表示您同意我們使用 Cookie。
          </p>
        </div>
        <div className="cookie-consent__actions">
          <button className="btn btn--primary" onClick={handleAccept}>
            我同意
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
