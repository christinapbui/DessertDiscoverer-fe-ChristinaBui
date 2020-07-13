import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import cupcake from "../assets/img/cupcakes-1-big.jpg";
const LandingPage = () => {
  return (
    <div>
      <Jumbotron fluid className="jumbo" >
        <Container style={{ marginTop: "10rem" }}>
          <img src={cupcake} className="jumbo-img" alt="cupcakes" />
          <div style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)" }}>
            <h1>Saigon Dessert Discoverer</h1>
            <p style={{ maxWidth: "30rem" }}>What are you craving?</p>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default LandingPage;
