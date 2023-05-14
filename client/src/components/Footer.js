import React from "react";
import Card from "react-bootstrap/Card";
import '../../src/App.css';
import food_diary from '../assets/images/cardlink/food_diary.PNG';
import running_training from '../assets/images/cardlink/running_training.PNG';
import best_exercise from '../assets/images/cardlink/best_exercise.PNG';

const Footer = () => {
  const links = [
    {
      name: "My Food Diary",
      url: "https://www.myfooddiary.com/",
      image: food_diary
    },
    {
      name: "Running Training Plans",
      url: "https://www.nike.com/running/training-plans",
      image: running_training
    },
    {
      name: "Best Exercises for Health and Weight Loss",
      url: "https://www.helpguide.org/articles/healthy-living/what-are-the-best-exercises-for-me.htm",
      image: best_exercise 
    }
  ];

  return (
    <footer className="footer">
      <h2 className="footer-header">Helpful Links</h2>
      <div className="training-links">
        {links.map((link, index) => (
          <Card className="cardlink" key={index} style={{ width: "18rem" }}>
            <Card.Img variant="top" className="card-image" src={link.image} alt={link.name} />
            <Card.Body>
              <Card.Title>
                <Card.Link className="cardlink-name" href={link.url}>
                  {link.name}
                </Card.Link>
              </Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>

    </footer>
  );
};

export default Footer;

