import React, {useState,useEffect} from 'react';






const Chart = () => {
  const [chartPoint, setChartPoint] = useState<string>(" ");

  const redirectToResults = () => {
    window.location.href = "/results";
  }

  useEffect(() => {
    
    const addValueToStorage = () => {
      const data = localStorage.getItem("points");
      if (data !== null) {
        let points = JSON.parse(data);
        points[7] = chartPoint;
        localStorage.setItem("points", JSON.stringify(points));  
     }
    }
    addValueToStorage();
  }, [chartPoint])


  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-slate-100">
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
                    <td className="p-2 bg-slate-200">{`4'10`}</td>
                    <td onClick={ (e) => setChartPoint("0")} className="0-point p-2  border border-slate-600 bg-teal-500 opacity-50 transition duration-300 ease-in-out hover:opacity-70 text-black" >{`<119`}</td>
                    <td onClick={ (e) => setChartPoint("1")} className="1-point p-2  border border-slate-600 rounded">119 - 145</td>
                    <td onClick={ (e) => setChartPoint("2")} className="2-point p-2  border border-slate-600 rounded">146 - 190</td>
                    <td onClick={ (e) => setChartPoint("3")} className="3-point p-2  border border-slate-600 rounded">190+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-slate-200">{`4'11`}</td>
                    <td onClick={ (e) => setChartPoint("0")} className="0-point p-2  border border-slate-600 rounded">{`<124`}</td>
                    <td onClick={ (e) => setChartPoint("1")} className="1-point p-2  border border-slate-600 rounded">124 - 147</td>
                    <td onClick={ (e) => setChartPoint("2")} className="2-point p-2  border border-slate-600 rounded">148 - 197</td>
                    <td onClick={ (e) => setChartPoint("3")} className="3-point p-2  border border-slate-600 rounded">190+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-slate-200">{`4'11`}</td>
                    <td className="p-2  border border-slate-600 rounded">{`<124`}</td>
                    <td className="p-2  border border-slate-600 rounded">124 - 147</td>
                    <td className="p-2  border border-slate-600 rounded">148 - 197</td>
                    <td className="p-2  border border-slate-600 rounded">190+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-slate-200">{`5'0`}</td>
                    <td className="p-2  border border-slate-600 rounded">{`<128`}</td>
                    <td className="p-2  border border-slate-600 rounded">128 - 152</td>
                    <td className="p-2  border border-slate-600 rounded">153 - 203</td>
                    <td className="p-2  border border-slate-600 rounded">203+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-slate-200">{`5'1`}</td>
                    <td className="p-2  border border-slate-600 rounded">{`<132`}</td>
                    <td className="p-2  border border-slate-600 rounded">132 - 157</td>
                    <td className="p-2  border border-slate-600 rounded">158 - 210</td>
                    <td className="p-2  border border-slate-600 rounded">210+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-slate-200" >{`5'2`}</td>
                    <td className="p-2  border border-slate-600 rounded">{`<136`}</td>
                    <td className="p-2  border border-slate-600 rounded">136 - 163</td>
                    <td className="p-2  border border-slate-600 rounded">164 - 217</td>
                    <td className="p-2  border border-slate-600 rounded">217+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-slate-200">{`5'3`}</td>
                    <td className="p-2  border border-slate-600 rounded">{`<141`}</td>
                    <td className="p-2  border border-slate-600 rounded">141 - 168</td>
                    <td className="p-2  border border-slate-600 rounded">169 - 224</td>
                    <td className="p-2  border border-slate-600 rounded">224+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-slate-200">{`5'4`}</td>
                    <td className="p-2  border border-slate-600 rounded">{`<145`}</td>
                    <td className="p-2  border border-slate-600 rounded">145 - 173</td>
                    <td className="p-2  border border-slate-600 rounded">174 - 231</td>
                    <td className="p-2  border border-slate-600 rounded">232+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-slate-200">{`5'5`}</td>
                    <td className="p-2  border border-slate-600 rounded">{`<150`}</td>
                    <td className="p-2  border border-slate-600 rounded">150 - 179</td>
                    <td className="p-2  border border-slate-600 rounded">180 - 239</td>
                    <td className="p-2  border border-slate-600 rounded">240+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-slate-200">{`5'6`}</td>
                    <td className="p-2  border border-slate-600 rounded">{`<155`}</td>
                    <td className="p-2  border border-slate-600 rounded">155 - 185</td>
                    <td className="p-2  border border-slate-600 rounded">186 - 246</td>
                    <td className="p-2  border border-slate-600 rounded">247+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-slate-200">{`5'7`}</td>
                    <td className="p-2  border border-slate-600 rounded">{`<159`}</td>
                    <td className="p-2  border border-slate-600 rounded">159 - 190</td>
                    <td className="p-2  border border-slate-600 rounded">191 - 254</td>
                    <td className="p-2  border border-slate-600 rounded">255+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-slate-200">{`5'9`}</td>
                    <td className="p-2  border border-slate-600 rounded">{`<169`}</td>
                    <td className="p-2  border border-slate-600 rounded">169 - 202</td>
                    <td className="p-2  border border-slate-600 rounded">203 - 269</td>
                    <td className="p-2  border border-slate-600 rounded">270+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-slate-200">{`5'10`}</td>
                    <td className="p-2  border border-slate-600 rounded">{`<174`}</td>
                    <td className="p-2  border border-slate-600 rounded">174 - 208</td>
                    <td className="p-2  border border-slate-600 rounded">209 - 277</td>
                    <td className="p-2  border border-slate-600 rounded">278+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-slate-200">{`5'11`}</td>
                    <td className="p-2  border border-slate-600 rounded">{`<179`}</td>
                    <td className="p-2  border border-slate-600 rounded">179 - 214</td>
                    <td className="p-2  border border-slate-600 rounded">215 - 285</td>
                    <td className="p-2  border border-slate-600 rounded">286+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-slate-200">{`6'0`}</td>
                    <td className="p-2  border border-slate-600 rounded">{`<184`}</td>
                    <td className="p-2  border border-slate-600 rounded">184 - 220</td>
                    <td className="p-2  border border-slate-600 rounded">221 - 293</td>
                    <td className="p-2  border border-slate-600 rounded">293+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-slate-200">{`6'1`}</td>
                    <td className="p-2  border border-slate-600 rounded">{`<189`}</td>
                    <td className="p-2  border border-slate-600 rounded">189 - 226</td>
                    <td className="p-2  border border-slate-600 rounded">227 - 300</td>
                    <td className="p-2  border border-slate-600 rounded">300+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-slate-200">{`6'2`}</td>
                    <td className="p-2  border border-slate-600 rounded">{`<194`}</td>
                    <td className="p-2  border border-slate-600 rounded">194 - 232</td>
                    <td className="p-2  border border-slate-600 rounded">233 - 310</td>
                    <td className="p-2  border border-slate-600 rounded">311+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-slate-200">{`6'3`}</td>
                    <td className="p-2  border border-slate-600 rounded">{`<200`}</td>
                    <td className="p-2  border border-slate-600 rounded">200 - 239</td>
                    <td className="p-2  border border-slate-600 rounded">240 - 318</td>
                    <td className="p-2  border border-slate-600 rounded">318+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-slate-200">{`6'4`}</td>
                    <td className="p-2  border border-slate-600 rounded">{`<205`}</td>
                    <td className="p-2  border border-slate-600 rounded">205 - 245</td>
                    <td className="p-2  border border-slate-600 rounded">246 - 327</td>
                    <td className="p-2  border border-slate-600 rounded">328+</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className=" p-3 text-base font-semibold leading-7 text-right mt-3" >
              <button className="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100" onClick={redirectToResults}>Calculate</button>
            </div>
          </div>
          <a className="text-black text-xs text-slate-500 hover:bg-grey-500" target="_blank" href="https://www.cdc.gov/diabetes/prevention/index.html">chart from national diabetes prevention program</a>
        </div>
      </div>
    </main>
  )
}

export default Chart;



