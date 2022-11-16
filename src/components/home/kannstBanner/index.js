import React, { useState } from "react";
import "./kannstBanner.scss";
import Icon1 from "../../../assets/icons/icon.svg";
import ContactModal from "../../ContactModal";
import SecModal from "../../secModal";
import ContactModalNew from "../../ContactModalNew";
export default function KannstBanner() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <div>
      <div className="kannst-banner-alignment">
        <div className="container-md-5">
          <h5>
            Du kannst nicht früh genug die Weichen für Deine Zukunft stellen.
          </h5>
          <div className="button-center-alignment">
            <button onClick={() => setModalOpen(!modalOpen)}>
              <img src={Icon1} alt="Icon1" />
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
