export function handleNext(currentImageIndex, house, state) {
  return () => {
    if (currentImageIndex === house.pictures.length - 1) {
      state(0);
    } else {
      state(currentImageIndex + 1);
    }
  };
}

export function HandlePrevious(currentImageIndex, house, state) {
  return () => {
    if (currentImageIndex === 0) {
      state(house.pictures.length - 1);
    } else {
      state(currentImageIndex - 1);
    }
  };
}