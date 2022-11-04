import React, { useState } from "react";
import Slider from "react-slick";
import "./clientSection.scss";
import RightIcon from "../../../assets/icons/new-right.svg";
import LeftIcon from "../../../assets/icons/new-left.svg";
import ContactModal from "../../ContactModal";
import SecModal from "../../secModal";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="button-right-side-arrow-alignment-for-page"
    >
      <img src={RightIcon} alt="RightIcon" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="button-left-side-arrow-alignment-for-page"
    >
      <img src={LeftIcon} alt="LeftIcon" />
    </div>
  );
}
export default function ClientSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="client-section-all-content-banner">
        <div className="container-md-2">
          <Slider {...settings}>
            <div>
              <div className="text-center-alignment-all">
                <h1>Lehrerberatung Step by Step</h1>
                <div className="button-center-alignment">
                  <button onClick={() => setModalOpen(!modalOpen)}>
                    1. Termin
                  </button>
                </div>
                <p>
                  Während des ersten Beratungsgesprächs geht es nur um eins:
                  Dich! Gemeinsam checken wir Deine gegenwärtige Situation. Du
                  erzählst uns von Deinen Wünschen und Zielen. Du zeigst uns,
                  welche Versicherungsverträge und Sparpläne bereits da sind.
                  Und wir schauen, wie wir Dich bestmöglich unterstützen können.
                </p>
              </div>
            </div>
            <div>
              <div className="text-center-alignment-all">
                <h1>Lehrerberatung Step by Step</h1>
                <div className="button-center-alignment">
                  <button onClick={() => setModalOpen(!modalOpen)}>
                    2. Konzept
                  </button>
                </div>
                <p>
                  Nach dem Gespräch erstellen wir ein maßgeschneidertes
                  Versicherungs- und Vorsorgekonzept, das exakte auf Dich, Deine
                  Situation und Deine Ziele hin ausgerichtet ist. Es bildet die
                  Basis für unser weiteres Vorgehen - und ist der sichere
                  Wegweiser in Deine Zukunft als Lehrer:in.
                </p>
              </div>
            </div>
            <div>
              <div className="text-center-alignment-all">
                <h1>Lehrerberatung Step by Step</h1>
                <div className="button-center-alignment">
                  <button onClick={() => setModalOpen(!modalOpen)}>
                    3. Beratung
                  </button>
                </div>
                <p>
                  Jetzt geht es ans Eingemachte. Wir stellen Dir leicht
                  verständlich und auf Augenhöhe unsere Lösungsstrategien für
                  Dich vor. Du sagst uns, von welchen Optimierungsvorschlägen Du
                  profitieren möchtest und entscheidest Dich in aller Ruhe für
                  eine Deiner individuellen Optionen.
                </p>
              </div>
            </div>
            <div>
              <div className="text-center-alignment-all">
                <h1>Lehrerberatung Step by Step</h1>
                <div className="button-center-alignment">
                  <button onClick={() => setModalOpen(!modalOpen)}>
                    4. Zusammenarbeit
                  </button>
                </div>
                <p>
                  Und jetzt? Kannst Du Dich ganz entspannt zurücklehnen. Wir
                  erledigen alles weitere für Dich - und halten Dich immer
                  up-to-date. Natürlich sind wir bei Fragen oder auch
                  Anpassungswünschen immer für Dich erreichbar. Einfach
                  durchklingeln oder eine kurze Nachricht schreiben – wir melden
                  uns schnellstmöglich!
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      {modalOpen && (
        <ContactModal
          setModalOpen={setModalOpen}
          setModal2Open={setModal2Open}
        />
      )}
      {modal2Open && <SecModal setModal2Open={setModal2Open} />}
    </div>
  );
}
