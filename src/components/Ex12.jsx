import React, { useState } from "react";

const Ex12 = () => {
  const [showExe, setShowExe] = useState(false);

  return (
		<div>
		<button
			onClick={() => setShowExe((prevState) => !prevState)}
			className="m-2 cursor-pointer"
		>
			<p>Задание 12.</p>
		</button>
		{showExe ? (
			<div>
				<p className=" w-96 ml-10 text-center border rounded-xl p-2 ">text</p>
				<div className="mt-2 ml-10">text</div>
			</div>
		) : null}
	</div>
  );
};

export default Ex12;
