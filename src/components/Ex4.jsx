import React, { useState } from "react";

const TextComponent = () => {
	return (
		<div className='text-3xl'>«Текст Задание 4»</div>
	)
}
const WrapperComponent = ({child}) => {
	return (
		<div>{child}</div>
	)
}

const Ex4 = () => {
  const [showExe, setShowExe] = useState(false);
  return (
    <div>
      <button
        onClick={() => setShowExe((prevState) => !prevState)}
        className="m-2 cursor-pointer"
      >
        <p>Задание 4.</p>
      </button>
      {showExe ? (
        <div>
          <p className=" w-96 ml-10 text-center border rounded-xl p-2 ">
            Создайте 2 компонента: «TextComponent» и «WrapperComponent».
            Компонент «TextComponent» должен возвращать текст: «Inner text».
            Компонент «WrapperComponent» должен возвращать компонент, что был
            получен в качестве параметра.
          </p>
          <div className="mt-2 ml-10">
            <WrapperComponent child={<TextComponent/>}/>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Ex4;
