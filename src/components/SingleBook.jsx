import { Card } from "react-bootstrap";

import { Component } from "react";

// const SingleBook = (props) => (
//   <Card>
//     <Card className="book-cover d-flex flex-column">
//       <Card.Img variant="top" src={props.img} />
//       <Card.Body>
//         <Card.Title>{props.title}</Card.Title>
//       </Card.Body>
//     </Card>
//   </Card>
// );

// export default SingleBook;
class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Card className="book-cover d-flex flex-column">
        <Card.Img
          variant="top"
          src={this.props.img}
          onClick={(event) => {
            this.setState(
              selected
                ? event.target.className.add("border border-transparent")
                : event.target.className.add("border border-danger")
            );
          }}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}
export default SingleBook;
