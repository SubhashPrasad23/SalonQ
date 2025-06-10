export const capitalizeFirstLetter = (word = "") => {
    if (!word) return "";
    const letters = word.split("");
    letters[0] = letters[0].toUpperCase();
    return letters.join("");
};
  