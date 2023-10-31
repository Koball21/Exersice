import React, { useState } from "react";

const Ex6 = () => {
  const [showExe, setShowExe] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowExe((prevState) => !prevState)}
        className="m-2 cursor-pointer"
      >
        <p>Задание 6.</p>
      </button>
      {showExe ? (
        <div>
          <p className=" w-96 ml-10 text-center border rounded-xl p-2 ">
            Создайте компонент, что будет возвращать 3 заголовка: H1, H2 и H3.
            Для возвращения данных не используйте обертывание при помощи тега
            App.
          </p>
          <div className="mt-2 ml-10">
						{`<>
						<h1>H1</h1>
						<h2>H2</h2>
						<h3>H3</h3>
						</>`}
						<>
						<h1>H1</h1>
						<h2>H2</h2>
						<h3>H3</h3>
						</>
					</div>
        </div>
      ) : null}
    </div>
  );
};

export default Ex6;
