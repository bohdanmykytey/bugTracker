import { React, useState } from "react";
import { Carousel, CarouselItem, Jumbotron, Button, Container, Row, Col, Image } from "react-bootstrap";

const Landingpage = () => {
  const [index, setIndex] = useState();

  const handleSelect = (selectedIndex, e) => [setIndex(selectedIndex)];

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <CarouselItem>
          <img
            className="d-block w-100"
            src="https://images.iconfu.com/sets/20-neon/icons/mail_bug_icon.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Find Bugs</h3>
            <p>Found a bug? Report it and add it to the teams to-do list</p>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
          <img
            className="d-block w-100"
            src="https://images.iconfu.com/sets/20-neon/icons/target_icon.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Report</h3>
            <p>Set a target to fix the issue</p>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
          <img
            className="d-block w-100"
            src="https://images.iconfu.com/sets/20-neon/icons/debug_icon.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Debug</h3>
            <p>Resolve the issue</p>
          </Carousel.Caption>
        </CarouselItem>
      </Carousel>

      <Jumbotron>
        <h1>WHY USE US?</h1>
        <p>
          This is a ticketing and progress tracker for developers to find, submit and debug code. 
          Built from the ground up using preprietary techniques, utilizing the latest gratest Technologies 
          such as:
          React Hooks,
          Microsoft SQL Server,
          and Auth0 for security, authentication and Admin role privileges to the correct staff members
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>

    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://thedigitalprojectmanager.com/wp-content/uploads/2018/08/best-project-management-agile-tools-800x368.png" roundedCircle />
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://i.pinimg.com/originals/70/24/24/702424958ce4c307780ba761ea43d229.jpg" roundedCircle />
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Landingpage;
