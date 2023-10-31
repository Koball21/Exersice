import React, { useState } from "react";

const Ex5 = () => {
  const [showExe, setShowExe] = useState(false);
  const TextComponent = () => {
    return <div className="text-3xl">«Текст Задание 5»</div>;
  };
  const WrapperComponent = ({ children }) => {
    return <div>{children}</div>;
  };
  return (
    <div>
      <button
        onClick={() => setShowExe((prevState) => !prevState)}
        className="m-2 cursor-pointer"
      >
        <p>Задание 5.</p>
      </button>
      {showExe ? (
        <div>
          <p className=" w-96 ml-10 text-center border rounded-xl p-2 ">
            Есть 2 компонента TextComponent и WrapperComponent. Отрендерите один
            компонент внутри другого используя компонент WrapperComponent, как
            обёртку.
          </p>
          <div className="mt-2 ml-10">
            <WrapperComponent>
              <TextComponent />
            </WrapperComponent>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Ex5;
