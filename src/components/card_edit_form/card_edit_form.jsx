import React from "react";
import styles from "./card_edit_form.module.css";
import Button from "../button/button";

const CardEditForm = ({ FileInput, card, updateCard, onDelete }) => {
  const { name, company, title, email, message, theme, fileName } = card;

  // 이미지 파일이 업데이트 되면 file name,url update
  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };
  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  //delete btn click
  const onSubmit = (event) => {
    event.preventDefault();
    onDelete(card);
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        defaultValue={name}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        defaultValue={company}
        onChange={onChange}
      />
      <select
        className={styles.select}
        name="theme"
        defaultValue={theme}
        onChange={onChange}
      >
        <option defaultValue="light">light</option>
        <option defaultValue="dark">dark</option>
        <option defaultValue="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        defaultValue={title}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        defaultValue={email}
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        name="message"
        defaultValue={message}
        onChange={onChange}
      />
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
