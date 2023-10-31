import React, { useState } from "react";

const Ex2 = () => {
  const [showExe, setShowExe] = useState(false);
  const [score, setScore] = useState(0);
  const plusone = () => {
    setScore(score + 1);
  };
  const minusone = () => {
    setScore(score - 1);
  };
  return (
    <div>
      <button
        onClick={() => setShowExe((prevState) => !prevState)}
        className="m-2 cursor-pointer"
      >
        <p>Задание 2.</p>
      </button>
      {showExe ? (
        <div className="">
          <p className=" w-96 ml-10 text-center border rounded-xl p-2 ">
            Создайте элементарный счётчик. <br/> Значение по-умолчанию должно быть
            равным нулю. Добавьте 2 кнопки: +1 и -1. Они должны увеличивать и
            уменьшать соответственно значение счётчика на единицу.
          </p>
          <div className="border-2 bg-gray-600 w-32 text-center rounded-xl p-2 mt-2 ml-10 ">
            <h1 className=" border-b-2 mb-3" value={() => {}}>
              {score}
            </h1>
            <buttom
              className="cursor-pointer rounded-lg border-2 p-1 pl-3 pr-3 mr-2 bg-green-700 hover:bg-green-400 "
              onClick={plusone}
            >
              +
            </buttom>
            <buttom
              className=" cursor-pointer rounded-lg border-2 p-1 pl-3 pr-3 mr-2 bg-red-700 hover:bg-red-400"
              onClick={minusone}
            >
              -
            </buttom>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Ex2;
