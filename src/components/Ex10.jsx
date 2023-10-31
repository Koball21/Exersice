import React, { useState } from "react";

const Ex10 = () => {
  const [showExe, setShowExe] = useState(false);
  const [post, setPost] = useState({ name: "Пользыватель" });

  return (
    <div>
      <button
        onClick={() => setShowExe((prevState) => !prevState)}
        className="m-2 cursor-pointer"
      >
        <p>Задание 10.</p>
      </button>
      {showExe ? (
        <div>
          <p className=" w-96 ml-10 text-center border rounded-xl p-2 ">
            Сделайте кнопку, а также текст как показано на картинке ниже:
            Задание По нажатию на кнопку, вызывается всплывающее окно, в которое
            пользователь вводить имя и оно отображается вместо слова
            Пользователь:
          </p>
          <div className="mt-2 ml-10">
            <div className="border-2 rounded-xl p-4 w-96">
              <input
                value={post.name}
                className="border-black text-black rounded-lg mb-2 w-full p-1 "
                placeholder="Name"
                onChange={(e) => {
                  setPost({ name: e.target.value });
                }}
              ></input>
             
              <div>Привет {post.name}.</div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Ex10;
