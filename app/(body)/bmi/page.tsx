"use client";
import Image from "next/image";
import bmi from "./../../../assets/images/bmi.png";
import { useState } from "react";

export default function Page() {

  const [weightInput, setWeightInput] = useState("");
  const [heightInput, setHeightInput] = useState("");
  const [bmiValue, setBmiValue] = useState("0.00");
  const [bmiCategory, setBmiCategory] = useState("???");

  const handleBmiCalClick = () => {
    if (weightInput === "" || weightInput === "0" || heightInput === "" || heightInput === "0") {
      alert('กรุณาป้อนน้ำหนักและส่วนสูงก่อนคำนวน และต้องไม่เป็น 0');
      return;
    }

    const heightM = parseFloat(heightInput) / 100; // แปลงเป็นเมตร

    const result = parseFloat(weightInput) / (heightM * heightM);
    setBmiValue(result.toFixed(2));

    if (result < 18.5) {
      setBmiCategory("น้ำหนักต่ำกว่าเกณฑ์");
    } else if (result >= 18.5 && result < 23) {
      setBmiCategory("น้ำหนักปกติ");
    } else if (result >= 23 && result < 25) {
      setBmiCategory("น้ำหนักเกิน");
    } else if (result >= 25 && result < 30) {
      setBmiCategory("โรคอ้วนระดับ 1");
    } else {
      setBmiCategory("โรคอ้วนระดับ 2");
    }

  }

  const handleCancelClick = () => {
    setWeightInput("");
    setHeightInput("");
    setBmiValue("0.00");
    setBmiCategory("???");
  }

  return (
    <>
      <>
        <div className="w-6/12 border border-gray-500 mx-auto mt-20 mb-10 p-20 flex flex-col items-center rounded-2xl shadow-xl">


          <h1 className="text-lg text-blue-600 font-bold mt-4">
            Varity Calculator V.1.0
          </h1>

          <h1 className="text-lg text-blue-600 mt-1 mb-4">
            โปรแกรมคำนวณ
          </h1>

          <div className="w-full border border-gray-300 flex flex-col items-center p-8 rounded-xl">

            <Image src={bmi} alt="bmi" width={70} className="mx-auto"></Image>
            <h1 className="text-lg text-blue-800 text-bold mt-1 mb-5">วัดค่า BMI</h1>

            <div className="w-full flex flex-col mb-3">
              <label className="mb-1">ป้อนน้ำหนัก (กิโมกรัม)</label>
              <input
                type="text"
                value={weightInput}
                className="border border-gray-300 p-2 rounded-xl"
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9.]/g, ""); // เอาเฉพาะเลขกับจุด
                  setWeightInput(value);
                }}

              />
            </div>

            <div className="w-full flex flex-col">
              <label className="mb-1">ป้อนส่วนสูง (เซนติเมตร)</label>
              <input
                type="text"
                value={heightInput}
                className="border border-gray-300 p-2 rounded-xl"
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9.]/g, ""); // เอาเฉพาะเลขกับจุด
                  setHeightInput(value);
                }}
              />
            </div>

            <button
              onClick={handleBmiCalClick}
              className="w-full text-lg text-white bg-blue-600 hover:bg-blue-800 cursor-pointer px-5 py-2 rounded-xl text-center mt-5 "
            >
              คำนวณ
            </button>

            <button
              onClick={handleCancelClick}
              className="w-full text-lg text-white bg-red-500 hover:bg-red-700 cursor-pointer px-5 py-2 rounded-xl text-center mt-5 "
            >
              ยกเลิก
            </button>

            <div className="w-full flex flex-col justify-center items-center mt-4 text-center text-xl">

              <div>
                <span>ค่า BMI =</span>
                <span className="font-bold text-3xl text-red-600 mx-5">{bmiValue}</span>
              </div>
              <span className="mt-2 font-bold text-2xl text-blue-600">{bmiCategory}</span>

            </div>

          </div>

        </div>
      </>
    </>
  );
}
