//I can create sub class that extends EgovEmployee that will have unique properties


class EgovEmployee {
  constructor(
    username,
    password,
    firstName,
    lastName,
    department,
    certificates,
    gradeLevel
  ) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = department;
    this.certificates = certificates;
    this.gradeLevel = gradeLevel;
  }

  login(username, password) {
    console.log(`${username} and ${password} are needed `);
  }

  logout() {}

  addCertificate(certificate) {
    this.certificates.push(certificate);
  }
}

const ekeopre = new EgovEmployee(
  "Ebere",
  "bere003",
  "Ekeopre",
  "Beredugo",
  "Applications",
  ["NECO", "NYSC"],
  8
);
const emi = new EgovEmployee(
  "Ekombo",
  "kombo09",
  "Emi",
  "Bio-Kombo",
  "Applications",
  ["NECO", "NYSC"],

  8
);

ekeopre.addCertificate("engineering");
console.log(ekeopre);
