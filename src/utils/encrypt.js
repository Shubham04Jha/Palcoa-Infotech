import JSEncrypt from 'jsencrypt';

export const encryptValue = (value, key) => {
  const jsEncrypt = new JSEncrypt();
  jsEncrypt.setPublicKey(key);
  const encryptedValue = jsEncrypt.encrypt(value);
  console.log("Original value:", value);
  console.log("Encrypted value:", encryptedValue);
  return encryptedValue;
};

export const encryptFormData = (formData, key) => {
  const encryptedData = {};
  for (const [fieldKey, value] of Object.entries(formData)) {
    if (fieldKey === 'productName' || fieldKey === 'description') {
      encryptedData[fieldKey] = value;
    } else {
      encryptedData[fieldKey] = encryptValue(value, key);
    }
  }
  console.log("Final encrypted form data:", encryptedData);
  return encryptedData;
};
