import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to={`/`} >
      <div className="pageName">
        <p>NZOZ Południowa</p>
      </div>
      </Link>
      <Link to={`/`} >
      <div className="homePageDiv">
        <p>Strona główna</p>
      </div>
      </Link>
      <Link to={`/doktorzy`} >
      <div className="doctorDiv">
        <p>Lekarze</p>
      </div>
      </Link>
      <Link to={`/uslugi`} >
      <div className="servicesDiv">
        <p>Usługi</p>
      </div>
      </Link>
      <Link to={`/kontakt`} >
      <div className="contactDiv">
        <p>Kontakt</p>
      </div>
      </Link>
    </div>
  );
}

export default Header;
