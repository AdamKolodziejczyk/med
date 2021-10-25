import React from 'react';
import './Doctors.css';

const Doctors = () => {
  return (
    <div className="doctors">
      <div className="doctorsDiv1">
        <h1>Lekarze</h1>
      </div>
      <div className="doctorsDiv2">
        <p><b>Poradnia dla dorosłych</b><br />
          - lek. med. Adamska Agnieszka<br />
          - lek. med. Dąbrowska-Milczarek Małgorzata<br />
          - lek. med. Dąbrowska Michalina<br />
          - lek. med. Grabowski Jerzy<br />
          - lek. med. Janduła-Wdowicz Anna<br />
          - lek. med. Ociepa Anna<br />
          - lek. med. Romanowska Katarzyna<br />
          - lek. med. Szejna Marek<br />
          - dr n. med. Wijata Jacek<br />
          - lek. med. Wiktorowicz Agnieszka<br />
          - lek. med. Wojciechowski Kazimierz<br />
          - lek. med. Ziębakowska-Kassyk Ewa<br />
        </p>
      </div>
      <div className="doctorsDiv3">
        <p><b>Poradnia dziecięca</b><br />
          - lek. med. Kalużna Marta<br />
          -lek. med. Kierstan Wanda<br />
          - lek. med. Marczak-Lipiec Elżbieta<br />
          - lek. med. Nowak Barbara<br />
          - lek. med. Podstolska-Sosnowska Aldona<br />
          - lek. med. Szabelak Krystyna<br />
          - lek. med. Zuba Małgorzata<br />
        </p>
      </div>
      <div className="doctorsDiv4">
        <p><b>Poradnia ginekologiczna:</b><br />
          - lek. med. Kaczorowska Marta<br />
          - lek. med. Szymański Stefan<br />
        </p>
      </div>
    </div>
  );
}

export default Doctors;
