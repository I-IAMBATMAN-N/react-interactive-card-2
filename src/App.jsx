import { useState } from "react";
import Cards from "./Cards.jsx";
import Form from "./Form.jsx";

import "./App.css";

function App() {
  const [name, setName] = useState("Jane Appleseed");
  const [number, setNumber] = useState("0000 0000 0000 0000");
  const [month, setMonth] = useState("00");
  const [year, setYear] = useState("00");
  const [cvc, setCvc] = useState("000");
  return (
    <>
      <div className="container">
        <aside className="card-side">
          <Cards
            name={name}
            number={number}
            month={month}
            year={year}
            cvc={cvc}
          />
        </aside>
        <article className="form-side">
          <Form
            setName={setName}
            setNumber={setNumber}
            setMonth={setMonth}
            setYear={setYear}
            setCvc={setCvc}
          />
        </article>
      </div>
    </>
  );
}

export default App;

{
  /* 
      <>
      <section className="section">
      <section className="card-section">
      <div className="card front">
      <p className="cardholder-name">{name}</p>
      <p className="card-number">{number}</p>
      <p className="date">
      {month}/{year}
      </p>
      </div>
      <div className="card back">
      <p className="cvc">{cvc}</p>
      </div>
      </section>
      <form action="" className="main-form">
      <label htmlhtmlFor="">cardholdre name</label>
      <input type="text" value={name} onChange={(e) => nameHandler(e)} />
      <label htmlhtmlFor="">card number</label>
      <input type="text" onChange={(e) => numberHandler(e)} />
      <div className="input-container">
      <div className="input-container--small">
      <label htmlhtmlFor="">exp. date (mm//yy)</label>
      <div>
      <input
      type="text"
      maxLength="2"
      onChange={(e) => monthHandler(e)}
      />
      <input
      type="text"
      maxLength="2"
      onChange={(e) => yearHandler(e)}
      />
      </div>
      </div>
      <div className="input-container--small">
      <label htmlhtmlFor="">cvc</label>
      <input type="text" onChange={(e) => cvcHandler(e)} />
      </div>
      </div>
      </form>
    </section>
    </> */
}
