import React from 'react';

import './Card.css';

type CardProps = {
  title: string;
  image?: string;
  description: string;
};

type CardState = {
  isHovered: boolean;
};

class Card extends React.Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);
    this.state = { isHovered: false };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({ isHovered: true });
  }

  handleMouseLeave() {
    this.setState({ isHovered: false });
  }

  render() {
    const { title, image, description } = this.props;
    const { isHovered } = this.state;

    return (
      <div
        className="card"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
          {isHovered && (
            <button className="card-button" onClick={() => alert('Button clicked!')}>
              Click me!
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Card;
