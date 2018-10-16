export default snapshot => {
  const returnArray = [];

  snapshot.forEach(childSnapshot => {
      const item = childSnapshot.data();
      item.id = childSnapshot.id;

      returnArray.push(item);
  });

  return returnArray;
};