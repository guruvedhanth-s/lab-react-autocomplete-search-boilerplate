import { useState } from "react";
import data from "./resources/countryData.json";
import "./App.css";
import SearchResult from "./components/Hooks";

function App() {
  const [value, setValue] = useState("");
  const [suggested, setSuggested] = useState([]);

  function handleEnter(event) {
    if (event.key === "Escape" && value.trim() !== "") {
      console.log("Escape");
      setSuggested([]);
      setValue("");
    }
  }
  const change = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setValue(inputValue);
    // Filter the data based on the input value
    const filteredData = data
      .filter((item) => item.name.toLowerCase().startsWith(inputValue))
      .slice(0, 10);

    // Use only the names of the first 10 suggestions
    setSuggested(filteredData.map((item) => item.name));
  };

  // console.log(data);
  return (
    <div className="boss">
      <h1>Searach</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          change(e);
        }}
        onKeyDown={handleEnter}
        placeholder="Type here"
      />
      <button>Search</button>
      {suggested.map((item, index) => (
        <SearchResult data={item} key={index} />
      ))}
      
    </div>
  );
}

export default App;
