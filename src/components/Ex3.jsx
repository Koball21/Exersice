import React, { useState } from "react";

const Ex3 = () => {
  const [showExe, setShowExe] = useState(false);
const nameArray = ["Jack", "Max", "Leo", "Alex"]
  return (
    <div>
      <button
        onClick={() => setShowExe((prevState) => !prevState)}
        className="m-2 cursor-pointer"
      >
        <p>Задание 3.</p>
      </button>
      {showExe ? (
        <div>
          <p className=" w-96 ml-10 text-center border rounded-xl p-2 ">
					Вывести массив имён в виде нумерованного списка на страницу.<br/>
Массив имен:
["Jack", "Max", "Leo", "Alex"]
					</p>
          <div className="mt-2 ml-10">
						{nameArray.map((name, i)=><div>{i+1}.{" "}{name}</div>)}
					</div>
        </div>
      ) : null}
    </div>
  );
};

export default Ex3;
