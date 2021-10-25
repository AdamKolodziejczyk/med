import React from 'react';
import './Services.css';
import  Picture1 from '../PicturesFolder/Picture1.jpg';
import  Picture2 from '../PicturesFolder/Picture2.jpg';
import  Picture3 from '../PicturesFolder/Picture3.jpg';
import  Picture4 from '../PicturesFolder/Picture4.jpg';

function Services() {
  return (
    <div className="services">
      <div className="servicesDiv1">
        Usługi
      </div>
      <div className="servicesDiv2">
        <img className="Picture1" src={Picture1} alt="" />
        <div className="servicesText1">
          <p><h1>Laboratorium</h1>
            Telefon kontaktowy: 41-372-91-82<br />
            Pobieranie materiału do badań odbywa się<br />
            w godzinach 7.30-9.00<br /><br />
            Zakres badań dostępnych dla pacjentów:<br />
            - hematologia,<br />
            - koaugologia,<br />
            - biochemia,<br />
            - immunochemia,<br />
            - analityka i serologia,<br />
            - mikrobiologia i parazytologia,<br />
            - pobieranie materiału DNA w kierunku ojcostwa,<br />
            - testy na obecność wirusa SARS-COV-2,<br />
            - testy na obecność przeciwciał przeciwko SARS-COV-2.<br /><br />
            Wykonujemy badania u pacjentów posiadających skierowania od<br />
            lekarza (w ramach umowy NFZ)<br />
            oraz indywidualnych (badania płatne).<br /><br />
            Kierownik: specjalista laboratoryjnej diagnostyki medycznej<br />
            mgr Anna Dworak<br />
          </p>
        </div>
      </div>
      <div className="servicesDiv3">
        <img className="Picture2" src={Picture2} alt="" />
        <div className="servicesText2">
          <p><h1>Pracownia USG</h1>
            Dysponujemy pracownią ultrasonograficzną<br />
            z nowoczesnym aparatem Samsung HS50, który dzięki posiadanym<br />
            głowicom może być wykorzystywany w wielu specjalnościach<br />
            lekarskich.<br /><br />
            Badania przeprowadzane są po wcześniejszym ustaleniu terminu w<br />
            gabinecie zabiegowym (tel. 41-372-91-58), pacjentom posiadającym<br />
            skierowanie od lekarza NZOZ "Południowa" lub ośrodkiem zdrowia<br />
            posiadającym umowę z naszą placówką.<br /><br />
            <b>Wykonujemy USG:</b><br />
            - jamy brzusznej,<br />
            - węzłów chłonnych,<br />
            - tarczycy,<br />
            - nerek,<br />
            - piersi.<br />
            Badania wykonywane są zarówno dla dorosłych jak i dzieci.<br /><br />
            <b>Przygotowanie do badania USG:</b><br />
            - dzień przed badaniem nie spożywać pokarmów ciężkostrawnych,<br />
            wzdymających, napojów gazowanych,<br />
            - ostatni posiłek zjeść nie później niż<br />
            o 19-tej.<br /><br />
            <b>W dniu badania należy:</b><br />
            - zgłosić się na czczo,<br />
            - zadbać o wypróżnienie,<br />
            - nie palić papierosów i nie pić kawy,<br />
            - pacjenci, którym badanie wyznaczono po godzinie 14-tej mogą<br />
            zjeść najpóźniej do godziny 8.00 bułkę z masłem i wypić gorzką<br />
            herbatę,<br />
            - jeżeli wcześniej były wykonywane badania USG należy przynieść<br />
            ze sobą ich wynik,
            - na 1-2 godziny przed badaniem wypić około litr niegazowanego<br />
            płynu i zgłosić się do badania z pełnym pęcherzem.
           </p>
        </div>
      </div>
      <div className="servicesDiv4">
        <img className="Picture3" src={Picture3} alt="" />
        <div className="servicesText3">
          <p><h1>Pracownia rentgenodiagnostyki</h1>
            Telefon kontaktowy: 41-372-91-92 Nasza przychodnia zapewnia<br />
            usługi z zakresu rentgenodiagnostyki we własnej pracowni RTG.<br />
            Pracownia czynna od poniedziałku do piątku<br />
            w godzinach 8.00-13.00.<br /><br />
            W pracowni RTG wykonywane są badania diagnostyczne:<br />
            - czaszki,<br />
            - zatok,<br />
            - jamy brzusznej,<br />
            - kręgosłupa: szyjnego, piersiowego, lędźwiowego, lędźwiowo-<br />
            krzyżowego,<br />
            - miednicy,<br />
            - kończyn,<br />
            - stawów rąk i stóp,<br />
            - płuc.<br /><br />
            Badania radiologiczne wykonywane są wyłącznie na podstawie<br />
            skierowania lekarskiego.<br /><br />
            Pacjenci ze skierowaniami z NZOZ „Południowa” lub placówki, która<br />
            ma podpisaną umowę z naszą pracownią obsługujemy bezpłatnie.<br />
            Pozostali pacjenci ze skierowaniami z gabinetów prywatnych płacą<br />
            za badania wg aktualnego cennika.<br /><br />
            JEŻELI ISTNIEJE PRAWDOPODOBIEŃSTWO, ŻE JESTEŚ W CIĄŻY<br />
            BEZWZGLĘDNIE NALEŻY POINFORMOWAĆ O TYM PRZED WYKONANIEM BADANIA.<br /><br />
            Przygotowanie do badania radiologicznego kręgosłupa lędźwiowo-<br />
            krzyżowego/ jamy brzusznej:<br />
            - ostatni posiłek pacjent może zjeść w porze obiadowej<br />
            poprzedniego dnia,<br />
            - posiłek ten powinien być lekkostrawny,<br />
            - wieczorem można wypić do dwóch szklanego płynu, bez cukru,<br />
            - na badanie należy zgłosić się na czczo i po wypróżnieniu.<br />
          </p>
        </div>
      </div>
      <div className="servicesDiv">
        <img className="Picture4" src={Picture4} alt="" />
        <div className="servicesText4">
          <p><h1>Rehabilitacja</h1>
            NZOZ „Południowa” oddaje do dyspozycji pacjentów dział<br />
            rehabilitacji składający się z pracowni fizjoterapii<br />
            i kinezyterapii czynny od poniedziałku do piątku w godzinach<br />
            8.00-18.00.<br /><br />
            Kontakt telefoniczny:  41-372-91-72,41-372-91-91<br /><br />
            <b>Kadra rehabilitacyjna:</b><br />
            - mgr Gąszcz Paulina<br />
            - mgr Ośniałowska Kalina<br />
            - mgr Piętowska Aneta<br />
            - tech. fizjoterapii Szcześniak-Uryga Agnieszka<br />
            - mgr Szpoton Justyna<br /><br />
            <b>Kinezyterapia</b><br /><br />
            Dział kinezyterapii wyposażony jest w sprzęt rehabilitacyjny<br />
            pozwalający prowadzić ćwiczenia zbiorowe i indywidualne<br />
            takie jak m.in.:<br />
            - ćwiczenia korekcyjne,<br />
            - prace z pacjentem metodą PNF<br />,
            - prace z pacjentem metodą MCKenzie,<br />
            - uniwersalny gabinet usprawnienia technicznego (UGUL).<br /><br />
            <b>Fizjoterapia</b><br /><br />
            Dział fizjoterapii wyposażony jest w nowoczesny sprzęt<br />
            pozwalający wykonywać m.in. następujące zabiegi:<br />
            - elektrostymulacja,<br />
            - TENS,<br />
            - prądy interferencyjne,<br />
            - jonoforeza,<br />
            - galwanizacja,<br />
            - laser czerwony i podczerwony,<br />
            - impulsowe pole magnetyczne niskiej częstotliwości,<br />
            - elektroterapia,<br />
            - fala uderzeniowa,<br />
            - terapia ultradźwiękowa,<br />
            - aquavibron – masaż wibracyjny,<br />
            - światło spolaryzowane,<br />
            - lampa solux,<br />
            - kinesiotaping.<br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
