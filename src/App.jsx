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
    setDestination([...updatedCountries, { continents, countries }]);
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

  const [genre, setGenre] = useState("");
  const [preference, setPreference] = useState("");
  const [formSubmitted1, setFormSubmitted1] = useState(false);

  const questions1 = {
    question: "Which type of music do you prefer?",
    options: {
      Rock: ["Classic Rock", "Alternative Rock", "Indie Rock"],
      Pop: ["Pop Rock", "Synth-pop", "Electropop"],
      "Hip Hop": ["East Coast Hip Hop", "West Coast Hip Hop", "Trap Music"],
    },
  };

  const onChangeHandler = (event) => {
    setGenre(event.target.value);
  };

  const formHandler1 = (event) => {
    event.preventDefault();
    setFormSubmitted1(true);
  };

  const SelectedGenreComponent = () => {
    if (genre) {
      return (
        <div>
          <p>{questions1.question}</p>
          {questions1.options[genre].map((option, index) => (
            <li key={index}>
              <input
                type="radio"
                value={option}
                name="genreOptions"
                onChange={(event) => setPreference(event.target.value)}
              />
              {option}
            </li>
          ))}
        </div>
      );
    }
  };

  const MusicPreference = () => {
    return (
      <div>
        <form onSubmit={formHandler1}>
          <label>Select Your Prefered Genre: </label>
          <select onChange={onChangeHandler}>
            <option value="">--Select Genre--</option>
            <option value="Rock">Rock</option>
            <option value="Pop">Pop</option>
            <option value="Hip Hop">Hip Hop</option>
          </select>
          <br />
          <br />
          <SelectedGenreComponent />
          <button>Submit</button>
        </form>
      </div>
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
      <h1>Music Preference App</h1>
      {!formSubmitted1 ? (
        <MusicPreference />
      ) : (
        <div>
          <h2>Thank you for Sharing your preference!</h2>
          <p>Selected Genre: {genre}</p>
          <p>Selected Sub Genre: {preference}</p>
        </div>
      )}
    </div>
  );
}
