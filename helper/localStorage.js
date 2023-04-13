export const connectToLocalStorage = (key, data) => {
  let haveData;
  if (typeof window !== "undefined") {
    // Perform localStorage action
    data && localStorage.setItem(key, JSON.stringify(data));
    haveData = localStorage.getItem(key);
  }
  return haveData ? JSON.parse(localStorage.getItem(key)) : [];
};
