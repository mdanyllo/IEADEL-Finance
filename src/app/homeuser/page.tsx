"use client";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import NavBarUser from "@/components/navbaruser";
import YearSelector from "@/components/yearselector";

export default function HomeUser() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <NavBarUser />
        <YearSelector />

        <div className="flex flex-col items-center justify-center mb-10 mt-10">
          <h2 className="text-center md:text-2xl text-xl font-bold mb-6">Seus dízimos</h2>

          <div className="shadow-lg rounded-lg overflow-x-auto md:w-3/4 m-2">
            <table className="w-full table-fixed border-collapse text-center">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-4 py-2 border w-1/3">Mês</th>
                  <th className="px-4 py-2 border w-1/3">Data</th>
                  <th className="px-4 py-2 border w-1/3">Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-gray-100">
                  <td className="px-4 py-2 border w-1/3">Jan</td>
                  <td className="px-4 py-2 border w-1/3">10-02-2025</td>
                  <td className="px-4 py-2 border w-1/3">R$ 25,00</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="px-4 py-2 border w-1/3">Fev</td>
                  <td className="px-4 py-2 border w-1/3">02-03-2025</td>
                  <td className="px-4 py-2 border w-1/3">R$ 20,00</td>
                </tr>
                <tr className="bg-white hover:bg-gray-100">
                  <td className="px-4 py-2 border w-1/3">Mar</td>
                  <td className="px-4 py-2 border w-1/3">05-04-2025</td>
                  <td className="px-4 py-2 border w-1/3">R$ 22,00</td>
                </tr>
                <tr className="bg-white hover:bg-gray-100">
                  <td className="px-4 py-2 border w-1/3">Abr</td>
                  <td className="px-4 py-2 border w-1/3">05-04-2025</td>
                  <td className="px-4 py-2 border w-1/3">R$ 22,00</td>
                </tr>
                <tr className="bg-white hover:bg-gray-100">
                  <td className="px-4 py-2 border w-1/3">Mai</td>
                  <td className="px-4 py-2 border w-1/3">05-04-2025</td>
                  <td className="px-4 py-2 border w-1/3">R$ 22,00</td>
                </tr>
                <tr className="bg-white hover:bg-gray-100">
                  <td className="px-4 py-2 border w-1/3">Jun</td>
                  <td className="px-4 py-2 border w-1/3">05-04-2025</td>
                  <td className="px-4 py-2 border w-1/3">R$ 22,00</td>
                </tr>
                <tr className="bg-white hover:bg-gray-100">
                  <td className="px-4 py-2 border w-1/3">Jul</td>
                  <td className="px-4 py-2 border w-1/3">05-04-2025</td>
                  <td className="px-4 py-2 border w-1/3">R$ 22,00</td>
                </tr>
                <tr className="bg-white hover:bg-gray-100">
                  <td className="px-4 py-2 border w-1/3">Ago</td>
                  <td className="px-4 py-2 border w-1/3">05-04-2025</td>
                  <td className="px-4 py-2 border w-1/3">R$ 22,00</td>
                </tr>
                <tr className="bg-white hover:bg-gray-100">
                  <td className="px-4 py-2 border w-1/3">Set</td>
                  <td className="px-4 py-2 border w-1/3">05-04-2025</td>
                  <td className="px-4 py-2 border w-1/3">R$ 22,00</td>
                </tr>
                <tr className="bg-white hover:bg-gray-100">
                  <td className="px-4 py-2 border w-1/3">Out</td>
                  <td className="px-4 py-2 border w-1/3">05-04-2025</td>
                  <td className="px-4 py-2 border w-1/3">R$ 22,00</td>
                </tr>
                <tr className="bg-white hover:bg-gray-100">
                  <td className="px-4 py-2 border w-1/3">Nov</td>
                  <td className="px-4 py-2 border w-1/3">05-04-2025</td>
                  <td className="px-4 py-2 border w-1/3">R$ 22,00</td>
                </tr>
                <tr className="bg-white hover:bg-gray-100">
                  <td className="px-4 py-2 border w-1/3">Dez</td>
                  <td className="px-4 py-2 border w-1/3">05-04-2025</td>
                  <td className="px-4 py-2 border w-1/3">R$ 22,00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
