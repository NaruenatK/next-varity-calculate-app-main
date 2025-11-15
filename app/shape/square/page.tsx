"use client";
import Image from "next/image";
import square from "./../../../assets/images/square.png"
import { useState } from "react";

export default function Page() {

  const [squareWidthInput, setSquareWidthInput] = useState("");
  const [squareLengthInput, setSquareLengthInput] = useState("");
  const [squareArea, setSquareArea] = useState("0.00");

  const handleSquareCalClick = () => {
    if (squareWidthInput === "" || squareWidthInput === "0" || squareLengthInput === "" || squareLengthInput === "0") {
      alert('กรุณาป้อนกว้างและยาวให้ถูกต้องก่อนคำนวน และกว้างกับยาวต้องไม่เป็น 0');
      return;
    }
    const width = parseFloat(squareWidthInput);
    const length = parseFloat(squareLengthInput);
    const area = width * length;
    setSquareArea(area.toFixed(2));
  }

  const handleSquareCancelClick = () => {
    setSquareWidthInput("");
    setSquareLengthInput("");
    setSquareArea("0.00");
  }

  return (
    <>
      <div className="w-6/12 border border-gray-500 mx-auto mt-20 mb-10 p-20 flex flex-col items-center rounded-2xl shadow-xl">

        <Image
          src={square}
          alt="Calculator"
          width={150}
        />
        <h1 className="text-xl text-blue-600 font-bold my-5">
          คำนวณพื้นที่สี่เหลี่ยม
        </h1>

        <div className="w-full flex flex-col mb-3">
          <label className="mb-1">กว้าง (เซนติเมตร)</label>
          <input
            type="text"
            value={squareWidthInput}
            className="border border-gray-300 p-2 rounded-xl"
            onChange={(e) => {
              const value = e.target.value.replace(/[^0-9.]/g, ""); // เอาเฉพาะเลขกับจุด
              setSquareWidthInput(value);
            }}
          />
        </div>
        
        <div className="w-full flex flex-col mb-3">
          <label className="mb-1">ยาว (เซนติเมตร)</label>
          <input
            type="text"
            value={squareLengthInput}
            className="border border-gray-300 p-2 rounded-xl"
            onChange={(e) => {
              const value = e.target.value.replace(/[^0-9.]/g, ""); // เอาเฉพาะเลขกับจุด
              setSquareLengthInput(value);
            }}
          />
        </div>

        <button
          onClick={handleSquareCalClick}
          className="w-full text-lg text-white bg-blue-600 hover:bg-blue-800 cursor-pointer px-5 py-2 rounded-xl text-center mt-5 "
        >
          คำนวณ
        </button>

        <button
          onClick={handleSquareCancelClick}
          className="w-full text-lg text-white bg-red-500 hover:bg-red-700 cursor-pointer px-5 py-2 rounded-xl text-center mt-5 "
        >
          ยกเลิก
        </button>

        <div className="w-full flex flex-col justify-center items-center mt-4 text-center text-xl">

          <div>
            <span>พื้นที่สามเหลี่ยม</span>
            <span className="font-bold text-3xl text-red-600 mx-5">{squareArea}</span>
            <span>ตารางเซนติเมตร</span>
          </div>
        </div>

      </div>
    </>
  );
}