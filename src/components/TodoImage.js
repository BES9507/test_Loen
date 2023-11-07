import React, { useRef } from "react";
import html2canvas from "html2canvas";
import saveAs from "file-saver";
import "./TodoImage.scss";

const TodoImage = () => {
  const text = "주님, 은섭이가 하나님의 사랑을 느끼고 있는 것 같습니다.\n저번주 목요일 오후에 혼자 로엔에 가서 4시간 동안 성경을 읽었습니다.\n하나님을 향한 은섭이의 마음과 행동이 진실된 것을 보고 저 또한 크게 감명 받았습니다.\n삶의 방향이 항상 주님을 향할 수 있도록 도와주세요. 아멘!"
  const bible = "written by jake 1장 1절"
  const saveRef = useRef()
  
  const handleDownload = async () => {
    if (!saveRef.current) return;

    try {
      const div = saveRef.current;
      const canvas = await html2canvas(div, { scale: 2 });
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, "bible_verse.png");
        }
      });
    } catch (error) {
      console.error("Error converting div to image:", error);
    }
  }


  return (
    <div class="wrapper">
      <div class="image_wrapper" ref={saveRef}>
        <ul>
          <li class="verse">
            {text}
          </li>
          <li class="bible">
            {bible}
          </li>
        </ul>
      </div>
      <div class="button_wrapper">
        <button onClick={handleDownload}>image save</button>
      </div>
    </div>
  );
};
export default TodoImage;
