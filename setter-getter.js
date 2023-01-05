class User {
  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }
}

const user = new User();
