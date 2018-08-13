export class Describer {
  key: string;
  value: string;

  values: [{}] = [{}];

  add(kval: {}): this {
    this.values.push(kval);
    return this;
  }

  getAll() {
    return this.values;
  }

}
