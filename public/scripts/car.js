class Car extends Component {
  constructor(props) {
    super();
    const {
      id,
      plate,
      manufacture,
      model,
      image,
      rentPerDay,
      capacity,
      description,
      transmission,
      type,
      year,
      options,
      specs,
    } = props;
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay.toLocaleString("id-ID");
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = this.#setAvailableAt();
    this.driver = Math.floor(Math.random() * 2) === 1 ? true : false;
  }
  render() {
    return `<div class="col-md-6 col-lg-4 mb-3">
      <div class="card border-0 card-shadow-car">
        <img
          src="${this.image}"
          class="card-img-top card-img-car"
          alt="car"
        />
        <div class="card-body pb-2 px-0">
          <h5 class="body-14-reguler">${this.manufacture} ${this.model}/${this.type}</h5>
          <h5 class="card-title title-16-bold">Rp ${this.rentPerDay} / hari</h5>
          <p class="card-text body-14-light">
          ${this.description}
          </p>
        </div>
        <ul class="list-group list-group-flush border-0 body-14-light">
          <li class="list-group-item border-0 px-0"><img src="./images/svg/fi_users.svg" class="me-2" alt="" />${this.capacity} Orang</li>
          <li class="list-group-item border-0 px-0"><img src="./images/svg/Vector.svg" class="me-2" alt="" />${this.transmission}</li>
          <li class="list-group-item border-0 px-0"><img src="./images/svg/fi_calendar.svg" class="me-2" alt="" />Tahun ${this.year}</li>
        </ul>
        <div class="pt-2 pb-0">
          <button class="btn  btn-success btn-lg d-block w-100 body-14-bold">
            Pilih Mobil
          </button>
        </div>
      </div>
    </div>`;
  }

  #setAvailableAt = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const randomDate = Math.floor(Math.random() * 15);
    const newDate = new Date(today.setDate(today.getDate() + randomDate));
    const randomHours = Math.floor(Math.random() * 9) + 8;
    newDate.setHours(randomHours, 0, 0, 0);

    return newDate;
  };
}
