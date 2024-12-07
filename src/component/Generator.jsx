import { useState } from "react";

export const Generator = () => {
  const [rendumNumber, setNumber] = useState("G9r87#76OqpK9ws@");
  const [defNumber, setSelectnumber] = useState(16);

  const passwordLength = (e) => {
    let selectednumber = e.target.value;
    setSelectnumber(selectednumber);
  };
  const rendomGenerate = () => {
    let number = defNumber;
    const chracters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$*%!&";
    let rendGen = "";
    for (let i = 0; i < number; i++) {
      let rendomIndex = Math.floor(Math.random() * chracters.length);

      rendGen += chracters[rendomIndex];
    }

    setNumber(rendGen);
  };
  let copyPassword=()=>{
   if(rendumNumber){
    navigator.clipboard.writeText(rendumNumber)
    .then(()=>{
      alert("Copy Password")
    })
  }
  }


  return (
    <div className="container mx-auto px-10 bg-gray-200">
      <h1 className="text-3xl font-bold text-center my-6 text-cyan-500">
        Password Generator
      </h1>

      <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
        <div className="p-5 pl-14 ">
          <div className="w-full max-w-sm min-w-[200px]">
            <div className="relative">
              <input
                type="text"
                className="w-full pl-3 mb-6 pr-10 py-5 bg-transparent placeholder:text-slate-400 text-slate-1000 text-lg border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder=""
                readOnly
                value={rendumNumber}
              />

              <svg onClick={copyPassword}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="absolute w-5 h-5 top-6 right-2.5 text-slate-600"
              >
                <path d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z" />
              </svg>
            </div>
          </div>
          <div className="pl-10">
            <button
              onClick={rendomGenerate}
              className="inline-block px-10 py-4 bg-red-900 text-white rounded hover:bg-green-700"
            >
              Generate Rendom password
            </button>
          </div>
        </div>
      </div>
      <div className="bg-red">
        <h1 className="text-2xl font-bold text-center my-6 text-black-500">
          Setting
        </h1>
        <label
          for="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select Password Length
        </label>
        <select
          onChange={passwordLength}
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Select</option>
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option selected value="16">
            16
          </option>
          <option value="18">18</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>
    </div>
  );
};
