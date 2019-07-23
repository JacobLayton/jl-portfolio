import React, { Component } from "react";
import jumbo1 from "../img/jumbo1.jpg";
import jumbo2 from "../img/jumbo2.jpg";
import styled from "styled-components";

class Home extends Component {
  render() {
    return (
      <div>
        <JumbotronWrapper src={jumbo2} alt="jumbotron" />
      </div>
    );
  }
}

export default Home;

const JumbotronWrapper = styled.img`
  width: 100vw;
`;
