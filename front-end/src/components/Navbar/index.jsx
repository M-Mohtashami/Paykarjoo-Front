import Link from "next/link";

export default function Navbar({ onClose }) {
  return (
    <div dir="rtl" className="border-2 border-gray-300 relative p-2  m-5 ">
      <button onClick={onClose} className="absolute top-2 left-2">
        ×
      </button>
      <ul className="flex justify-start gap-10 ">
        <li className=" ">
          <Link href="/mabahes">مباحث</Link>
        </li>
        <li className=" ">
          <Link href="/podcast">پادکست</Link>
        </li>
        <li className=" ">
          <Link href="/film">فیلم</Link>
        </li>
        <li className=" ">
          <Link href="/gallery-tasavir">گالری تصاویر</Link>
        </li>
        <li className=" ">
          <Link href="/darbareh-man">درباره من</Link>
        </li>
      </ul>
    </div>
  );
}
