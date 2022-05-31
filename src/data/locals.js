export default class locals {
  name;

  constructor(name) {
    this.name = name;
  }

  get(backup = "") {
    return localStorage.getItem(this.name) || backup;
  }

  set(value) {
    localStorage.setItem(this.name, value);
  }
}
