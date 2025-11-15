"use client";
import Image from "next/image";
import bmr from "./../../../assets/images/bmr.png";
import { use, useState } from "react";

export default function Page() {

  const [sexInput, setSexInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [weightInput, setWeightInput] = useState("");
  const [heightInput, setHeightInput] = useState("");
  const [bmrValue, setBmrValue] = useState("0");

  const handleBmrCalClick = () => {
    if (weightInput === "" || weightInput === "0" || heightInput === "" || heightInput === "0" ||
      ageInput === "" || ageInput === "0" || (sexInput !== "ชาย" && sexInput !== "หญิง")) {
      alert('กรุณาป้อนข้อมูลให้ครบถ้วนและถูกต้องก่อนคำนวน และส่วนสูงกับน้ำหนักต้องไม่เป็น 0');
      return;
    }

    let result = 0;

    if (sexInput === "ชาย") {
      result = 66 + (13.7 * parseFloat(weightInput)) + (5 * parseFloat(heightInput)) - (6.8 * parseFloat(ageInput));
    } else if (sexInput === "หญิง") {
      result = 655 + (9.6 * parseFloat(weightInput)) + (1.8 * parseFloat(heightInput)) - (4.7 * parseFloat(ageInput));
    }

    setBmrValue(result.toFixed(0));

  }

  const handleBmrCancelClick = () => {
    setSexInput("");
    setAgeInput("");
    setWeightInput("");
    setHeightInput("");
  }


  return (
    <>
      <div className="w-6/12 border border-gray-500 mx-auto mt-20 mb-10 p-20 flex flex-col items-center rounded-2xl shadow-xl">


        <h1 className="text-lg text-blue-600 font-bold mt-4">
          Varity Calculator V.1.0
        </h1>

        <h1 className="text-lg text-blue-600 mt-1 mb-4">
          โปรแกรมคำนวณ
        </h1>

        <div className="w-full border border-gray-300 flex flex-col items-center p-8 rounded-xl">

          <Image src={bmr} alt="bmr" width={70} className="mx-auto"></Image>
          <h1 className="text-lg text-blue-800 font-bold mt-1 mb-5">วะค่า BMR</h1>

          <div className="w-full flex flex-col mb-3">
            <label className="mb-1">เพศ</label>
            <input
              type="text"
              value={sexInput}
              className="border border-gray-300 p-2 rounded-xl"
              onChange={(e) => {
                setSexInput(e.target.value);
              }}

            />
          </div>

          <div className="w-full flex flex-col mb-3">
            <label className="mb-1">อายุ</label>
            <input
              type="text"
              value={ageInput}
              className="border border-gray-300 p-2 rounded-xl"
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9.]/g, ""); // เอาเฉพาะเลขกับจุด
                setAgeInput(value);
              }}
            />
          </div>

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
            onClick={handleBmrCalClick}
            className="w-full text-lg text-white bg-blue-600 hover:bg-blue-800 cursor-pointer px-5 py-2 rounded-xl text-center mt-5 "
          >
            คำนวณ
          </button>

          <button
            onClick={handleBmrCancelClick}
            className="w-full text-lg text-white bg-red-500 hover:bg-red-700 cursor-pointer px-5 py-2 rounded-xl text-center mt-5 "
          >
            ยกเลิก
          </button>

          <div className="w-full flex flex-col justify-center items-center mt-4 text-center text-xl">

            <div>
              <span>ค่า BMR =</span>
              <span className="font-bold text-3xl text-red-600 mx-5">{bmrValue}</span>
              <span>แคลอรี่ต่อวัน</span>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}
