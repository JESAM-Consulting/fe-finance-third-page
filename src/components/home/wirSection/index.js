import React, { useState } from "react";

import "./wirSection.scss";
import Men from "../../../assets/images/men.webp";
import Men1 from "../../../assets/images/men1.webp";
import ChatIcon from "../../../assets/icons/chat.svg";
import Icon1 from "../../../assets/icons/Pfad 794.svg";
import Icon2 from "../../../assets/icons/cil_star.svg";
import Icon32 from "../../../assets/icons/cil_star (1).svg";
import Icon321 from "../../../assets/icons/Pfad 793 1.svg";
import Slider from "react-slick";
import ContactModal from "../../ContactModal";
import SecModal from "../../secModal";
import ContactModalNew from "../../ContactModalNew";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className="right-alignment">
      <svg
        width="18"
        height="35"
        viewBox="0 0 18 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 33.5L17 17.5L0.999997 1.5"
          stroke="#505050"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="left-alignment" onClick={onClick}>
      <svg
        width="18"
        height="35"
        viewBox="0 0 18 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 33.5L1 17.5L17 1.5"
          stroke="#505050"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

export default function WirSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <div className="wir-section-all-contnet-alignment">
        <div className="container-md-2">
          <div className="relativ-section">
            <h2>Wir sind für Dich da!</h2>
            <div className="two-image-center-alignment">
              <div className="card">
                <img src={Men} alt="Men" />

                <div className="card-details-new">
                  <p>Kennet Kostmann</p>
                  <a href="mailto:k.kostmann@fe-finance.de">
                    k.kostmann@fe-finance.de
                  </a>
                  <a href="tel:+49 157 31637040">+49 157 31637040</a>
                </div>
              </div>
              <div className="card">
                <img src={Men1} alt="Men1" />
                <div className="card-details-new">
                  <p>Ardian Gjeka</p>
                  <a href="mailto:a.gjeka@fe-finance.de">
                    a.gjeka@fe-finance.de
                  </a>
                  <a href="tel:+49 151 40566848">+49 151 40566848</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="new-light-banner">
        <div className="container-md-2">
          <div className="button-center-alignment">
            <button onClick={() => setModalOpen(!modalOpen)}>
              <img src={ChatIcon} alt="ChatIcon" />
              <span>Kostenfreies Erstgespräch vereinbaren</span>
            </button>
          </div>
        </div>
        <div className="container-md-7">
          <div className="right-image-alignment">
            <img src={Icon1} alt="Icon1" />
          </div>
          <Slider {...settings}>
            <div>
              <div className="slider-section-content">
                <h2>Marieke</h2>
                <div className="rating-alignment">
                  <img src={Icon2} alt="Icon2" />
                  <img src={Icon2} alt="Icon2" />
                  <img src={Icon2} alt="Icon2" />
                  <img src={Icon2} alt="Icon2" />
                  <img src={Icon2} alt="Icon2" />
                </div>
                <p>
                  ”Ardian ist wirklich ein super Berater für angehende Lehrer
                  und Lehrerinnen! Er konnte mir bei meinen Fragen und Bedenken
                  sehr gut helfen. Er nimmt sich zudem sehr viel Zeit und
                  Erklärt alles anschaulich und verständlich. Alle Einzelheiten,
                  Klauseln, Abkürzungen und das Kleingedruckte wurden geduldig
                  besprochen. So konnten wir relativ schnell zu einer guten
                  Lösung für mich kommen.”
                </p>
              </div>
            </div>
            <div>
              <div className="slider-section-content">
                <h2>Sofia</h2>
                <div className="rating-alignment">
                  <img src={Icon2} alt="Icon2" />
                  <img src={Icon2} alt="Icon2" />
                  <img src={Icon2} alt="Icon2" />
                  <img src={Icon2} alt="Icon2" />
                  <img src={Icon2} alt="Icon2" />
                </div>
                <p>
                  “Danke für die Geduld und die super Beratung! Ardian hat sich
                  sehr viel Zeit für mich genommen. Alles lief verständlich und
                  Schritt für Schritt. Es gab keine "dummen" Fragen. Das fand
                  ich toll, weil ich mit dem ganzen "Versicherungskram" echt ein
                  wenig überfordert war. Er hat mir alle Klauseln und Abläufe
                  sehr einfach erklärt sodass ich sie als Laie auch verstehen
                  konnte. Wir konnten trotz einiger Vorerkrankungen die
                  passenden Versicherungen für mich finden. Nachdem ich Horror
                  Geschichten von Kommilitonen gehört hatte war ich wirklich
                  sehr froh das alles so easy abgelaufen ist. Danke nochmal!”
                </p>
              </div>
            </div>
            <div>
              <div className="slider-section-content">
                <h2>Lennard</h2>
                <div className="rating-alignment">
                  <img src={Icon2} alt="Icon2" />
                  <img src={Icon2} alt="Icon2" />
                  <img src={Icon2} alt="Icon2" />
                  <img src={Icon2} alt="Icon2" />
                  <img src={Icon32} alt="Icon32" />
                </div>
                <p>
                  “Anfangs war ich erstmal skeptisch, weil man ja immer im
                  denkt, dass Versicherungsverteter etwas verkaufen wollen.
                  Dabei wusste ich garnicht das es da auch noch Unterschiede
                  gibt. Ich bin durch das Webinar aufmerksam geworden und dachte
                  mir: kann ja nichts schief gehen, wenn es kostenlos ist. Alles
                  ist vollkommen unverbindlich und ich fühle mich bei Ardian
                  immer top beraten. Es wird einem nichts aufgedrängt und neben
                  der Berücksichtigung individueller Wünsche hat Ardian für mich
                  das Preis-Leistungstechnisch beste Angebot gefunden.. egal ob
                  Dienstunfähigkeit, Krankenversicherung, Haftpflicht. Ich kann
                  ihn nur weiter empfehlen! “
                </p>
              </div>
            </div>
            <div>
              <div className="slider-section-content">
                <h2>Selim</h2>
                <div className="rating-alignment">
                  <img src={Icon2} alt="Icon2" />
                  <img src={Icon2} alt="Icon2" />
                  <img src={Icon2} alt="Icon2" />
                  <img src={Icon2} alt="Icon2" />
                  <img src={Icon2} alt="Icon2" />
                </div>
                <p>
                  “Alles Top! Habe mir sehr viel Zeit und Stress erspart.
                  Dadurch das Kennet Versicherungsmakler ist und somit
                  unabhängig ist habe ich mir sehr viel Zeit gespart mit
                  Angeboten vergleichen. Er konnte mir sehr unkompliziert und
                  schnell Angebote von verschiedenen Versicherungen einholen.
                  Fast schon wie ein Vergleichsportal nur besser und
                  persönlicher. So darf es in Zukunft gerne bleiben. Danke
                  Kennet und bis bald!”
                </p>
              </div>
            </div>
          </Slider>
          <div className="left-image">
            <img src={Icon321} alt="Icon321" />
          </div>
        </div>
      </div>
      {modalOpen && (
        <ContactModalNew
          setModalOpen={setModalOpen}
          setModal2Open={setModal2Open}
        />
      )}
      {modal2Open && <SecModal setModal2Open={setModal2Open} />}
    </div>
  );
}
