import React, { useState } from "react";

const ImageUploader = () => {
  const [imageSrc, setImageSrc] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <div>Select an image file, please.</div>
      {imageSrc && <img src={imageSrc} alt="Selected" />}
    </div>
  );
};

export default ImageUploader;
