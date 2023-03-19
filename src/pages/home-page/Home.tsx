import React from 'react';
import Card from '../../components/card/Card';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Card title="title" description="description" image="/assets/react.svg"></Card>
        <Card title="title" description="description" image="/assets/react.svg"></Card>
        <Card title="title" description="description" image="/assets/react.svg"></Card>
      </div>
    );
  }
}

export default Home;
