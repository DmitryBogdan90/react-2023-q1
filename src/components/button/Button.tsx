import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  link: string;
  text: React.ReactNode;
};

class Button extends React.Component<Props> {
  render() {
    return (
      <Link className="button" to={this.props.link}>
        {this.props.text}
      </Link>
    );
  }
}

export default Button;
