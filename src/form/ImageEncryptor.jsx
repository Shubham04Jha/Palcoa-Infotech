import , { useState } from 'react';
import CryptoJS from 'crypto-js';

function ImageEncryptor() {
  const [encryptedImage, setEncryptedImage] = useState(null);

  const encryptImage = (file, secretKey) => {
    const reader = new FileReader();
    reader.onload = () => {
      const arrayBuffer = reader.result;
      const wordArray = CryptoJS.lib.WordArray.create(arrayBuffer);
      const encrypted = CryptoJS.AES.encrypt(wordArray, secretKey).toString();
      setEncryptedImage(encrypted);
    };
    reader.readAsArrayBuffer(file);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const secretKey = 'your-secret-key';
    encryptImage(file, secretKey);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {encryptedImage && <textarea value={encryptedImage} readOnly rows="10" cols="50" />}
    </div>
  );
}

export default ImageEncryptor;
