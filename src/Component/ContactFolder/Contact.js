import React from 'react';
import './Contact.css';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';

function Contact() {
  return (
    <div className="contact">
      <div className="contactDiv1">
        <h1>
          Kontakt
        </h1>
      </div>
      <div className="contactDiv2">
        <AiOutlineUnorderedList size="8vh" />
        <p>
          <h4>Adres</h4>
          NZOZ "Południowa" Spółka z o.o.<br />
          ul. Południowa 1<br />
          26-200 Końskie<br />
          Polska<br />
        </p>
      </div>
      <div className="contactDiv3">
        <AiOutlineMail size="8vh" />
        <p>
          <h4>E-mail</h4>
          nzoz-poludniowa@o2.pl
        </p>
      </div>
      <div className="contactDiv4">
        <FiPhoneCall  size="8vh" />
      <h4>Telefony</h4>
        <p className="contacText4">
          <b>Administracja:</b><br />
          413729180<br />
          413729164<br /><br/>
          <b> Poradnia ogólna:</b><br />
          413729160<br />
          413729170<br /><br/>
          <b> Poradnia dziecięca:</b><br />
          - dzieci chore<br />
          413729162<br />
          - dzieci zdrowe<br />
          413729161<br /><br/>
          <b> Poradnia ginekologiczna:</b><br />
          413729165<br /><br/>
          <b> Gabinet zabiegowy:</b><br />
          413729158<br /><br/>
          <b> Gabinet pielęgniarek POZ:</b><br />
          413729284<br /><br/>
          <b> Gabinet położnych POZ:</b><br />
          413729165
        </p>
      </div>
    </div>
  );
}

export default Contact;
