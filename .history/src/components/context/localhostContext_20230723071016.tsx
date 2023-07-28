/* eslint-disable max-len */
/* eslint-disable max-len */
/* eslint-disable eqeqeq */
/* eslint-disable class-methods-use-this */
class Data {
  databaseName: string | null
  constructor(name:string | null) {
    this.databaseName = name;
  }

  setData(data:object[]) {
    localStorage.setItem(this.databaseName, JSON.stringify(data));
  }

  getData() {
    return JSON.parse(localStorage.getItem(this.databaseName));
  }
}

export default Data;