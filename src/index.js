import React, { memo } from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import ImageFileInput from "./components/image_file_input/image_file_input";
import CardRepository from "./service/card_repository";

// dependancy injection
const authService = new AuthService();
const imageUploader = new ImageUploader();
const cardRepository = new CardRepository();
// 나중에 props를 여러개 보낼 수도 있으니 확장성과 유지보수를 위해 FileInput이라는 컴포넌트 자체를 넘김
// Component props는 대문자로 표시.
const FileInput = memo((props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
));

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
