"use client";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import NavBarUser from "@/components/navbaruser";
import MonthSelector from "@/components/monthselector";

export default function HomeUser() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <NavBarUser />
      <MonthSelector />

      <div className="flex flex-col items-center justify-center md:mt-10 mt-16">
        <h2 className="text-center md:text-2xl text-xl font-bold mb-6">Seus dízimos</h2>

        <div className="shadow-lg rounded-lg overflow-x-auto md:w-3/4 m-2">
          <table className="w-full table-fixed border-collapse text-center">
            <thead className="bg-black text-white">
              <tr>
                <th className="px-4 py-2 border w-1/3">Data</th>
                <th className="px-4 py-2 border w-1/3">Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white hover:bg-gray-100">
                <td className="px-4 py-2 border w-1/3">10-02-2025</td>
                <td className="px-4 py-2 border w-1/3">R$ 25,00</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100">
                <td className="px-4 py-2 border w-1/3">02-03-2025</td>
                <td className="px-4 py-2 border w-1/3">R$ 20,00</td>
              </tr>
              <tr className="bg-white hover:bg-gray-100">
                <td className="px-4 py-2 border w-1/3">05-04-2025</td>
                <td className="px-4 py-2 border w-1/3">R$ 22,00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
