import React from "react";
import "./deinSection.scss";
import DeinImage from "../../../assets/images/dein.webp";
import CheckIcon from "../../../assets/icons/check.svg";
export default function DeinSection() {
  return (
    <div>
      <div className="dein-section-content-alignment">
        <div className="container-md-3">
          <div className="grid">
            <div className="grid-items">
              <div className="image-style">
                <img src={DeinImage} alt="DeinImage" />
              </div>
            </div>
            <div className="grid-items">
              <h2>Dein Mehrwert: Gelassen in die Zukunft blicken</h2>
              <h3>
                An der Universität hast Du viel gelernt. Aber bei den Themen
                Vorsorge und Versicherungen sieht es auf dem Lehrplan mau aus.
                Doch jetzt sind wir da und helfen Dir dabei, vor, während und
                nach dem Referendariat die richtigen Entscheidungen zu treffen.
              </h3>
              <div className="icon-text-all-alignment">
                <div className="icon-text-grid">
                  <div className="icon-text-grid-items">
                    <img src={CheckIcon} alt="CheckIcon" />
                  </div>
                  <div className="icon-text-grid-items">
                    <span>
                      Individuelle Beratung für Student:innen, Referendar:innen
                      und Lehrer:innen
                    </span>
                  </div>
                </div>
                <div className="icon-text-grid">
                  <div className="icon-text-grid-items">
                    <img src={CheckIcon} alt="CheckIcon" />
                  </div>
                  <div className="icon-text-grid-items">
                    <span>
                      Maßgeschneiderte Versicherungen und Sparlösungen für
                      Deinen Lifestyle
                    </span>
                  </div>
                </div>
                <div className="icon-text-grid">
                  <div className="icon-text-grid-items">
                    <img src={CheckIcon} alt="CheckIcon" />
                  </div>
                  <div className="icon-text-grid-items">
                    <span>
                      Unabhängige Lösungen ohne Bindung an konkrete
                      Versicherungs-Gesellschaften
                    </span>
                  </div>
                </div>
                <div className="icon-text-grid">
                  <div className="icon-text-grid-items">
                    <img src={CheckIcon} alt="CheckIcon" />
                  </div>
                  <div className="icon-text-grid-items">
                    <span>
                      Smarte Empfehlungen, die Dir eine Menge Geld einsparen
                    </span>
                  </div>
                </div>
                <div className="icon-text-grid">
                  <div className="icon-text-grid-items">
                    <img src={CheckIcon} alt="CheckIcon" />
                  </div>
                  <div className="icon-text-grid-items">
                    <span>
                      Echte Expertise von Profis, die sich auf die Absicherung
                      von Lehrkräften spezialisiert haben
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
