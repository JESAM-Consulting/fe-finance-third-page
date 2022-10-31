import React, { useState } from "react";
import "./unserSection.scss";
import Icon1 from "../../../assets/icons/Icon Krankenversicherung 1.svg";
import Icon2 from "../../../assets/icons/Icon Dienstunf. 1.svg";
import Icon3 from "../../../assets/icons/Icon Diensthapftpflicht 1.svg";
import Icon4 from "../../../assets/icons/Icon Pension.svg";
import Icon5 from "../../../assets/icons/chat.svg";
import ContactModal from "../../ContactModal";
import SecModal from "../../secModal";
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
            </div>
            <div className="grid-items">
              <div className="icon-alignment">
                <img src={Icon2} alt="Icon2" />
              </div>
              <h2>Dienstunfähigkeits- versicherung</h2>
            </div>
            <div className="grid-items">
              <div className="icon-alignment">
                <img src={Icon3} alt="Icon3" />
              </div>
              <h2>Diensthaftpflicht</h2>
            </div>
            <div className="grid-items">
              <div className="icon-alignment">
                <img src={Icon4} alt="Icon4" />
              </div>
              <h2>
                Ruhestandsplanung <br />& Altersvorsorge
              </h2>
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
        <ContactModal
          setModalOpen={setModalOpen}
          setModal2Open={setModal2Open}
        />
      )}
      {modal2Open && <SecModal setModal2Open={setModal2Open} />}
    </div>
  );
}
