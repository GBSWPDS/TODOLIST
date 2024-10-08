import { useRef, useState } from "react";
import "./TodoEditor.css";

const TodoEditor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const [date, setDate] = useState("2024-10-16");
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const onSubmit = () => {
    if (!content || !date) {
      inputRef.current.focus();
      return;
    }
    onCreate(content, date);
    setContent("");
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="TodoEditor">
      <h4>중간고사 과목 리스트 작성하기</h4>
      <select value={date} onChange={onChangeDate}>
        <option value="2024-10-16">10월 16일</option>
        <option value="2024-10-17">10월 17일</option>
      </select>
      <div className="editor_wrapper">
        <input
          type="text"
          ref={inputRef}
          placeholder="중간고사 과목 적기 ex) 국어, 통합사회"
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
        />
        <button className="addBtn" onClick={onSubmit}>
          추가
        </button>
      </div>
    </div>
  );
};

export default TodoEditor;
