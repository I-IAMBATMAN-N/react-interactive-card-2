import { useState } from "react";

export default function Form({
  name,
  setName,
  number,
  setNumber,
  month,
  setMonth,
  year,
  setYear,
  cvc,
  setCvc,
}) {
  const [isFinished, setIsFinished] = useState(false);

  function formHandler(e) {
    //
    function checkInputs() {
      const incorrectFields = [];
      //
      const regExpNum = /[0-9]/;

      const regExpStr = /[a-záéíóúàèìòùäëïöüěščřžýůú=+-.,]/;
      const regExpStr2 = /[A-ZÁÉÍÓÚÀÈÌÒÙÄËÏÖÜĚŠČŘŽÝŮÚ=+-.,]/;

      //
      if (regExpNum.test(name)) {
        incorrectFields.push("Card name");
      }
      if (regExpStr.test(number) || regExpStr2.test(number)) {
        incorrectFields.push("Card number");
      }
      if (regExpStr.test(month) || regExpStr2.test(month)) {
        incorrectFields.push("Card month");
      }
      if (regExpStr.test(year) || regExpStr2.test(year)) {
        incorrectFields.push("Card year");
      }
      if (regExpStr.test(cvc) || regExpStr2.test(cvc)) {
        incorrectFields.push("Card cvc");
      }

      if (incorrectFields.length) {
        alert(`Please fill corectly fields:\n${[...incorrectFields]}`);
      } else if (!incorrectFields.length) {
        //
        setIsFinished((curr) => !curr);
      }
    }

    //
    e.preventDefault();
    //
    checkInputs();
  }
  function nameHandler(e) {
    if (e.target.value.length > 0) {
      return setName(e.target.value);
    } else {
      return setName("Jane Appleseed");
    }
  }
  function numberHandler(e) {
    let string = "";
    if (e.target.value.length > 0) {
      for (let i = 0; i < 19 - e.target.value.length; i++) {
        if (i === 4 || i === 9 || i === 14) string += " ";
        else string += "0";
      }
      if (
        e.target.value.length === 4 ||
        e.target.value.length === 9 ||
        e.target.value.length === 14
      ) {
        e.target.value += " ";
      }
      // return setNumber(String(e.target.value) + string);
      return setNumber(e.target.value + string);
    } else {
      return setNumber("0000 0000 0000 0000");
    }
  }
  function monthHandler(e) {
    if (e.target.value.length > 0) {
      return setMonth(e.target.value);
    } else {
      return setMonth("00");
    }
  }
  function yearHandler(e) {
    if (e.target.value.length > 0) {
      return setYear(e.target.value);
    } else {
      return setYear("00");
    }
  }
  function cvcHandler(e) {
    if (e.target.value.length > 0) {
      return setCvc(e.target.value);
    } else {
      return setCvc("000");
    }
  }
  //
  return (
    <>
      {isFinished ? (
        <>
          <section className="thank-you">
            <p className="checked-img">✔</p>
            <h1 className="heading-1">THANK YOU!</h1>
            <p className="text">We&apos;ve added your card details</p>
          </section>
        </>
      ) : (
        <form onSubmit={(e) => formHandler(e)} id="form">
          <label htmlFor="#card-holder-name-input">Cardholder Name</label>
          <input
            type="text"
            id="card-holder-name-input"
            className="input-name"
            placeholder="e.g. Jane Appleseed"
            maxLength="25"
            onChange={(e) => nameHandler(e)}
          />
          <label htmlFor="#card-number-input">Card Number</label>
          <input
            type="tel"
            id="card-number-input"
            className="input-number"
            minLength="19"
            maxLength="19"
            placeholder="e.g. 1234 5678 9123 0000"
            onChange={(e) => numberHandler(e)}
          />
          <section className="rest-inputs">
            <section className="exp-date-inputs">
              <label htmlFor="" className="exp-date-label">
                exp. date (mm/yy)
              </label>
              <div>
                <input
                  type="number"
                  className="exp-date-input input-month"
                  placeholder="MM"
                  min="0"
                  max="12"
                  onChange={(e) => monthHandler(e)}
                />
                <input
                  type="number"
                  className="exp-date-input input-year"
                  placeholder="YY"
                  min="0"
                  max="50"
                  onChange={(e) => yearHandler(e)}
                />
              </div>
            </section>
            <section className="cvc-inputs">
              <label htmlFor="">cvc</label>
              <input
                type="number"
                className="cvc"
                placeholder="e.g. 123"
                max="999"
                maxLength="3"
                onChange={(e) => cvcHandler(e)}
              />
            </section>
          </section>
          <button>Confirm</button>
        </form>
      )}
    </>
  );
}
