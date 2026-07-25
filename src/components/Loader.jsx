import React, { useEffect, useState } from 'react';

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader ${hidden ? 'hidden' : ''}`} id="loader">
      <div className="loader-inner">
        <span className="loader-word">S H I S H I R</span>
        <div className="loader-bar">
          <i />
        </div>
      </div>
    </div>
  );
}
