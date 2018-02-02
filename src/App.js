import React, { Component } from 'react';
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Row,
} from 'reactstrap';
import './App.css';
import StateMachineTable from './components/StateMachineTable';

// finite state machine, and accepted inputs
import { fsm, fsmInputs } from './finitestatemachine';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fsmValue: 'zero',
    };

    this.keyHandler = this.keyHandler.bind(this);
    this.transition = this.transition.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyHandler);
  }

  keyHandler(event) {
    // map esc key to -1 as fsm input
    if (event.which === 27 || event.keyCode === 27) {
      this.transition(-1);
    } else {
      this.transition(event.key);
    }
  }

  transition(input) {
    const nextState = fsm[this.state.fsmValue][input];
    // conditional, in case nextState is undefined
    if (nextState) {
      this.setState({ fsmValue: nextState });
    }
  }

  render() {
    return (
      <Container className="text-center" onKeyPress={this.keyHandler}>
        <Row>
          <Col>
            <h1>
              Current State:<br />
              {this.state.fsmValue}
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>To change state,
            type one of the following inputs:
            </p>
            <code>
              esc, 0, 1, 2
            </code>
            <p>
            Alternatively, click on the corresponding buttons:
            </p>
          </Col>
        </Row>
        <Row onKeyPress={this.keyHandler}>
          <Col>
            <ButtonGroup size="lg">
              {fsmInputs.map(number => (
                <Button
                  key={number}
                  onClick={() => { this.transition(number); }}
                  size="large"
                  outline
                  color="primary"
                  target="#"
                >
                  {number}
                </Button>
              ))}
            </ButtonGroup>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs="12">
            <h2>Table Representation</h2>
            <p>
              This application implements the state machine
              and transitions represented by this table:
            </p>
          </Col>
          <Col xs="12">
            <StateMachineTable />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
