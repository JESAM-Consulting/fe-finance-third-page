import React, { useState } from "react";

import "./newsSection.scss";
import CardImage from "../../../assets/images/card.jpg";
import CardImage1 from "../../../assets/images/card1.jpg";
import Icon from "../../../assets/icons/iconoir_nav-arrow-right.svg";
import ContactModal from "../../ContactModal";
import SecModal from "../../secModal";
import ContactModalNew from "../../ContactModalNew";
export default function NewsSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <div>
      <div className="news-section-all-content-alignment">
        <div className="container-md-2">
          <div className="content-alignment-center">
            <div className="box">
              <div className="card-image">
                <img src={CardImage} alt="CardImage" />
              </div>
              <div className="card-details">
                <h2>
                  {" "}
                  Sorgenfrei ins Referendariat - unser Webinar für Lehrer:innen
                </h2>
                <p>
                  Jeder braucht einmal einen Schutzengel. Wie gut, dass man
                  vieles aber auch selbst in der Hand hat. Nimm’ an unserem
                  Webinar für Lehramts-Studierende, Referendar:innen und
                  Lehrer:innen teil – und stelle jetzt die Weichen für eine
                  sorgenfreie Zukunft.
                </p>
                <button onClick={() => setModalOpen(!modalOpen)}>
                  <img src={Icon} alt="Icon" />
                  <span>WEBINAR ANMELDUNG</span>
                </button>
              </div>
            </div>
            <div className="box">
              <div className="card-image">
                <img src={CardImage1} alt="CardImage1" />
              </div>
              <div className="card-details">
                <h2 className="line-heiggth">Let’s go digital</h2>
                <p>
                  Digital ist erste Wahl. Zumindest wenn es um Deine
                  Versicherungen und Finanzen geht. Wir halten Dich mit unserer
                  digitalen Makler-App immer auf dem aktuellen Stand. So geht
                  smartes Versicherungsmanagement für Lehrkräfte heute!
                </p>
                <button onClick={() => setModalOpen(!modalOpen)}>
                  <img src={Icon} alt="Icon" />
                  <span>BERATUNGSGESPRÄCH SICHERN</span>
                </button>
              </div>
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
