import React, { useState } from "react";

const Ex7 = () => {
  const [showExe, setShowExe] = useState(false);
  const element = React.createElement(
    "h1",
    { className: "text-red-700" },
    "Текст Зедание 7 создание через Реакт Компонент"
  );
  return (
    <div>
      <button
        onClick={() => setShowExe((prevState) => !prevState)}
        className="m-2 cursor-pointer"
      >
        <p>Задание 7.</p>
      </button>
      {showExe ? (
        <div>
          <p className=" w-96 ml-10 text-center border rounded-xl p-2 ">
            Перепишите текущий кусок разметки <br /> написаной в JSX с помощью{" "}
            <br />
            React.createElement: const element = (<br />
            {` <h1 className="greeting">Hello, world!</h1>`}
            );
          </p>
          <div className="mt-2 ml-10">{element}</div>
        </div>
      ) : null}
    </div>
  );
};

export default Ex7;
