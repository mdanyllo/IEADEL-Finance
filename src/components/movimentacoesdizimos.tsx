export default function Movimentacoes() {
    return (
        <div className="flex justify-center mb-8">      
            <div className="md:w-3/4 m-2 md:mt-10 mt-16 shadow-lg rounded-lg overflow-x-auto">
                <table className="w-full table-fixed border-collapse text-center">
                    <thead className="bg-black text-white">
                    <tr>
                        <th className="px-4 py-2 border w-1/3">Data</th>
                        <th className="px-4 py-2 border w-1/3">Nome</th>
                        <th className="px-4 py-2 border w-1/3">Valor</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-white hover:bg-gray-100">
                        <td className="px-4 py-2 border w-1/3">default</td>
                        <td className="px-4 py-2 border w-1/3">default</td>
                        <td className="px-4 py-2 border w-1/3">default</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100">
                        <td className="px-4 py-2 border w-1/3">default</td>
                        <td className="px-4 py-2 border w-1/3">default</td>
                        <td className="px-4 py-2 border w-1/3">default</td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-100">
                        <td className="px-4 py-2 border w-1/3">default</td>
                        <td className="px-4 py-2 border w-1/3">default</td>
                        <td className="px-4 py-2 border w-1/3">default</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}