import React, { useState } from "react";

const Ex8 = () => {
  const [showExe, setShowExe] = useState(false);
	const [post, setPost] = useState({name:'', address: ''})

  return (
    <div>
      <button
        onClick={() => setShowExe((prevState) => !prevState)}
        className="m-2 cursor-pointer"
      >
        <p>Задание 8.</p>
      </button>
      {showExe ? (
        <div>
          <p className=" w-96 ml-10 text-center border rounded-xl p-2 ">
            Создайте компонент Address, который принимает два параметра: имя и
            адрес. Имя должно выводиться в заголовке H2. Значение адреса должно
            проходить проверку. Если адрес был передан и его значение не пустое,
            то выведите его на экран в тэге «p», иначе выведите сообщение:
            «Address is not available».
          </p>
          <div className="mt-2 ml-10">
            <div className="border-2 rounded-xl p-4 w-96">
              <input
                value={post.name}
                className="border-black text-black rounded-lg mb-2 w-full p-1 "
                placeholder="Name"
								onChange={(e) => setPost({...post, name: e.target.value})}
              ></input>
              <input
                type="address"
                value={post.address}
                className="border-black text-black rounded-lg mb-2 w-full p-1 "
                placeholder="email address"
								onChange={(event) => setPost({ ...post, address: event.target.value })}

              ></input>
							<div className="border-2 rounded-lg text-black bg-white h-20 p-3">
								<h1>Name:{post.name} </h1>
								<h2>Address:{post.address}</h2>
							</div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Ex8;
