import { useEffect, useState } from "react";

const IntervalCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const counterInterval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    //if the component is unmounted, we should clean up
    return () => {
      clearInterval(counterInterval);
    };
  }, []); // nothing to change, will run just once



  return (
    <section>
      <h3>Interval Counter</h3>
      <p>{count} seconds have passed</p>

    </section>
  );
};

export default IntervalCounter;