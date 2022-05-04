export const movieRate = (rate) => {
  switch (rate) {
    case "G":
      return "0+";
    case "PG":
      return "8+";
    case "PG-13":
      return "13+";
    case "R":
      return "17+";
    case "NC-17":
      return "17+";
    default:
      return rate;
  }
};
