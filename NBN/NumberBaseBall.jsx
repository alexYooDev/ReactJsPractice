import React, { Component } from "react";

function getNumbers() {
  // 숫자 네 개를 중복없이 랜덤하게 뽑는 함수
}

class NumberBaseBall {
  state = {
    result: "",
    value: "",
    answer: getNumbers(),
    tries: [],
  };
  //사용자 정의 함수는 화살표 함수로 정의 : 컨스트럭터를 다시 쓰지 않기 위해
  onSubmitForm = () => {};

  onChangeInput = () => {};

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            maxLength={4}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {["like", "like", "like", "like", "like"].map(() => {
            return <li>like</li>;
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseBall;
