function removeObjectFromArrayId(arr, id) {
  arr.splice(
    arr.findIndex((el) => el.id === id),
    1
  );
}

export { removeObjectFromArrayId };
