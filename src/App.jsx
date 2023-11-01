import { useState } from "react";
import Cards from "./Cards.jsx";
import Form from "./Form.jsx";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
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
            name={name}
            setName={setName}
            number={number}
            setNumber={setNumber}
            month={month}
            setMonth={setMonth}
            year={year}
            setYear={setYear}
            cvc={cvc}
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
