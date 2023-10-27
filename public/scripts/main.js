class App {
  constructor() {
    this.formCari = document.getElementById("form-cari");
    this.divFilteredCar = document.getElementById("filtered-car");
    this.btnSubmit = document.getElementById("btn-cari");
    this.driver = document.getElementById("driver");
    this.tanggal = document.getElementById("tanggal");
    this.waktu = document.getElementById("waktu");
    this.baseUrl = "http://localhost:3000";
    this.objCars = [];
  }

  init() {
    this.formCari.addEventListener("submit", (e) => this.getCars(e));
    this.driver.addEventListener("change", () => this.#checkInput());
    this.waktu.addEventListener("change", () => this.#checkInput());
    this.tanggal.addEventListener("change", () => this.#checkInput());
  }

  async getCars(e) {
    e.preventDefault();
    if (this.objCars.length == 0) {
      const response = await fetch(`${this.baseUrl}/cars.json`);
      const cars = await response.json();
      cars.forEach((car) => {
        const objCar = new Car(car);
        this.objCars.push(objCar);
      });
    }
    this.#filterCar(e);
  }

  #filterCar(e) {
    const formData = new FormData(e.target);
    console.log(this.objCars);
    const tanggal = new Date(formData.get("tanggal"));
    tanggal.setHours(formData.get("waktu"), 0, 0, 0);
    const penumpang = formData.get("jumlah") ? formData.get("jumlah") : 0;
    const driver = formData.get("driver");
    console.log(tanggal, penumpang, driver);
    const filteredCars = this.objCars.filter(
      (objCar) =>
        tanggal >= objCar.availableAt &&
        penumpang <= objCar.capacity &&
        (driver === "true") == objCar.driver
    );
    console.log(filteredCars);
    this.#renderCars(filteredCars);
  }

  #renderCars(cars) {
    let html = "";
    cars.forEach((car) => {
      html += car.render();
    });
    this.divFilteredCar.innerHTML = html;
  }

  #checkInput() {
    if (this.driver.value && this.waktu.value && this.tanggal.value) {
      this.btnSubmit.removeAttribute("disabled");
    }
  }
}

const app = new App();
app.init();
