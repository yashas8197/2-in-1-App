import { useState } from "react";

export default function App() {
  const [continents, setContinents] = useState("");
  const [countries, setCountries] = useState("");
  const [destination, setDestination] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const questions = {
    question: "Select Your Preferred Continent:",
    options: {
      Asia: ["Japan", "Thailand", "India"],
      Europe: ["France", "Italy", "Spain"],
      "North America": ["USA", "Canada", "Mexico"],
    },
  };

  const continentSelectHandler = (event) => {
    let value = event.target.value;
    setContinents(value);
  };

  const formHandler = (event) => {
    event.preventDefault();
    const updatedCountries = destination.filter((des) => des !== countries);
    setDestination([...destination, { continents, countries }]);
    setFormSubmitted(true);
  };

  const SelectedComponent = () => {
    if (continents) {
      return (
        <div>
          <p>Select your prefered Destination</p>
          <ul>
            {questions.options[continents].map((country, index) => {
              return (
                <li key={index}>
                  <input
                    type="radio"
                    value={country}
                    name="countries"
                    onChange={(event) => setCountries(event.target.value)}
                  />
                  {country}
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  };

  const ContinentSelect = () => {
    return (
      <form onSubmit={formHandler}>
        <label htmlFor="destination">Select your preferred continent: </label>
        <select id="destination" onChange={continentSelectHandler}>
          <option value="">--Select Continent--</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
        </select>
        <br />
        <br />
        <SelectedComponent />
        <button type="submit">Submit</button>
      </form>
    );
  };

  return (
    <div className="App">
      <h1>Travel Destination App</h1>
      {!formSubmitted ? (
        <ContinentSelect />
      ) : (
        <div>
          <h2>Thank you for Sharing your preference!</h2>
          {destination.map((des, index) => {
            return (
              <div key={index}>
                <p>Prefered continent: {des.continents}</p>
                <p>Prefered Destination: {des.countries}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
