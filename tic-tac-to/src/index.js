import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* Board 컴포넌트에 따라 제어되는 컴포넌트 (Controlled) */
class Square extends Component {
  render() {
    return (
      <button className='square' onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

/* Board의 State값이 변경될 때마다 
자식인 Square는 자동으로 리렌더링 된다. */
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }
  handleClick = (i) => {
    /* squares : {null*9} 로 초기화된 스테이트를 복사하는 코드 => 객체의 불변성 유지*/
    const squares = this.state.squares.slice();
    console.log(squares);

    /* squares state의 각 idx 값에 'X'를 대입한다. */
    squares[i] = 'X';
    this.setState({ squares: squares });
  };
  renderSquare(i) {
    return (
      <Square
        /* value prop 에 선언된 squares[i] 값을 전달한다. */
        value={this.state.squares[i]}
        /* handleClick의 인자로 i 인덱스 값을 넣어 Props로 전달한다 */
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className='status'>{status}</div>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className='game'>
        <div className='game-board'>
          <Board />
        </div>
        <div className='game-info'>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
