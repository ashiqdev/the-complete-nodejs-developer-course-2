console.log("Starting notes.js");

module.exports.addNote = () => {
  console.log("AddNote");
  return "New note";
};

module.exports.add = (num1, num2) => {
  return num1 + num2;
};
