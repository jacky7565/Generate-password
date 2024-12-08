import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Generator = () => {
  const [rendumNumber, setNumber] = useState("G9r87#76OqpK9ws@");
  const [defNumber, setSelectnumber] = useState(16);
  const [checkUpperCase, setUpperCheck] = useState(false);
  const [checkLowerCase, setLowerCheck] = useState(false);
  const [checkNumberCase, setnumberCheck] = useState(false);
  const [checksymbolCase, setSymbolCheck] = useState(false);
  // console.log(upperCase)

  const passwordLength = (e) => {
    let selectednumber = e.target.value;
    setSelectnumber(selectednumber);
  };
  const rendomGenerate = () => {

    
    let number = defNumber;
    let characters = "";

    if (checkUpperCase) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    
    if (checkLowerCase) {
      characters += "abcdefghijklmnopqrstuvwxyz";
    }
    
    if (checkNumberCase) {
      characters += "0123456789";
    }
    
    if (checksymbolCase) {
      characters += "!@#$%^&*";
    }

    // console.log(chracters)
    
    let rendGen = "";
    for (let i = 0; i < number; i++) {
      let rendomIndex = Math.floor(Math.random() * characters.length);

      rendGen += characters[rendomIndex];
    }

    setNumber(rendGen);
  };
  let copyPassword = () => {
    if (rendumNumber) {
      navigator.clipboard.writeText(rendumNumber).then(() => {
        toast.success("Copied to clipboard!", { position: "top-center" });
        alert("Copy Clipboard");
      });
    }
  };

  let checkUpperhandler = (e) => {
    setUpperCheck(e.target.checked);
  };
  let checkLowerhandler = (e) => {
    setLowerCheck(e.target.checked);
  };
  let checkNumberHandler = (e) => {
    setnumberCheck(e.target.checked);
  };
  let checkSymbolHandler = (e) => {
    setSymbolCheck(e.target.checked);
  };

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

              <svg
                onClick={copyPassword}
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
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-center my-6 text-black-500">
          Setting
        </h1>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Select Password Length
        </label>
        <select
          onChange={passwordLength}
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

        <div className="flex items-center mb-4">
          <input
            onChange={checkUpperhandler}
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Lowercase Letters
          </label>
        </div>
        <div className="flex items-center">
          <input
            onChange={checkLowerhandler}
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Uppercase Letters
          </label>
        </div>

        <div className="flex items-center">
          <input
            onChange={checkNumberHandler}
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Number
          </label>
        </div>

        <div className="flex items-center">
          <input
            onChange={checkSymbolHandler}
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Symbol
          </label>
        </div>
      </div>
    </div>
  );
};
