export default function Cards({ name, number, month, year, cvc }) {
  function fillNumber() {
    let string = number;
    if (number.length > 0) {
      for (let i = 0; i < 19 - number.length; i++) {
        if (string.length === 4 || string.length === 9 || string.length === 14)
          string += " ";
        else string += "0";
      }
      // if (number.length === 4 || number.length === 9 || number.length === 14) {
      //   string += " ";
      // }
      // return setNumber(String(e.target.value) + string);
    }

    return string;
  }
  return (
    <>
      <section className="card front-card">
        <div className="logo-container">
          <span></span>
          <span id="logo-smaller"></span>
        </div>
        <p className="card-holder-number">
          {number.length > 0 ? fillNumber() : "0000 0000 0000 0000"}
        </p>
        <div className="card-bottom-info-container">
          <p className="card-front-name">
            {name.length > 0 ? name : "Jane Appleseed"}
          </p>
          <p className="expiration-date">
            <span className="expiration-date-month">
              {month.length > 0 ? month : "00"}
            </span>
            /
            <span className="expiration-date-year">
              {year.length > 0 ? year : "00"}
            </span>
          </p>
        </div>
      </section>
      <section className="card back-card">
        <div className="tape"></div>
        <p className="card-ccv">{cvc.length > 0 ? cvc : "000"}</p>
        <div className="bar-design"></div>
      </section>
    </>
  );
}
