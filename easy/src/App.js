import "./App.css";
import React, { useState } from "react";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "헬로우 모토",
    "아이엠그루트",
  ]);

  let [num, numPlus] = useState(0);

  let posts = "강남 고기 맛집";

  function 제목바꾸기() {
    var newArray = [...글제목];
    newArray[0] = "여자 코트 추천";
    글제목변경(newArray);
  }

  function 제목정렬하기() {
    var newArray2 = [...글제목];
    글제목변경(newArray2.sort());
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>
          {글제목[0]}{" "}
          <span
            onClick={() => {
              numPlus((num += 1));
            }}
          >
            👍
          </span>{" "}
          {num}
        </h3>
        <p>2월 17일 방문</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 17일 방문</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>2월 17일 방문</p>
        <hr />
      </div>
      <div className="btn">
        <button
          onClick={() => {
            // 글제목변경(["여자 코트 추천", "헬로우 모토", "아이엠그루트"]);
            제목바꾸기();
          }}
        >
          킬러퀸 바이츠 더 더스트
        </button>
      </div>
      <div className="btn">
        <button
          onClick={() => {
            제목정렬하기();
          }}
        >
          킬러퀸 제 1 폭탄
        </button>
      </div>
    </div>
  );
}

export default App;
