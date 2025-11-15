import Image from "next/image";
import shapes from "./../../assets/images/shapes.png";
import circle from "./../../assets/images/circle.png"
import triangle from "./../../assets/images/triangle.png"
import square from "./../../assets/images/square.png"
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="w-6/12 border border-gray-500 mx-auto mt-20 mb-10 p-20 flex flex-col items-center rounded-2xl shadow-xl">

        <Image
          src={shapes}
          alt="Calculator"
          width={150}
        />
        <h1 className="text-xl text-blue-600 font-bold mt-5">
          Varity Calculator V.1.0 โปรแกรมคำนวณ
        </h1>

        <h1 className="text-xl text-blue-600 mt-2 mb-4">
          คำนวณพื้นที่รูปทรงต่าง ๆ
        </h1>

        <div className="w-full flex justify-center gap-4 text-center">

          <Link href="/shape/circle" className="text-xl text-white bg-blue-600 px-5 py-2 rounded-xl">
            <Image src={circle} alt="money" width={50} className="mx-auto"></Image>
            วงกลม
          </Link>

          <Link href="/shape/triangle" className="text-xl text-white bg-blue-600 px-5 py-2 rounded-xl">
            <Image src={triangle} alt="money" width={50} className="mx-auto"></Image>
            สามเหลี่ยม
          </Link>

          <Link href="/shape/square" className="text-xl text-white bg-blue-600 px-5 py-2 rounded-xl">
            <Image src={square} alt="money" width={50} className="mx-auto"></Image>
            สี่เหลี่ยม
          </Link>


        </div>

      </div>
    </>
  );
}