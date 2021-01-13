class ImageUploader {
  // 서버에 사진을 업로드하고 url 주소값 리턴
  // Cloudinary REST API 사용
  async upload(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "lheqkmlb");
    const result = await fetch(
      "https://api.cloudinary.com/v1_1/dthyizic1/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    return await result.json();
  }
}

export default ImageUploader;
