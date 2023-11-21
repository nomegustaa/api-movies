const validCampVoid = (...camps) => {
  return camps.some((camp) => camp.trim() === "");
};

export default validCampVoid;
