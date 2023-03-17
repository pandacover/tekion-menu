import MockData from "../mock-data";

const dataAPI = () => {
  return new Promise((resolve, reject) => {
    try {
      if (MockData.length <= 0) throw new Error("No data found");
      return setTimeout(() => resolve(MockData), 3000);
    } catch (error) {
      return setTimeout(() => reject(error), 3000);
    }
  });
};

export default dataAPI;
