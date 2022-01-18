
export class filterClass {


  constructor(data) {
    this.dataList = data;
  }

  getAll() {  
    return this.dataList;
  }
  
  getFilter(data_Type) {
    let filtredData = this.dataList.filter(type => type.group.includes(data_Type));
    return filtredData;
  }

}

