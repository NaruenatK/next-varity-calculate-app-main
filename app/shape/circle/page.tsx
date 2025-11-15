"use client";
import Image from "next/image";
import Link from "next/link";
import circle from "./../../../assets/images/circle.png"
import { useState } from "react";

export default function Page() {

  const [circleRadiusInput, setCircleRadiusInput] = useState("");
  const [circleArea, setCircleArea] = useState("0.00");

  const handleCircleCalClick = () => {
    if (circleRadiusInput === "" || circleRadiusInput === "0") {
      alert('กรุณาป้อนรัศมีให้ถูกต้องก่อนคำนวน และรัศมีต้องไม่เป็น 0');
      return;
    }
    const radius = parseFloat(circleRadiusInput);
    const area = Math.PI * radius * radius;
    setCircleArea(area.toFixed(2));
  }

  const handleCircleCancelClick = () => {
    setCircleRadiusInput("");
    setCircleArea("0.00");
  }

  return (
    <>
      <div className="w-6/12 border border-gray-500 mx-auto mt-20 mb-10 p-20 flex flex-col items-center rounded-2xl shadow-xl">

        <Image
          src={circle}
          alt="Calculator"
          width={150}
        />
        <h1 className="text-xl text-blue-600 font-bold my-5">
          คำนวณพื้นที่วงกลม
        </h1>

        <div className="w-full flex flex-col mb-3">
          <label className="mb-1">รัศมี (เซนติเมตร)</label>
          <input
            type="text"
            value={circleRadiusInput}
            className="border border-gray-300 p-2 rounded-xl"
            onChange={(e) => {
              const value = e.target.value.replace(/[^0-9.]/g, ""); // เอาเฉพาะเลขกับจุด
              setCircleRadiusInput(value);
            }}
          />
        </div>

        <button
          onClick={handleCircleCalClick}
          className="w-full text-lg text-white bg-blue-600 hover:bg-blue-800 cursor-pointer px-5 py-2 rounded-xl text-center mt-5 "
        >
          คำนวณ
        </button>

        <button
          onClick={handleCircleCancelClick}
          className="w-full text-lg text-white bg-red-500 hover:bg-red-700 cursor-pointer px-5 py-2 rounded-xl text-center mt-5 "
        >
          ยกเลิก
        </button>

        <div className="w-full flex flex-col justify-center items-center mt-4 text-center text-xl">

          <div>
            <span>พื้นที่วงกลม</span>
            <span className="font-bold text-3xl text-red-600 mx-5">{circleArea}</span>
            <span>ตารางเซนติเมตร</span>
          </div>
        </div>

      </div>
    </>
  );
}