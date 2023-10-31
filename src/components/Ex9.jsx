import React, { useState } from "react";

const Ex9 = () => {
  const [showExe, setShowExe] = useState(false);

const person = {
	name:'Петя',
	job: 'разно рабочий'
}
  return (
    <div>
      <button
        onClick={() => setShowExe((prevState) => !prevState)}
        className="m-2 cursor-pointer"
      >
        <p>Задание 9.</p>
      </button>
      {showExe ? (
        <div>
          <p className=" w-96 ml-10 text-center border rounded-xl p-2 ">
            Создайте компонент, в котором будут состояния: name; job. Выведете
            значения состояний через render в формате строки: «Меня зовут name и
            я являюсь job!».
          </p>
          <div className="mt-2 ml-10">
           Привет меня зовут {person.name} я {person.job}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Ex9;
