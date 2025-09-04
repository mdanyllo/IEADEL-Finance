"use client";
import { useState } from "react";

const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

interface MonthSelectorProps {
  initialMonth?: number;
  initialYear?: number;
}

export default function MonthSelector({
  initialMonth,
  initialYear,
}: MonthSelectorProps) {
  const today = new Date();
  const [mes, setMes] = useState(initialMonth || today.getMonth() + 1);
  const [ano, setAno] = useState(initialYear || today.getFullYear());

  const prevMonth = () => {
    if (mes === 1) {
      setMes(12);
      setAno(ano - 1);
    } else {
      setMes(mes - 1);
    }
  };

  const nextMonth = () => {
    if (mes === 12) {
      setMes(1);
      setAno(ano + 1);
    } else {
      setMes(mes + 1);
    }
  };

  return (
    <div className="flex items-center gap-6 justify-center py-4 mt-4">
      <button
        onClick={prevMonth}
        className="px-3 py-1 text-xl bg-gray-200 rounded hover:bg-gray-300"
      >
        &lt;
      </button>
      <span className="text-lg font-semibold text-black">
        {meses[mes - 1]} {ano}
      </span>
      <button
        onClick={nextMonth}
        className="px-3 py-1 text-xl bg-gray-200 rounded hover:bg-gray-300"
      >
        &gt;
      </button>
    </div>
  );
}
