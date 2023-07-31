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
          <h1 className="text-xl text-indigo-500 mb-5">Select your weight by height</h1>
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 text-base leading-7 text-gray-600 font-thin">
              <table className="table-auto min-w-full font-semibold">
                <thead>
                  <tr className="text-indigo-950">
                    <th colSpan={1} >Height</th>
                    <th colSpan={4} className="text-center p-2">Weight (lbs)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-indigo-400 text-white">{`4'10`}</td>
                    <td onClick={ (e) => setChartPoint("0")} className="0-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer" >{`<119`}</td>
                    <td onClick={ (e) => setChartPoint("1")} className="1-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">119 - 145</td>
                    <td onClick={ (e) => setChartPoint("2")} className="2-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">146 - 190</td>
                    <td onClick={ (e) => setChartPoint("3")} className="3-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">190+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-indigo-400 text-white">{`4'11`}</td>
                    <td onClick={ (e) => setChartPoint("0")} className="0-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">{`<124`}</td>
                    <td onClick={ (e) => setChartPoint("1")} className="1-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">124 - 147</td>
                    <td onClick={ (e) => setChartPoint("2")} className="2-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">148 - 197</td>
                    <td onClick={ (e) => setChartPoint("3")} className="3-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">190+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-indigo-400 text-white">{`4'11`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">{`<124`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">124 - 147</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">148 - 197</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">190+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-indigo-400 text-white">{`5'0`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">{`<128`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">128 - 152</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">153 - 203</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">203+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-indigo-400 text-white">{`5'1`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">{`<132`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">132 - 157</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">158 - 210</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">210+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-indigo-400 text-white" >{`5'2`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">{`<136`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">136 - 163</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">164 - 217</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">217+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-indigo-400 text-white">{`5'3`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">{`<141`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">141 - 168</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">169 - 224</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">224+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-indigo-400 text-white">{`5'4`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">{`<145`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">145 - 173</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">174 - 231</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">232+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-indigo-400 text-white">{`5'5`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">{`<150`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">150 - 179</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">180 - 239</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">240+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-indigo-400 text-white">{`5'6`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">{`<155`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">155 - 185</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">186 - 246</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">247+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-indigo-400 text-white">{`5'7`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">{`<159`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">159 - 190</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">191 - 254</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">255+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-indigo-400 text-white">{`5'9`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">{`<169`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">169 - 202</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">203 - 269</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">270+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-indigo-400 text-white">{`5'10`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">{`<174`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">174 - 208</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">209 - 277</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">278+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-indigo-400 text-white">{`5'11`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">{`<179`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">179 - 214</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">215 - 285</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">286+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-indigo-400 text-white">{`6'0`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">{`<184`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">184 - 220</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">221 - 293</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">293+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-indigo-400 text-white">{`6'1`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">{`<189`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">189 - 226</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">227 - 300</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">300+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-indigo-400 text-white">{`6'2`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">{`<194`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">194 - 232</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">233 - 310</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">311+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-indigo-400 text-white">{`6'3`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">{`<200`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">200 - 239</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">240 - 318</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">318+</td>
                  </tr>
                  <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                    <td className="p-2 bg-indigo-400 text-white">{`6'4`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">{`<205`}</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">205 - 245</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">246 - 327</td>
                    <td className="p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer">328+</td>
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



