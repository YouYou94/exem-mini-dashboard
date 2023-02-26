import axios from "axios";
import React from "react";

const MockingTest = () => {
  const handleClick3 = async () => {
    const fromTime = new Date("2023-02-23 01:00:00").getTime();
    const toTime = new Date("2023-02-23 02:00:50").getTime();

    console.log("사용자시간");
    console.log("fromTime: ", fromTime);
    console.log("fromTime: ", toTime);

    await axios
      .get(`http://localhost:3000/pie?from=${fromTime}&to=${toTime}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={handleClick3}> study 데이터 가져오기</button>
    </div>
  );
};

export default MockingTest;
