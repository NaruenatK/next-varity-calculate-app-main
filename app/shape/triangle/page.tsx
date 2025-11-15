"use client";
import Image from "next/image";
import triangle from "./../../../assets/images/triangle.png"
import { useState } from "react";

export default function Page() {

  const [triangleBaseInput, setTriangleBaseInput] = useState("");
  const [triangleHeightInput, setTriangleHeightInput] = useState("");
  const [triangleArea, setTriangleArea] = useState("0.00");

  const handleTriangleCalClick = () => {
    if (triangleBaseInput === "" || triangleBaseInput === "0" || triangleHeightInput === "" || triangleHeightInput === "0") {
      alert('กรุณาป้อนฐานและสูงให้ถูกต้องก่อนคำนวน และฐานกับสูงต้องไม่เป็น 0');
      return;
    }
    const base = parseFloat(triangleBaseInput);
    const height = parseFloat(triangleHeightInput);
    const area = 0.5 * base * height;
    setTriangleArea(area.toFixed(2));
    
  }

  const handleTriangleCancelClick = () => {
    setTriangleBaseInput("");
    setTriangleHeightInput("");
    setTriangleArea("0.00");
  }

  return (
    <>
      <div className="w-6/12 border border-gray-500 mx-auto mt-20 mb-10 p-20 flex flex-col items-center rounded-2xl shadow-xl">

        <Image
          src={triangle}
          alt="Calculator"
          width={150}
        />
        <h1 className="text-xl text-blue-600 font-bold my-5">
          คำนวณพื้นที่สามเหลี่ยม
        </h1>

        <div className="w-full flex flex-col mb-3">
          <label className="mb-1">ฐาน (เซนติเมตร)</label>
          <input
            type="text"
            value={triangleBaseInput}
            className="border border-gray-300 p-2 rounded-xl"
            onChange={(e) => {
              const value = e.target.value.replace(/[^0-9.]/g, ""); // เอาเฉพาะเลขกับจุด
              setTriangleBaseInput(value);
            }}
          />
        </div>
        
        <div className="w-full flex flex-col mb-3">
          <label className="mb-1">สูง (เซนติเมตร)</label>
          <input
            type="text"
            value={triangleHeightInput}
            className="border border-gray-300 p-2 rounded-xl"
            onChange={(e) => {
              const value = e.target.value.replace(/[^0-9.]/g, ""); // เอาเฉพาะเลขกับจุด
              setTriangleHeightInput(value);
            }}
          />
        </div>

        <button
          onClick={handleTriangleCalClick}
          className="w-full text-lg text-white bg-blue-600 hover:bg-blue-800 cursor-pointer px-5 py-2 rounded-xl text-center mt-5 "
        >
          คำนวณ
        </button>

        <button
          onClick={handleTriangleCancelClick}
          className="w-full text-lg text-white bg-red-500 hover:bg-red-700 cursor-pointer px-5 py-2 rounded-xl text-center mt-5 "
        >
          ยกเลิก
        </button>

        <div className="w-full flex flex-col justify-center items-center mt-4 text-center text-xl">

          <div>
            <span>พื้นที่สามเหลี่ยม</span>
            <span className="font-bold text-3xl text-red-600 mx-5">{triangleArea}</span>
            <span>ตารางเซนติเมตร</span>
          </div>
        </div>

      </div>
    </>
  );
}