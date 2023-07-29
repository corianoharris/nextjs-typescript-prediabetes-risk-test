
const Chart = () => {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="relative bg-white px-2 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:min-w-lg sm:rounded-lg md:min-w-[60%]">
        <div className="mx-auto min-w-full ">
          <h1 className="text-xl text-black mb-5">Select your weight by height</h1>
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 text-base leading-7 text-gray-600 font-thin">
              <table className="table-auto min-w-full font-semibold">
                <thead>
                  <tr className="">
                    <th colSpan={1} >Height</th>
                    <th colSpan={4} className="text-center p-2">Weight (lbs)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2">{`4'10`}</td>
                    <td className="p-2  border border-slate-600 rounded">{`<119`}</td>
                    <td className="p-2  border border-slate-600 rounded">119 - 145</td>
                    <td className="p-2  border border-slate-600 rounded">146 - 189</td>
                    <td className="p-2  border border-slate-600 rounded">190+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2 bg-slate-200">
                    <td className="p-2">{`4'10`}</td>
                    <td className="p-2  border border-slate-600 rounded">{`<119`}</td>
                    <td className="p-2  border border-slate-600 rounded">{`119 - 145`}</td>
                    <td className="p-2  border border-slate-600 rounded">146-189</td>
                    <td className="p-2  border border-slate-600 rounded">190+</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className=" p-2 text-base font-semibold leading-7  mt-2 text-right" >
            <button className="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100">Calculate</button>
            </div>
          </div>
        </div>
      </div>
    </main>












  )
}

export default Chart;



