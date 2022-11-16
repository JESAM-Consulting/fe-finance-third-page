import React, { useState } from "react";
import "./unserSection.scss";
import Icon1 from "../../../assets/icons/Icon Krankenversicherung 1.svg";
import Icon2 from "../../../assets/icons/Icon Dienstunf. 1.svg";
import Icon3 from "../../../assets/icons/Icon Diensthapftpflicht 1.svg";
import Icon4 from "../../../assets/icons/Icon Pension.svg";
import Icon5 from "../../../assets/icons/chat.svg";
import ContactModal from "../../ContactModal";
import SecModal from "../../secModal";
import ContactModalNew from "../../ContactModalNew";
export default function UnserSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <div>
      <div className="unser-section-all-content-alignment">
        <div className="container-md-6">
          <div className="page-title">
            <h1>Unser Fokus: Deine Zukunft</h1>
          </div>
          <div className="grid">
            <div className="grid-items">
              <div className="icon-alignment">
                <img src={Icon1} alt="Icon1" />
              </div>
              <h2>Private Krankenversicherung</h2>
              <div className="hover-grid-box">
                <div>
                  <h4>Private Krankenversicherung</h4>
                  <p>
                    Für verbeamtete Lehrkräfte lohnt sich der Abschluss einer
                    privaten Krankenversicherung. Durch die sog. Beihilfe wird
                    Dein Anteil für die PKV vergleichs-weise niedrig. Wir
                    beraten Dich gerne zu den passenden PKV-Tarifen – im Sinne
                    Deiner Gesundheit und einer optimalem Versorgung.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-items">
              <div className="icon-alignment">
                <img src={Icon2} alt="Icon2" />
              </div>
              <h2>Dienstunfähigkeits- versicherung</h2>
              <div className="hover-grid-box">
                <div>
                  <h4>Dienstunfähigkeits- versicherung</h4>
                  <p>
                    Wenn Du ganz frisch in das Beamtenleben startest, hast Du
                    noch keine Absicherung für den Fall einer vorübergehenden
                    oder langfristigen Dienstunfähigkeit. Wir helfen Dir dabei,
                    Dich für den Fall der Fälle perfekt abzu-sichern. So kannst
                    Du nachts ruhig schlafen und sorgenfrei in die Zukunft
                    blicken.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-items">
              <div className="icon-alignment">
                <img src={Icon3} alt="Icon3" />
              </div>
              <h2>Diensthaftpflicht</h2>
              <div className="hover-grid-box">
                <div>
                  <h4>Diensthaftpflicht</h4>
                  <p>
                    Sollte es während Deiner Arbeitszeit zu einem Schaden
                    kommen, den Du verschuldet hast, bist Du im Regelfall durch
                    Deine Schule abgesichert. Das trifft aber nicht immer zu.
                    Die Lösung: Eine maßgeschneiderte Diensthaftpflicht. Sie
                    haftet, solltest Du einmal fahrlässig gehandelt haben.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-items">
              <div className="icon-alignment">
                <img src={Icon4} alt="Icon4" />
              </div>
              <h2>
                Ruhestandsplanung <br />& Altersvorsorge
              </h2>
              <div className="hover-grid-box">
                <div>
                  <h4>Ruhestandsplanung & Altersvorsorge</h4>
                  <p>
                    Noch bist Du jung. Dennoch ist es nie zu früh, für das Alter
                    vorzusorgen. Auch wenn die Beamtenpensionen derzeit noch
                    recht hoch sind, kann sich das in den kommenden Jahren und
                    Jahrzehnten ändern. Wir zeigen Dir, wie Du Deinen
                    Lebensstandard bis ins hohe Alter hältst.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="button-center-alignment">
            <button onClick={() => setModalOpen(!modalOpen)}>
              <img src={Icon5} alt="Icon5" />
              <span>Kostenfreies Erstgespräch vereinbaren</span>
            </button>
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
