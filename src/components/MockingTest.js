import React from "react";

const MockingTest = () => {
  const handleClick3 = () => {
    const fromTime = new Date("2023-02-23 00:00:00").getTime();
    const toTime = new Date("2023-02-23 10:00:00").getTime();

    fetch(`http://localhost:3000/timeseries?from=${fromTime}&to=${toTime}`)
      .then((response) => {
        console.log(response);
      })
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {
        console.log(`Something Wrong: ${error}`);
      });
  };

  return (
    <div>
      <button onClick={handleClick3}> study 데이터 가져오기</button>
    </div>
  );
};

export default MockingTest;
