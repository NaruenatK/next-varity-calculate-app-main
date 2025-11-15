"use client" // กำหนดให้ components เป็นให้ client components

import Image from "next/image";
import calculator from "./../assets/images/calculator.png"
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function HomePage() {

  // สร้างตัวแปร Router เพื่อเรียกใช้คำสั่งสำหรับการ redirect ไปยัง component page อื่น
  // หรือ url อื่น
  const router = useRouter();

  //สร้างตัวแปร State สำหรับค่ารหัสที่ผู้ใช้ป้อน
  const [ucode, setUcode] = useState("");

  const handleAccessWebClick = () => {
    //validate รหัส
    if (ucode == "") {
      alert("กรุณาป้อนโค้ดก่อนเข้าใช้งาน")
      return;
    }

    if(ucode.toLowerCase() == "sau") {
    // เปิดไป component page /menu
    // window.location.href = "/menu"
    router.push("/menu");
    }
    else{
      alert("โค้ดไม่ถูกต้อง")
    }
  }

  return (
    <>
      <div className="w-4/12 border border-gray-500 mx-auto mt-20 mb-10 p-20 flex flex-col items-center rounded-2xl shadow-xl">

        <Image
          src={calculator}
          alt="Calculator"
          width={200}
        />
        <h1 className="text-3xl text-blue-600 font-bold mt-5">
          Varity Calculator V.1.0
        </h1>

        <h1 className="text-3xl text-blue-600 mt-2">
          โปรแกรมคำนวณ
        </h1>

        <div className="text-center flex flex-col w-full">
          <label className="my-4">ป้อนรหัสเข้าใช้งาน <span className="text-green-600">(ชื่อย่อ ม.เอเชีย)</span></label>
          <input value={ucode} onChange={(e) => setUcode(e.target.value)} className="border border-gray-500 rounded-xl p-2" type="text" />
        </div>

        <button type="button" onClick={ handleAccessWebClick }
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded mt-5 w-full" >
          เข้าใช้งาน
        </button>

      </div>
    </>
  );
}