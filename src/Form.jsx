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

  const regExpNum = /[0-9]/;
  const regExpStr = /[a-záéíóúàèìòùäëïöüěščřžýůú=+-.,]/;
  const regExpStr2 = /[A-ZÁÉÍÓÚÀÈÌÒÙÄËÏÖÜĚŠČŘŽÝŮÚ=+-.,]/;

  function formHandler(e) {
    //
    function checkInputs() {
      const inputs = document.querySelectorAll("input");

      const incorrectFields = [];
      //
      const regExpNum = /[0-9]/;

      const regExpStr = /[a-záéíóúàèìòùäëïöüěščřžýůú=+-.,]/;
      const regExpStr2 = /[A-ZÁÉÍÓÚÀÈÌÒÙÄËÏÖÜĚŠČŘŽÝŮÚ=+-.,]/;

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

      let bool = true;

      inputs.forEach((input) => {
        const min = input.getAttribute("minlength");

        if (min) {
          if (input.value.length < min) {
            bool = false;
          }
        } else if (!min) {
          if (!input.value.length) {
            bool = false;
          }
        }
      });

      if (!bool) alert("Please fill inputs first");
      if (incorrectFields.length)
        alert(`Please fill corectly fields:\n${[...incorrectFields]}`);

      if (bool & !incorrectFields.length) setIsFinished((curr) => !curr);
    }

    //
    e.preventDefault();
    //
    checkInputs();
  }
  function nameHandler(e) {
    if (regExpNum.test(e.target.value)) {
      alert("Incorrect key in Card name");
      return setName(e.target.value.slice(0, -2));
    }
    if (e.target.value.length > -1) {
      return setName(e.target.value);
    }
    // else {
    //   return setName("Jane Appleseed");
    // }
  }
  function numberHandler(e) {
    if (regExpStr.test(e.target.value) || regExpStr2.test(e.target.value)) {
      alert("Incorrect key in Card number");
      return setNumber(e.target.value.slice(0, -2));
    }
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
    }
    return setNumber(e.target.value);
    // else {
    //   return setNumber("0000 0000 0000 0000");
    // }
  }
  function monthHandler(e) {
    if (regExpStr.test(e.target.value) || regExpStr2.test(e.target.value)) {
      alert("Incorrect key in Card month");
      return setMonth(e.target.value);
    }
    if (e.target.value.length > 0) {
      return setMonth(e.target.value);
    }
    // else {
    //   return setMonth("00");
    // }
  }
  function yearHandler(e) {
    if (regExpStr.test(e.target.value) || regExpStr2.test(e.target.value)) {
      alert("Incorrect key in Card year");
      return setYear(e.target.value);
    }
    if (e.target.value.length > 0) {
      return setYear(e.target.value);
    }
    // else {
    //   return setYear("00");
    // }
  }
  function cvcHandler(e) {
    if (regExpStr.test(e.target.value) || regExpStr2.test(e.target.value)) {
      alert("Incorrect key in Card cvc");
      return setCvc(e.target.value);
    }
    if (e.target.value.length > 0) {
      return setCvc(e.target.value);
    }
    // else {
    //   return setCvc("000");
    // }
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
            value={name}
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
            value={number}
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
                  value={month}
                />
                <input
                  type="number"
                  className="exp-date-input input-year"
                  placeholder="YY"
                  min="0"
                  max="50"
                  onChange={(e) => yearHandler(e)}
                  value={year}
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
                value={cvc}
              />
            </section>
          </section>
          <button>Confirm</button>
        </form>
      )}
    </>
  );
}
