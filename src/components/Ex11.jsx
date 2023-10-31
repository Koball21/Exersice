import React, { useState } from "react";

const Ex11 = () => {
  const [showExe, setShowExe] = useState(false);
  const [changeTime, setChangeTime] = useState({
    title: "Click here to see a time",
  });
  const changeTimeApp = () => {
    const time = new Date();
    setChangeTime({ title: time.toLocaleTimeString()});
  };
  return (
    <div>
      <button
        onClick={() => setShowExe((prevState) => !prevState)}
        className="m-2 cursor-pointer"
      >
        <p>Задание 11.</p>
      </button>
      {showExe ? (
        <div>
          <p className=" w-96 ml-10 text-center border rounded-xl p-2 ">
            Добавьте на страницу тэг «H1» с текстом: «Click here to see a time».
            При клике на текст он должен заменяться на текущее время: часы,
            минуты, секунды.
          </p>
          <div className="mt-2 ml-10">
            <h1 className=' cursor-pointer' onClick={changeTimeApp}>{changeTime.title}</h1>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Ex11;
