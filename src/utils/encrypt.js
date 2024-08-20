import CryptoJS from "crypto-js";

export const encryptValue = (value, key) => {
  return CryptoJS.AES.encrypt(value, key).toString();
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
  return encryptedData;
};
