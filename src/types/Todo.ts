export class Todo {
  _id: number;
  _task: string;

  constructor(id = 0, task = "") {
    this._id = id;
    this._task = task;
  }

  public setId(id: number) {
    this._id = id;
  }

  public setTask(task: string) {
    this._task = task;
  }

  get id(): number {
    return this._id;
  }

  get task(): string {
    return this._task;
  }
}
