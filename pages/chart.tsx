import React, { useState, useEffect, useRef } from 'react';






const Chart = () => {
  const [chartPoint, setChartPoint] = useState<string>(" ");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [isErrorMessage, setIsErrorMessage] = useState<boolean>(false);

  const buttonRef = useRef<HTMLButtonElement>(null);

  if (typeof document !== 'undefined') {
    const cells: any = Array.from(document.getElementsByClassName("point"));
    for(var i = 0; i < cells.length; i++) {
      var cell = cells[i];
      cell.onclick = function() {
        [].forEach.call(cells, function (el: any) {
          el.style.backgroundColor = "";
        });
        this.style.backgroundColor = "#c7d2fe";
      }
    }
  }

const redirectToResults = () => {
  window.location.href = "/results";
}

useEffect(() => {

  if (chartPoint !== " ") {
    setIsDisabled(false);
    setIsErrorMessage(false);
    buttonRef?.current?.classList.remove("disabled");
    buttonRef?.current?.classList.remove("cursor-not-allowed");
    buttonRef?.current?.classList.add("hover:bg-indigo-500");
    buttonRef?.current?.classList.add("hover:text-indigo-100");

  } else {
    setIsDisabled(true);
    setIsErrorMessage(true);
    buttonRef?.current?.classList.add("disabled");
    buttonRef?.current?.classList.add("cursor-not-allowed");
    buttonRef?.current?.classList.remove("hover:bg-indigo-500");
    buttonRef?.current?.classList.remove("hover:text-indigo-100");
  }


  const addValueToStorage = () => {
    const data: string | null = localStorage.getItem("points");
    if (data !== null) {
      let points = JSON.parse(data);
      points[7] = chartPoint;
      localStorage.setItem("points", JSON.stringify(points));
    }
  }
  addValueToStorage();
}, [chartPoint])


return (

  <main className="flex min-h-screen flex-col items-center justify-between md:p-4 bg-slate-100">
    <div className="relative bg-white px-2 pt-20 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:min-w-lg sm:rounded-lg md:min-w-[60%] m-auto">
      <div className="mx-auto min-w-full ">
        <div className='text-right text-md font-semibold mb-4'>
          <a className="text-black text-xs text-center text-slate-900 hover:text-slate-500 underline underline-offset-4 tracking-wider" target="_self" href="./"> &larr; Back to form</a>
        </div>
        <h1 className="text-sm text-indigo-500 mb-5 bg-slate-200 p-2 rounded md:w-96 shadow-xl" tabIndex={0}>Please select your weight according to your height</h1>


        <div className="divide-y divide-gray-300/50">
          <div className="space-y-6 text-base leading-7 text-gray-600 font-thin">
          {isErrorMessage ? (
              <h5 tabIndex={0}>Please select your weight to enable button</h5>
            ) : null

            }
            <table className="table-auto min-w-full font-semibold" tabIndex={0}>
              <thead>
                <tr className="text-indigo-950">
                  <th colSpan={1} tabIndex={0}>Height</th>
                  <th colSpan={4} className="text-center p-2" tabIndex={0}> Weight (lbs)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                  <td className="p-2 bg-indigo-400 text-white">{`4'10`}</td>
                  <td onClick={(e) => setChartPoint("0")} className="point 0-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " >{`<119`}</td>
                  <td onClick={(e) => setChartPoint("1")} className="point 1-point p-2  p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer  ">119 - 145</td>
                  <td onClick={(e) => setChartPoint("2")} className="point 2-point p-2  p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer ">146 - 190</td>
                  <td onClick={(e) => setChartPoint("3")} className=" point 3-point p-2  p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer ">190+</td>
                </tr>
                <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                  <td className="p-2 bg-indigo-400 text-white">{`4'11`}</td>
                  <td className=" point 0-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("0")}>{`<124`}</td>
                  <td className=" point 1-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("1")}>124 - 147</td>
                  <td className=" point 2-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("2")}>148 - 197</td>
                  <td className=" point 3-point p-2   border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("3")}>197+</td>
                </tr>

                <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                  <td className="p-2 bg-indigo-400 text-white">{`5'0`}</td>
                  <td className="point 0-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("0")} >{`<128`}</td>
                  <td className="point 1-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("1")} >128 - 152</td>
                  <td className="point 2-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("2")} >153 - 203</td>
                  <td className="point 3-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("3")} >203+</td>
                </tr>
                <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                  <td className="p-2 bg-indigo-400 text-white">{`5'1`}</td>
                  <td className="point 0-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("0")} >{`<132`}</td>
                  <td className="point 1-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("1")} >132 - 157</td>
                  <td className="point 2-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("2")} >158 - 210</td>
                  <td className="point 3-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("3")} >210+</td>
                </tr>
                <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                  <td className="p-2 bg-indigo-400 text-white" >{`5'2`}</td>
                  <td className="point 0-point p-2 border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("0")} >{`<136`}</td>
                  <td className="point 1-point p-2 border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("1")} >136 - 163</td>
                  <td className="point 2-point p-2 border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("2")} >164 - 217</td>
                  <td className="point 1-point p-2 border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("3")} >217+</td>
                </tr>
                <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                  <td className="p-2 bg-indigo-400 text-white">{`5'3`}</td>
                  <td className="point 0-point p-2 border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("0")} >{`<141`}</td>
                  <td className="point 1-point p-2 border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("1")} >141 - 168</td>
                  <td className="point 2-point p-2 border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("2")} >169 - 224</td>
                  <td className="point 3-point p-2 border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("3")} >224+</td>
                </tr>
                <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                  <td className="p-2 bg-indigo-400 text-white">{`5'4`}</td>
                  <td className="point 0-point p-2 border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("0")} >{`<145`}</td>
                  <td className="point 1-point p-2 border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("1")} >145 - 173</td>
                  <td className="point 2-point p-2 border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("2")} >174 - 231</td>
                  <td className="point 3-point p-2 border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("3")} >232+</td>
                </tr>
                <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                  <td className="p-2 bg-indigo-400 text-white">{`5'5`}</td>
                  <td className="point 0-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("0")} >{`<150`}</td>
                  <td className="point 1-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("1")} >150 - 179</td>
                  <td className="point 2-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("2")} >180 - 239</td>
                  <td className="point 3-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("3")} >240+</td>
                </tr>
                <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                  <td className="p-2 bg-indigo-400 text-white">{`5'6`}</td>
                  <td className="point 0-point p-2 border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("0")} >{`<155`}</td>
                  <td className="point 1-point p-2 border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("1")} >155 - 185</td>
                  <td className="point 2-point p-2 border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("2")} >186 - 246</td>
                  <td className="point 3-point p-2 border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("3")} >247+</td>
                </tr>
                <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                  <td className="p-2 bg-indigo-400 text-white">{`5'7`}</td>
                  <td className="point 0-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("0")} >{`<159`}</td>
                  <td className="point 1-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("1")} >159 - 190</td>
                  <td className="point 2-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("2")} >191 - 254</td>
                  <td className="point 3-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("3")} >255+</td>
                </tr>
                <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                  <td className="p-2 bg-indigo-400 text-white">{`5'9`}</td>
                  <td className="point 0-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("0")} >{`<169`}</td>
                  <td className="point 1-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("1")} >169 - 202</td>
                  <td className="point 2-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("2")} >203 - 269</td>
                  <td className="point 3-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("3")} >270+</td>
                </tr>
                <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                  <td className="p-2 bg-indigo-400 text-white">{`5'10`}</td>
                  <td className="point 0-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("0")} >{`<174`}</td>
                  <td className="point 1-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("1")} >174 - 208</td>
                  <td className="point 2-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("2")} >209 - 277</td>
                  <td className="point 3-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("3")} >278+</td>
                </tr>
                <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                  <td className="p-2 bg-indigo-400 text-white">{`5'11`}</td>
                  <td className="point 0-point p-2 border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("0")} >{`<179`}</td>
                  <td className="point 1-point p-2 border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("1")} >179 - 214</td>
                  <td className="point 2-point p-2 border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("2")} >215 - 285</td>
                  <td className="point 3-point p-2 border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("3")} >286+</td>
                </tr>
                <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                  <td className="p-2 bg-indigo-400 text-white">{`6'0`}</td>
                  <td className="point 0-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("0")} >{`<184`}</td>
                  <td className="point 1-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("1")} >184 - 220</td>
                  <td className="point 2-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("2")} >221 - 293</td>
                  <td className="point 3-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("3")} >293+</td>
                </tr>
                <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                  <td className="p-2 bg-indigo-400 text-white">{`6'1`}</td>
                  <td className="point 0-point p-2 border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("0")} >{`<189`}</td>
                  <td className="point 1-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("1")} >189 - 226</td>
                  <td className="point 2-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("2")} >227 - 300</td>
                  <td className="point 3-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("3")} >300+</td>
                </tr>
                <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                  <td className="p-2 bg-indigo-400 text-white">{`6'2`}</td>
                  <td className="point 0-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("0")} >{`<194`}</td>
                  <td className="point 1-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("1")} >194 - 232</td>
                  <td className="point 2-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("2")} >233 - 310</td>
                  <td className="point 3-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("3")} >311+</td>
                </tr>
                <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                  <td className="p-2 bg-indigo-400 text-white">{`6'3`}</td>
                  <td className="point 0-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("0")} >{`<200`}</td>
                  <td className="point 1-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("1")} >200 - 239</td>
                  <td className="point 2-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("2")} >240 - 318</td>
                  <td className="point 3-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("3")} >318+</td>
                </tr>
                <tr className="text-left sm: text-sm/[17px] md:text-md text-center  border border-slate-500 rounded mt-2 mb-2">
                  <td className="p-2 bg-indigo-400 text-white">{`6'4`}</td>
                  <td className="point 0-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("3")} >{`<205`}</td>
                  <td className="point 1-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("3")} >205 - 245</td>
                  <td className="point 2-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("3")} >246 - 327</td>
                  <td className="point 3-point p-2  border border-slate-600 hover:bg-indigo-200 text-black cursor-pointer " onClick={(e) => setChartPoint("3")} >328+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className=" p-3 text-base font-semibold leading-7 text-right mt-3" >
            <button ref={buttonRef} disabled={isDisabled} className="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100" onClick={redirectToResults}>Get Results</button>
          </div>
        </div>
        <a className="text-black text-xs text-slate-900 hover:text-slate-500 underline underline-offset-4" target="_blank" href="https://www.cdc.gov/diabetes/prevention/index.html">data from national diabetes prevention program</a>
      </div>
    </div>
  </main>
)
}

export default Chart;



