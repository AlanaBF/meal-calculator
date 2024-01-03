import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(1);
  const [result, setResult] = useState(0);

  const calculateTip = (e) => {
    e.preventDefault();
    const total = (bill + (bill * tip) / 100) / people;
    setResult(total.toFixed(2));
  };

  return (
    <div className="page-background">
      <Header />
      <div className="container">
        <h1>Calculator</h1>
        <form className="form" onSubmit={calculateTip}>
          <div className="form-group">
            <label htmlFor="billTotal">Bill Total</label>
            <input
              id="billTotal"
              type="number"
              placeholder="Total bill"
              onChange={(e) => setBill(parseFloat(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label htmlFor="tipPercentage">Tip Percentage</label>
            <input
              id="tipPercentage"
              type="number"
              placeholder="Tip percentage"
              onChange={(e) => setTip(parseInt(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label htmlFor="numberOfPeople">Number of People</label>
            <input
              id="numberOfPeople"
              type="number"
              placeholder="Number of people"
              onChange={(e) => setPeople(parseInt(e.target.value))}
            />
          </div>
          <button className="btn btn-warning" type="submit">
            Calculate
          </button>
        </form>
        <p className="result">Each person should pay: £{result}</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;

