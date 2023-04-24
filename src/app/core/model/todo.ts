export interface ITodo {
  title: string;
  name: string;
  age: number;
  smoking: boolean;
}

export class Todo implements ITodo {
  title!: string;
  name!: string;
  age!: number;
  smoking!: boolean;

  constructor(data: ITodo) {
    Object.assign(this, data);
  }
}
