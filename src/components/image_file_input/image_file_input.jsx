import React, { useRef } from "react";
import styles from "./image_file_input.module.css";
const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  // input은 css로 꾸미기 힘들기 때문에 input은 숨겨두고 클릭하면 input을 클릭한 효과를 주기
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  // 사진이 선택 하면 onChange 발생 => image 실제로 업로드 하기
  const onChange = async (event) => {
    // 비동기적으로 받기!
    const uploaded = await imageUploader.upload(event.target.files[0]);
    console.log(uploaded);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <button className={styles.button} onClick={onButtonClick}>
        {name || "No file"}
      </button>
    </div>
  );
};

export default ImageFileInput;
