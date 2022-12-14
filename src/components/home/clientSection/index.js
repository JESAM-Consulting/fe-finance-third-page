import React, { useState } from "react";
import Slider from "react-slick";
import "./clientSection.scss";
import RightIcon from "../../../assets/icons/new-right.svg";
import LeftIcon from "../../../assets/icons/new-left.svg";
import ContactModal from "../../ContactModal";
import SecModal from "../../secModal";
import ContactModalNew from "../../ContactModalNew";

export default function ClientSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [slideIndexNext, setSlideIndexNext] = useState(0);
  const [slideIndexPrew, setSlideIndexPrew] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      console.log("oldIndex, newIndex", oldIndex, newIndex);
      setSlideIndexNext(newIndex);
      setSlideIndexPrew(oldIndex);
    },
  };

  console.log("slideIndexPrew");

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      slideIndexNext < 3 && (
        <div
          onClick={onClick}
          className="button-right-side-arrow-alignment-for-page"
        >
          <img src={RightIcon} alt="RightIcon" />
        </div>
      )
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      slideIndexNext > 0 && (
        <div
          onClick={onClick}
          className="button-left-side-arrow-alignment-for-page"
        >
          <img src={LeftIcon} alt="LeftIcon" />
        </div>
      )
    );
  }
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
                  W??hrend des ersten Beratungsgespr??chs geht es nur um eins:
                  Dich! Gemeinsam checken wir Deine gegenw??rtige Situation. Du
                  erz??hlst uns von Deinen W??nschen und Zielen. Du zeigst uns,
                  welche Versicherungsvertr??ge und Sparpl??ne bereits da sind.
                  Und wir schauen, wie wir Dich bestm??glich unterst??tzen k??nnen.
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
                  Nach dem Gespr??ch erstellen wir ein ma??geschneidertes
                  Versicherungs- und Vorsorgekonzept, das exakte auf Dich, Deine
                  Situation und Deine Ziele hin ausgerichtet ist. Es bildet die
                  Basis f??r unser weiteres Vorgehen - und ist der sichere
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
                  verst??ndlich und auf Augenh??he unsere L??sungsstrategien f??r
                  Dich vor. Du sagst uns, von welchen Optimierungsvorschl??gen Du
                  profitieren m??chtest und entscheidest Dich in aller Ruhe f??r
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
                  Und jetzt? Kannst Du Dich ganz entspannt zur??cklehnen. Wir
                  erledigen alles weitere f??r Dich - und halten Dich immer
                  up-to-date. Nat??rlich sind wir bei Fragen oder auch
                  Anpassungsw??nschen immer f??r Dich erreichbar. Einfach
                  durchklingeln oder eine kurze Nachricht schreiben ??? wir melden
                  uns schnellstm??glich!
                </p>
              </div>
            </div>
          </Slider>
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
