import { useEffect, useState } from "react";


const TitleComponent = () => {
  const [title, setTitle] = useState('Title Component');

  useEffect(() => {
    console.log('Title changed to:', title);

    //update the <title> element in our web page
    document.title = title;
  }, 
  [title]); // Run side effect only when title changes

  return (
    <section>
      <h3> {title} </h3>
      <input
        type='text'
        onChange={e => setTitle(e.target.value)}
        value={title}
      />

    </section>
  );

};

export default TitleComponent;