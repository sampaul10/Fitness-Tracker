import React from "react";
import Card from "react-bootstrap/Card";

const Footer = () => {
  const links = [
    {
      name: "My Food Diary",
      url: "https://www.myfooddiary.com/",
    },
    {
      name: "Running Training Plans",
      url: "https://www.nike.com/running/training-plans",
    },
  ];

  return (
    <footer className="footer">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Nike Running</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Link to Nike.com
          </Card.Text>
          <Card.Link href="https://www.nike.com/running/training-plans">
            Nike Running Training Plan
          </Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Nike Running</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Link to Nike.com
          </Card.Text>
          <Card.Link href="https://www.nike.com/running/training-plans">
            Nike Running Training Plan
          </Card.Link>
        </Card.Body>
      </Card>
    </footer>
  );
};

export default Footer;
