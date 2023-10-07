import axios from "axios";
import { useEffect, useState } from "react";

const Locations = () => {
  const [locations, setLocations] = useState([]);

  //connect to our api and get the array of locations

  useEffect(() => {
    const LOCATIONS_URL = 'http://localhost:8500/api/locations'; 
    axios.get(LOCATIONS_URL)
      .then((response) => { 
        setLocations(response.data);
      });
  }, []);
  

return (
  <section>
    <h3>Locations</h3>
    <ul>
      {locations.length > 0 && locations.map((location, i) =>
        <li key={i}>
          {location}
        </li>)}
    </ul>
  </section>
);
};

export default Locations;

//we need to keep track of the array of locations. If it will be changing we need to set up a state for it