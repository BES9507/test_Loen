import React from "react";
import "./TodoTemplate.scss";
import { Button } from "@material-ui/core";
import TodoInsert from "./TodoInsert";

const TodoTemplate = ({ onClickPick }) => {
  return (
    <div>
      <div className="app-title">Q.질문</div>
      <TodoInsert />
      <Button onClick={onClickPick} variant="outlined" color="primary">
        말씀뽑기
      </Button>
    </div>
  );
};

export default TodoTemplate;
