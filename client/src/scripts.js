export const serialize = (formData) => {
  const keys = Object.keys(formData);
  return keys.map(key => `${key}=${formData[key]}`).join('&');
}
