import React, { useState } from "react";

const Ex1 = () => {
  const [showExe, setShowExe] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowExe((prevState) => !prevState)}
        className="m-2 cursor-pointer"
      >
        <p>Задание 1.</p>
      </button>
      {showExe ? (
        <div>
          <p className=" w-96 ml-10 text-center border rounded-xl p-2 ">
            Создайте компонент, что выведет следующее: заголовок H1 с текстом:
            «Hello World!»; заголовок H2 с текстом: «This is my first React
            application!».
          </p>
          <div className="mt-2 ml-10">
						<h1>«Hello World!»</h1>
						<h2>«This is my first React
            application!»</h2>
					</div>
        </div>
      ) : null}
    </div>
  );
};

export default Ex1;
