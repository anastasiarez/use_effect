import { useEffect, useState } from "react";

const FoxPic = () => {
  const [pics, setPics] = useState([]);

//HANDLING AJAX: TWO WAYS - FETCH & AXIOS

  useEffect(() => {
    const FOX_URL = 'https://randomfox.ca/floof/';

    Promise.all([
      fetch(FOX_URL).then(response => response.json()),
      fetch(FOX_URL).then(response => response.json()),
      fetch(FOX_URL).then(response => response.json()),
      fetch(FOX_URL).then(response => response.json())
    ])
      .then((allFoxPics) => {
        setPics(allFoxPics);
      });


    //   fetch(FOX_URL) //we fetch info from the api
    //     .then((response) => {
    //       return response.json(); //we process the data, convert it from the string to an obj
    //     })
    //     .then((foxInfo) => {
    //       //console.log(foxInfo);
    //       setPics(prev => { //store pic info inside the state
    //         return [...prev, foxInfo];
    //       });
    //     });


  }, []);

  return (
    <section>
      <h3>Fox Pictures</h3>
      <ul>
        {pics.length > 0 && pics.map((pics, index) =>
          <li key={index}>
            <a href={pics.link}>
              <img src={pics.image} />
            </a>
          </li>
        )}
      </ul>
    </section>
  );

};

export default FoxPic;

