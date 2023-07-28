/* eslint-disable max-len */
/* eslint-disable max-len */
/* eslint-disable eqeqeq */
/* eslint-disable class-methods-use-this */
class Data {
  constructor(name) {
    this.databaseName = name;
  }

  setData(data) {
    localStorage.setItem(this.databaseName, JSON.stringify(data));
  }

  getData() {
    return JSON.parse(localStorage.getItem(this.databaseName));
  }

  checkData() {
    if (this.getData() == []) {
      return;
    }
    this.setData([]);
  }
}

export default Data;