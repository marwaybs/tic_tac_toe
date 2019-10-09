import React from 'react';
import styled from 'styled-components'


const BoardContainer = styled.div`
  background: white;
  height: 75vh;
  width: 75vw;
  display: flex;
  flex-wrap: wrap;
  margin:auto;
`;


const Border = styled.div`
  background: white;
  height: 25vh;
  width: 25vw;
`;

const Empty = styled.div`
  background: white;
`;

const Circle = styled.div`
  height: 20vh;
  width: 20vw;
  background-color: black;
  border-radius: 50%;
`;

const Triangle = styled.div`
	width: 0;
	height: 0;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-bottom: 75px solid #555;
`;


export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardState: 
      [
      'circle', 'empty', 'empty',
      'empty', 'empty', 'empty',
      'empty', 'triangle', 'empty',
    ],
    winner: null,
    triangleTurn: true
  };
  }

  handleMove = (key) =>  {
    if (!this.state.winner) {
      const oldState = this.state.boardState;
      const triangleTurn = this.state.triangleTurn;
      if (oldState[key] === 'empty') {
        var newState = oldState
        newState[key] = triangleTurn ? 'triangle' : 'circle'
        this.setState({boardState: newState})
      } else {
        console.log("Not empty");
      }
      this.setState({triangleTurn: !triangleTurn})
      this.CheckWin();
    }
  }

  CheckWin = () => {
    const boardState = this.state.boardState;
    //top row
    if ((boardState[0] !== 'empty' && boardState[0] === boardState[1] && boardState[0] === boardState[2])) {
      this.setState({winner: boardState[0]});
    //right row
    } else if ((boardState[2] !== 'empty' && boardState[2] === boardState[5] && boardState[2] === boardState[8])) {
      this.setState({winner: boardState[2]});
      //bottom row
    }else if ((boardState[6] !== 'empty' && boardState[6] === boardState[7] && boardState[6] === boardState[8])) {
      this.setState({winner: boardState[6]});
      //left row
    }else if ((boardState[0] !== 'empty' && boardState[0] === boardState[3] && boardState[0] === boardState[6])) {
      this.setState({winner: boardState[0]});
      //middle vertical roow
    }else if ((boardState[1] !== 'empty' && boardState[1] === boardState[4] && boardState[1] === boardState[7])) {
      this.setState({winner: boardState[1]});
      //horizontal vertcial row
    }else if ((boardState[3] !== 'empty' && boardState[3] === boardState[4] && boardState[3] === boardState[5])) {
      this.setState({winner: boardState[3]});
      //left to right diagonal row
    }else if ((boardState[0] !== 'empty' && boardState[0] === boardState[4] && boardState[0] === boardState[8])) {
      this.setState({winner: boardState[0]});
      //right to left diagonal row
    }else if ((boardState[2] !== 'empty' && boardState[2] === boardState[4] && boardState[2] === boardState[6])) {
      this.setState({winner: boardState[2]});
    }
  }

  computerMove = () => {
    const boardState = this.state.boardState;
  }

  checkForRow = (boardState) => {
    for (var i = 0; i > boardState.length; i++) {
      //CQ = square to be checked
      const CQ = boardState[i]
      //check above
      if (0 < (i - 3) < 8 ){
        
      }
    }
  }

  handleSubmit  = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  RenderBox = (box) => {
    switch(box) {
      case 'circle':
        return <Circle />
      case 'triangle':
        return <Triangle />
      default:
        return <Empty />
    }
  }

  render() {
    const {boardState, winner}  = this.state;
    console.log('boardstate', boardState);
    this.boxes = boardState.map((box, key) =>
      <Border key={key} onClick={() => this.handleMove(key)}>
        {this.RenderBox(box)}
      </Border >
    );
    return (
      <BoardContainer>
        {this.boxes}
      </BoardContainer>
    );
  }
}