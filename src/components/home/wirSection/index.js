import React, { useState } from "react";

import "./wirSection.scss";
import Men from "../../../assets/images/men.webp";
import Men1 from "../../../assets/images/men1.webp";
import ChatIcon from "../../../assets/icons/chat.svg";
import Icon1 from "../../../assets/icons/Pfad 794.svg";
import Icon2 from "../../../assets/icons/cil_star.svg";
import Icon32 from "../../../assets/icons/cil_star (1).svg";
import Icon321 from "../../../assets/icons/Pfad 793 1.svg";
import Slider from "react-slick";
import ContactModal from "../../ContactModal";
import SecModal from "../../secModal";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className="right-alignment">
      <svg
        width="18"
        height="35"
        viewBox="0 0 18 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 33.5L17 17.5L0.999997 1.5"
          stroke="#505050"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="left-alignment" onClick={onClick}>
      <svg
        width="18"
        height="35"
        viewBox="0 0 18 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 33.5L1 17.5L17 1.5"
          stroke="#505050"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

export default function WirSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <div className="wir-section-all-contnet-alignment">
        <div className="container-md-2">
          <div className="relativ-section">
            <h2>Wir sind für Dich da!</h2>
            <div className="two-image-center-alignment">
              <div className="card">
                <img src={Men} alt="Men" />
              </div>
              <div className="card">
                <img src={Men1} alt="Men1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="new-light-banner">
        <div className="container-md-2">
          <div className="button-center-alignment">
            <button onClick={() => setModalOpen(!modalOpen)}>
              <img src={ChatIcon} alt="ChatIcon" />
              <span>Kostenfreies Erstgespräch vereinbaren</span>
            </button>
          </div>
        </div>
        <div className="container-md-7">
          <div className="right-image-alignment">
            <img src={Icon1} alt="Icon1" />
          </div>
          <Slider {...settings}>
            <div>
              <div className="slider-section-content">
                <h2>Sehr freundliche Beratung</h2>
                <div className="rating-alignment">
                  <img src={Icon2} alt="Icon2" />
                  <img src={Icon2} alt="Icon2" />
                  <img src={Icon2} alt="Icon2" />
                  <img src={Icon2} alt="Icon2" />
                  <img src={Icon32} alt="Icon32" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                </p>
              </div>
            </div>
            <div>
              <div className="slider-section-content">
                <h2>Sehr freundliche Beratung</h2>
                <div className="rating-alignment">
                  <img src={Icon2} alt="Icon2" />
                  <img src={Icon2} alt="Icon2" />
                  <img src={Icon2} alt="Icon2" />
                  <img src={Icon2} alt="Icon2" />
                  <img src={Icon32} alt="Icon32" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                </p>
              </div>
            </div>
            <div>
              <div className="slider-section-content">
                <h2>Sehr freundliche Beratung</h2>
                <div className="rating-alignment">
                  <img src={Icon2} alt="Icon2" />
                  <img src={Icon2} alt="Icon2" />
                  <img src={Icon2} alt="Icon2" />
                  <img src={Icon2} alt="Icon2" />
                  <img src={Icon32} alt="Icon32" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                </p>
              </div>
            </div>
          </Slider>
          <div className="left-image">
            <img src={Icon321} alt="Icon321" />
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
