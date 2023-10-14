import Link from "next/link";

export default function Navbar({ onClose }) {
  return (
    <div className="border-2 border-gray-300 relative p-2 mx-16 mt-5">
      <button onClick={onClose} className="absolute top-2 right-2 ">
        ×
      </button>
      <ul className="flex justify-end space-x-4 mr-10">
        <li>
          <Link href="/darbareh-man">درباره من</Link>
        </li>
        <li>
          <Link href="/gallery-tasavir">گالری تصاویر</Link>
        </li>
        <li>
          <Link href="/film">فیلم</Link>
        </li>
        <li>
          <Link href="/podcast">پادکست</Link>
        </li>
        <li>
          <Link href="/mabahes">مباحث</Link>
        </li>
      </ul>
    </div>
  );
}
