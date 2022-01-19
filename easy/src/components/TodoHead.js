import React, { useState } from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead() {
  const [todos, setTodos] = useState(0);

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const day = now.getDay();

  function getDayOfWeek(day) {
    var week = [
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
      "일요일",
    ];

    var today = week[day];

    return today;
  }

  return (
    <TodoHeadBlock>
      <h1>
        {year}년 {month}월 {date}일
      </h1>
      <p className="day">{getDayOfWeek(day)}</p>
      <p className="tasks-left">할 일 {todos}개 남음</p>
    </TodoHeadBlock>
  );
}

export default TodoHead;
