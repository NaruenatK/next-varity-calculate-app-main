import Image from "next/image";
import calculator from "./../../assets/images/calculator.png"
import money from "./../../assets/images/money.png"
import bmi from "./../../assets/images/bmi.png"
import bmr from "./../../assets/images/bmr.png"
import shapes from "./../../assets/images/shapes.png"
import Link from "next/link";

export default function Page() {
  return (
    <>
       <div className="w-6/12 border border-gray-500 mx-auto mt-20 mb-10 p-20 flex flex-col items-center rounded-2xl shadow-xl">

        <Image
          src={calculator}
          alt="Calculator"
          width={150}
        />
        <h1 className="text-xl text-blue-600 font-bold mt-5">
          Varity Calculator V.1.0
        </h1>

        <h1 className="text-xl text-blue-600 mt-2 mb-4">
          โปรแกรมคำนวณ
        </h1>

        <div className="w-full flex justify-center gap-4 text-center">

           <Link href="/moneyshare" className="text-xl text-white bg-blue-600 px-5 py-2 rounded-xl">
           <Image src={money} alt="money" width={50} className="mx-auto"></Image>
           แชร์เงินกันเถอะ
           </Link> 

           <Link href="/bmi" className="text-xl text-white bg-blue-600 px-5 py-2 rounded-xl">
           <Image src={bmi} alt="money" width={50} className="mx-auto"></Image>
           BMI
           </Link> 

           <Link href="/bmr" className="text-xl text-white bg-blue-600 px-5 py-2 rounded-xl">
           <Image src={bmr} alt="money" width={50} className="mx-auto"></Image>
           BMR
           </Link> 

           <Link href="/shape" className="text-xl text-white bg-blue-600 px-5 py-2 rounded-xl">
           <Image src={shapes} alt="money" width={50} className="mx-auto"></Image>
           พื้นที่รูปทรง
           </Link> 

        </div>

      </div> 
    </>
  );
}