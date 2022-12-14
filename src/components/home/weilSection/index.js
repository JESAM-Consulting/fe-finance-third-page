import React, { useState } from "react";
import "./weilSection.scss";
import HeaderBanner from "../../../assets/images/header-banner.svg";
import HeaderBannerM from "../../../assets/images/new000.png";
import LayoutBanner from "../../../assets/images/layout.png";
import ChatIcon from "../../../assets/icons/chat.svg";
import ContactModal from "../../ContactModal";
import SecModal from "../../secModal";
import ContactModalNew from "../../ContactModalNew";
export default function WeilSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <div>
      <div className="weil-section-content-alignment">
        <div className="container-md">
          <div className="text-style">
            <h1>Weil Du zählst!</h1>
            <p>
              „Beamte haben es gut“ - das ist in Deutschland geltende Meinung.
              Doch sind wir ehrlich: Bevor man verbeamtet ist, muss man durch
              ein hartes Studium, das Staatsexamen bestehen und sich dem
              fordernden Referendariat stellen. In dieser Zeit ist Lernen
              oberstes Gebot. Zukunft- und Versicherungsfragen treten in den
              Hintergrund. Dabei brauchst Du als Studierende:r oder
              Referendar:in
              <br /> <b onClick={() => setModalOpen(!modalOpen)}>
                GENAU JETZT
              </b>{" "}
              eine individuelle Beratung. Eine Beratung durch ein empathisches
              Expertenteam, das sich auf die Absicherung von angehenden oder
              frischgebackenen Lehrer:innen spezialisiert hat.
            </p>
            <h6>Kurz gesagt: Du brauchst uns – den Financial Guide.</h6>
            <div className="sec-section-button-alignment">
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
        </div>
        <div className="container-md-2">
          <div className="header-banner-content-alignment">
            <img src={HeaderBanner} alt="HeaderBanner" />
            <img src={HeaderBannerM} alt="HeaderBannerM" />
          </div>
        </div>
        <div className="main-layout-banner">
          <div className="image-style">
            <img src={LayoutBanner} alt="LayoutBanner" />
          </div>
          <div className="container-md-2">
            <div className="image-related-button-alignment">
              <button onClick={() => setModalOpen(!modalOpen)}>
                <img src={ChatIcon} alt="ChatIcon" />
                <span>Kostenfreies Erstgespräch vereinbaren</span>
              </button>
            </div>
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
