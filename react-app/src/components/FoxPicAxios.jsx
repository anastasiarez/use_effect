import { useEffect, useState } from "react";
import axios from 'axios';

const FoxPicAxios = () => {
  const [pics, setPics] = useState([]);

//HANDLING AJAX: TWO WAYS - FETCH & AXIOS

  useEffect(() => {
    const FOX_URL = 'https://randomfox.ca/floof/';

    Promise.all([
      axios.get(FOX_URL).then(response => response.data),
      axios.get(FOX_URL).then(response => response.data),
      axios.get(FOX_URL).then(response => response.data),
      axios.get(FOX_URL).then(response => response.data)
    ])
      .then((allFoxPics) => {
        setPics(allFoxPics);
      });
  }, []);

  return (
    <section>
      <h3>Fox Pictures: Axios</h3>
      <ul>
        {pics.length > 0 && pics.map((pics, index) =>
          <li key={index}>
            <a href={pics.link}>
              <img src={pics.image} style={{maxWidth: '70%'}}/>
            </a>
          </li>
        )}
      </ul>
    </section>
  );

};

export default FoxPicAxios;

