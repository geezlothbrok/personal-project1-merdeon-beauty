import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Card.css";

function CardItems(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="Col md={3} mdPull={3} xs={6} xsHidden md={6} xsOffset={6} mdPush={6}">
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src={props.src}
            />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>
                <h5>{props.text}</h5>
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>

        {/* <div className="Col md={3} mdPull={3} xs={6} xsHidden md={6} xsOffset={16} mdPush={16}">
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src="images/wilfried-vowoto-2X8GjaQ6T68-unsplash.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="Col md={3} mdPull={3} xs={6} xsHidden md={6} xsOffset={16} mdPush={16}">
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src="images/wilfried-vowoto-2X8GjaQ6T68-unsplash.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="Col md={3} mdPull={3} xs={6} xsHidden md={6} xsOffset={16} mdPush={16}">
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src="images/wilfried-vowoto-2X8GjaQ6T68-unsplash.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="Col md={4} mdPull={4} xs={6} xsHidden md={6} xsOffset={16} mdPush={16}">
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src="images/wilfried-vowoto-2X8GjaQ6T68-unsplash.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="Col md={4} mdPull={4} xs={6} xsHidden md={6} xsOffset={16} mdPush={16}">
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src="images/wilfried-vowoto-2X8GjaQ6T68-unsplash.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="Col md={4} mdPull={4} xs={6} xsHidden md={6} xsOffset={16} mdPush={16}">
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src="images/wilfried-vowoto-2X8GjaQ6T68-unsplash.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div> */}
      </div>
    </div>
  );
}

export default CardItems;
