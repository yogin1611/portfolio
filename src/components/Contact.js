import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "../App.css"; // Importing App.css for styling

export const Contact = () => {
  const [dialogMessage, setDialogMessage] = useState(""); // State for dialog message
                                      
  function Submit(e) {
    e.preventDefault(); // Prevents the default form submission behavior
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbzFzT08P_ZqMhtIzXMt2Pv-odB1zCOElNiPzgvmbRJ2GKuNGswjpER5ETtqEiNZGLQHlw/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Show a dialog message
        setDialogMessage("Submitted to Heerath!");
        // Refresh the page after a short delay
        setTimeout(() => window.location.reload(), 2000);
      })
      .catch((error) => {
        console.log(error);
        // Show a dialog message for errors
        setDialogMessage("Submitted to Heerath!");
        // Refresh the page after a short delay
        setTimeout(() => window.location.reload(), 1000);
      });
  }

  return (
    <div id="contact" className="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>Contact Me</h1>
                  <h2></h2>
                  <form className="form" onSubmit={(e) => Submit(e)}>
                    <input placeholder="Your Name" name="Name" type="text" />
                    <input placeholder="Your Email" name="Email" type="text" />
                    <input placeholder="Your Message" name="Message" type="text" />
                    <button type="submit">Send</button>
                  </form>
                  {dialogMessage && (
                    <div className="dialog-box">
                      {dialogMessage}
                    </div>
                  )}
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </div>
  );
};