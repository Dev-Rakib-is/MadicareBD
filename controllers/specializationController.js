exports.getSpecializations = (req, res) => {
  const list = [
    "Cardiologist","Dentist","Neurologist","Orthopedic",
    "Dermatologist","Pediatrician","ENT","Psychiatrist"
  ];
  res.json(list);
};
