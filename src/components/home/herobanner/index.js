import React, { useState } from "react";
import "./herobanner.scss";
import DownIcon from "../../../assets/icons/down.svg";
import RightIcon from "../../../assets/icons/right.svg";
import FEConstruction from "../../../assets/images/FE-Construction.svg";
import Xmld from "../../../assets/icons/XMLID_1_.svg";
import Icon1 from "../../../assets/icons/123.svg";
import SecModal from "../../secModal";
import ContactModal from "../../ContactModal";
import ContactModalNew from "../../ContactModalNew";
export default function Herobanner() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <div>
      <div className="home-page-hero-banner" id="home">
        <div className="container-lg">
          <div className="hero-header-alignment">
            <div>
              <button onClick={() => setModalOpen(!modalOpen)}>
                Jetzt für ein kostenfreies <br />
                Beratungsgepräch anmelden
              </button>
            </div>
            <div>
              <img src={FEConstruction} alt="FEConstruction" />
            </div>
          </div>
        </div>
        <div className="hero-content-text-right-alignment">
          <div className="hero-content-text">
            <h1>Maßgeschneiderte Versicherungen & Finanzen für Lehrkräfte</h1>
            <p>
              Professionelle Beratung zu Versicherungs- und Finanzfragen durch
              Menschen, die Dich und Deine Situation als Lehrer:in verstehen.
            </p>
            <div className="button-style">
              <button onClick={() => setModalOpen(!modalOpen)}>
                <span>
                  Jetzt für ein kostenfreies Beratungsgepräch <br />
                  in wenigen Sekunden anmelden
                </span>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18.5L15 12.5L9 6.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="content-bottom-alignment">
          <span>verbraucherschutzkonform nach</span>
          <div>
            <img src={Xmld} alt="Xmld" />
          </div>
        </div>
      </div>
      <div className="container-lg">
        <div className="mobile-data-show">
          <p>
            Professionelle Beratung zu Versicherungs- und Finanzfragen durch
            Menschen, die Dich und Deine Situation als Lehrer:in verstehen.
          </p>
          <div className="button-design">
            <button onClick={() => setModalOpen(!modalOpen)}>
              <span>
                Jetzt für ein kostenfreies Beratungsgepräch in wenigen Sekunden
                anmelden
              </span>
              <img src={Icon1} alt="Icon1" />
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
