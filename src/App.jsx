import { puppyList } from "./data.js";
import { useState } from "react";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div id="wrapper">
      {puppies.map((puppy) => {
        return (
          <p
            onClick={() => {
              setFeatPupId(puppy.id);
            }}
            key={puppy.id}
          >
            {puppy.name}
          </p>
        );
      })}

      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
            <li>
              Tricks:{" "}
              <ul>
                {featuredPup.tricks.map((trick) => {
                  return <li key={trick.id}>{trick.title}</li>;
                })}
              </ul>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
