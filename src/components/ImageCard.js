import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };
    //used to access the DOM element
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    //need to have event load in order to be able to access the values of the elements after they render to the screen
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        {/* ref used to access the DOM element */}
        <img src={urls.regular} alt={description} ref={this.imageRef} />
      </div>
    );
  }
}

export default ImageCard;
