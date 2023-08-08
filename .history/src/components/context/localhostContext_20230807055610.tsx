class Data {
  databaseName: string;

  constructor(name: string | null = null) {
    if (name === null) {
      this.databaseName = "defaultDatabase";
    } else {
      this.databaseName = name;
    }
  }

  setData(data: object[]) {
    localStorage.setItem(this.databaseName, JSON.stringify(data));
  }

  getData() {
    const data = localStorage.getItem(this.databaseName);
    return data ? JSON.parse(data) : null;
  }
}

export default Data;
