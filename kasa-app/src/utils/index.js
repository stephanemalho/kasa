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

export function arrayRanking(index, house) {
  return `${index + 1}/${house.pictures.length}`;
}

export function previous(currentIndex, house, newState) {
  return HandlePrevious(currentIndex, house, newState);
}

export function next(currentIndex, house, newState) {
  return handleNext(currentIndex, house, newState);
}