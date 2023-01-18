class EgovEmployee {
  constructor(
    username,
    password,
    firstName,
    lastName,
    certificates,
    department,
    gradeLevel
  ) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.certificates = certificates;
    this.department = department;
    this.gradeLevel = gradeLevel;
  }
}

const ekeopre = new EgovEmployee(
  "Ebere",
  "bere003",
  "Ekeopre",
  "Beredugo",
  "Applications"[("NECO", "NYSC")],
  8
);
const Emi = new EgovEmployee(
  "Ekombo",
  "kombo09",
  "Emi",
  "Bio-Kombo",
  "Applications",
  ["NECO", "NYSC"],
  8
);
// const ekeopre = new EgovEmployee("Ekeopre","Beredugo", ["NECO", "NYSC"])
// const ekeopre = new EgovEmployee("Ekeopre","Beredugo", ["NECO", "NYSC"])
// const ekeopre = new EgovEmployee("Ekeopre","Beredugo", ["NECO", "NYSC"])
// const ekeopre = new EgovEmployee("Ekeopre","Beredugo", ["NECO", "NYSC"])
// const ekeopre = new EgovEmployee("Ekeopre","Beredugo", ["NECO", "NYSC"])
// const ekeopre = new EgovEmployee("Ekeopre","Beredugo", ["NECO", "NYSC"])
