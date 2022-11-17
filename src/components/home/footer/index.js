import React, { useState } from "react";
import "./footer.scss";
import MailIcon from "../../../assets/icons/noun_Mail_2181226 1.svg";
import Icon1 from "../../../assets/icons/Vector (2).svg";
import Icon11 from "../../../assets/icons/contact.svg";
import Group262 from "../../../assets/icons/Group 262.svg";
import ContactModal from "../../ContactModal";
import SecModal from "../../secModal";
import ContactModalNew from "../../ContactModalNew";
export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <div>
      <div className="footer-banner">
        <div className="icon-right-alignment">
          <img src={MailIcon} alt="MailIcon" />
        </div>
        <div className="container-md-2">
          <div className="text-style">
            <h1>
              Zeit, etwas zu bewegen. <br /> Nimm jetzt Kontakt mit uns auf!
            </h1>
            <div className="button-center-alignment">
              <button onClick={() => setModalOpen(!modalOpen)}>
                <img src={Icon1} alt="Icon1" />
                <span>Kontakt</span>
              </button>
            </div>
          </div>
        </div>
        <div
          className="contact-icon-alignment"
          onClick={() => setModalOpen(!modalOpen)}
        >
          <img src={Icon11} alt="Icon11" />
        </div>
      </div>
      <div className="sub-footer-content-alignment">
        <div className="container-lg-2">
          <div className="content-alignment">
            <div>
              <h2>FE Finance GmbH</h2>
            </div>
            <div className="menu-alignment">
              <div className="menyu">
                <a>FAQ</a>
                <a
                  href="https://www.fe-finance.de/datenschutzerklarung"
                  target="_blank"
                >
                  Datenschutz
                </a>
                <a href="https://www.fe-finance.de/impressum" target="_blank">
                  Impressum
                </a>
              </div>
              <div>
                <a href="#home">
                  <img src={Group262} alt="Group262" />
                </a>
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
