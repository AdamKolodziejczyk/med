import React from 'react';
import './Homepage.css'
import  Logo  from '../PicturesFolder/Logo.jpg';
import { Link } from 'react-router-dom';
import { BsEnvelopeOpenFill } from 'react-icons/bs';
import { IoIosPeople } from 'react-icons/io';
import { AiOutlineUnorderedList } from 'react-icons/ai';

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="logoBox">
        <img className="logoImg" src={Logo} alt="" />
      </div>
      <div className="infoBox">
        <p className="infoText"><b className="infoTextBold">Witamy na stronie NZOZ Południowa sp. z o. o.</b><br />
          Niepubliczny Zakład Opieki Zdrowotnej „ Południowa” sp z o.o. w rozpoczął działalność w styczniu 2004 r.<br />
          Doświadczona i fachowa kadra medyczna: lekarzy, pielęgniarek, fizjoterapeutów korzystająca z własnego laboratorium<br /> analitycznego, pracowni rtg i usg zapewnia kompleksową<br /> i troskliwą opiekę medyczną dla pacjentów w zakresie usług ochrony zdrowia-podstawowej opieki zdrowotnej, ginekologicznej,<br /> rehabilitacyjnej w ramach umowy z NFZ.
        </p>
      </div>
      <div className="doctorsBox">
        <Link to={`/doktorzy`}>
          <ul className="icon1">
            <IoIosPeople size="8vh" />
          </ul>
        </Link>
        <p className="doctorBoxText">
          <b>Lekarze</b>
          <br />
          Poradnia dla dorosłych
          <br />
          Poradnia dziecięca
          <br />
          Poradnia ginekologiczna
          <br />
        </p>
        <Link to={`/doktorzy`}>
          <div className="divGo">
            <p>Przejdź</p>
          </div>
        </Link>
      </div>
      <div className="servicesBox">
        <Link to={`/uslugi`}>
          <ul className="icon2">
            <AiOutlineUnorderedList size="8vh" />
          </ul>
        </Link>
        <p className="servicesBoxText">
          <b>Usługi</b>
          <br />
          Laboratorium
          <br />
          Rehabilitacja
          <br />
          Pracownia RTG
          <br />
          Pracownia USG
          <br />
        </p>
        <Link to={`/uslugi`}>
          <div className="divGo">
            <p>Przejdź</p>
          </div>
        </Link>
      </div>
      <div className="contactBox">
        <Link to={`/kontakt`}>
          <ul className="icon3">
            <BsEnvelopeOpenFill size="8vh" />
          </ul>
        </Link>
        <p className="contactBoxText">
          <b>Kontakt</b>
          <br />
          Dane kontaktowe naszej placówki
        </p>
        <Link to={`/kontakt`}>
          <div className="divGo">
            <p>Przejdź</p>
          </div>
        </Link>
      </div>
      <div className="numbers">
        <p>
          <b>Poradnia ogólna</b>
          <br />
          41-372-91-60
          <br />
          41-372-91-70</p>
        <p>
          <b>Poradnia dziecięca</b>
          <br />
          - dzieci chore
          <br />
          41-372-91-62
          <br />
          - dzieci zdrowe
          <br />
          41-372-91-61
        </p>
        <p>
          <b>Poradnia ginekologiczna</b>
          <br />
          41-372-91-65
        </p>
      </div>
      <div className="address">
        <p>
          <h2>NZOZ Południowa</h2>
        </p>
        <p>
          26-200 Końskie, ul. Południowa 1
          <br />
          Godziny przyjęć: pn-pt: 8:00 - 18:00
          <br />
          Rejestracja czynna od godziny 7:00
          <br />
        </p>
      </div>
    </div>
  );
}

export default HomePage;
