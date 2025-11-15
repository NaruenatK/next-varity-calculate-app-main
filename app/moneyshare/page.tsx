"use client"

import Image from "next/image";
import calculator from "./../../assets/images/calculator.png"
import money from "./../../assets/images/money.png"
import Link from "next/link";
import { useState } from "react";

export default function Page() {

    //สร้างตัวแปร State ทำงานกับ เงิน คน แชร์กัน
    const [moneyInput, setMoneyInput] = useState("");
    const [person, setPerson] = useState("");
    const [moneyShare, setMoneyShare] = useState("0.00");

    const handleCalClick = () => {
        // validate รหัส
        if (moneyInput === "" || person === "" || person === "0" ) {
            alert ('กรุณาป้อนจำนวนเงินและจำนวนคนก่อนคำนวน และต้องเป็นไม่เป็น 0');
            return;
        }

        // แปลงค่าเป็นตัวเลข
        const moneyNum = parseFloat(moneyInput);
        const personNum = parseInt(person);

        if (isNaN(moneyNum) || isNaN(personNum) || personNum === 0) {
            alert('กรุณาป้อนข้อมูลเป็นตัวเลขที่ถูกต้อง และจำนวนคนต้องไม่เป็น 0');
            return;
        }

        const result = moneyNum / personNum;
        setMoneyShare(result.toFixed(2));
    }

    const handleCancelClick = () => {
        setMoneyInput("");
        setPerson("");
        setMoneyShare("0.00");
    }

    return (
        <>
            <div className="w-6/12 border border-gray-500 mx-auto mt-20 mb-10 p-20 flex flex-col items-center rounded-2xl shadow-xl">

            <Image
                src={calculator}
                alt="Calculator"
                width={150}
            />
            <h1 className="text-lg text-blue-600 font-bold mt-4">
                Varity Calculator V.1.0
            </h1>

            <h1 className="text-lg text-blue-600 mt-1 mb-4">
                โปรแกรมคำนวณ
            </h1>

            <div className="w-full border border-gray-300 flex flex-col items-center p-8 rounded-xl">

                <Image src={money} alt="money" width={70} className="mx-auto"></Image>
                <h1 className="text-lg text-blue-800 mt-1 mb-5">แชร์เงินกันเถอะ</h1> 

                <div className="w-full flex flex-col mb-3">
                    <label>ป้อนเงิน</label>
                    <input 
                        type="text" 
                        value={moneyInput} 
                        onChange={(e) => setMoneyInput(e.target.value)} 
                        className="border border-gray-300 p-2 rounded-xl" 
                    />
                </div>

                <div className="w-full flex flex-col">
                    <label>ป้อนคน</label>
                    <input 
                        type="text" 
                        value={person} 
                        onChange={(e) => setPerson(e.target.value)} 
                        className="border border-gray-300 p-2 rounded-xl" 
                    />
                </div>

                <button 
                    onClick={handleCalClick} 
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

                <div className="w-full flex justify-center items-center mt-4 text-center text-xl">
                    <span>หารกันคนละ</span>
                    <span className="font-bold text-3xl text-red-600 mx-5">{moneyShare}</span>
                    <span>บาท</span>
                </div>

            </div>

            </div> 
        </>
    );
}
