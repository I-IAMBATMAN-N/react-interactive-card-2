export default function Cards({ number, name, month, year, cvc }) {
  return (
    <>
      <section className="card front-card">
        <div className="logo-container">
          <span></span>
          <span id="logo-smaller"></span>
        </div>
        <p className="card-front-number">{number}</p>
        <div className="card-bottom-info-container">
          <p className="card-holder-name">{name}</p>
          <p className="expiration-date">
            <span className="expiration-date-month">{month}</span>/
            <span className="expiration-date-year">{year}</span>
          </p>
        </div>
      </section>
      <section className="card back-card">
        <div className="tape"></div>
        <p className="card-ccv">{cvc}</p>
        <div className="bar-design"></div>
      </section>
    </>
  );
}
