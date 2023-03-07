const updateArray = (array, element, updateBy) => {
  const indexOfElement = array.findIndex((el) => el.id === element.id);
  let updatedArray = [];

  if (indexOfElement < 0) {
    if (updateBy <= 0)  return array;
    else if (updateBy >= 1) updatedArray = [...array, { ...element, count: updateBy }];
  } else {
    const currentQuantity =
      indexOfElement < 0 ? 0 : array[indexOfElement].count;
    updateBy = updateBy > 1 ? updateBy : updateBy + currentQuantity;

    updatedArray = array
      .map((item) => {
        if (item.id === element.id) return { ...item, count: updateBy };
        return item;
      })
      .filter((item) => item.count > 0);
  }
  return updatedArray;
};

export default updateArray;