class Component {
  constructor() {
    if (this.constructor === Component) {
      throw new Error("Can't instantiate from Abstract class");
    }
  }

  _render() {
    throw new Error("Abstract method has no implementation");
  }
}
