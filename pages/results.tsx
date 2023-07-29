import React, {useState} from 'react';


const Result = () => {
  const [isLowRisk, setIsLowRisk] = useState(false);
  const [isHighRisk, setIsHighRisk] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-slate-100">
      <div className="relative bg-white px-2 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:min-w-lg sm:rounded-lg md:min-w-[60%]">
        <div className="mx-auto min-w-full ">
          <h1 className="text-xl text-center text-black mb-5">{`Your score is 6 of 10`}</h1>
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 text-base leading-7 text-gray-600 font-thin">
              { isLowRisk && (<div className="p-6">
                <h3 className="text-md text-black mb-2 font-bold">You are low risk for prediabetes.</h3>
                <p className="text-md text-black">Based on your score, you’re at low risk for prediabetes. Keep up the good work! These healthy habits will help keep your risk low:</p>
                <ul className="mt-2 mb-2 font-semibold">
                  <li>Get at least 150 minutes of physical activity a week.</li>
                  <li> Keep your weight in a healthy range.</li>
                  <li>Eat healthy foods, including lots of fruits and veggies.</li>
                  <li>Drink more water and fewer sugary drinks.</li>
                  <li>Don’t smoke.</li>
                </ul>
              </div>
              )}

              {isHighRisk && (
                <div className="p-6">
                  <h3 className="text-md text-black mb-2 font-bold">You are high risk for prediabetes.</h3>
                  <p className="text-md text-black">Based on your score, you’re likely to have prediabetes, but only your doctor can diagnose it for sure. Share your results with your doctor and ask for a simple blood test to confirm them.</p>
                  <p className="text-md text-black">Center for Disease Control National Diabetes Prevention Program lifestyle change program gives you the steps you need to cut your risk for type 2 diabetes in half.</p>
                  <a className="text-black text-xs text-black-700 hover:bg-grey-800" target="_blank" href="http://www.cdc.gov/">Chart Centers for Disease Control</a>
                </div>)}
            </div> 
            <div className=" p-3 text-base font-semibold leading-7 text-right " >
              <button className="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100" onClick={() => window.location.href = "/"}>&larr; Retake Test</button>
            </div>
          </div>
          <a className="text-black text-xs text-slate-500 hover:bg-grey-700" target="_blank" href="http://www.cdc.gov/">Chart Centers for Disease Control</a>
        </div>
      </div>
    </main>
  )
}

export default Result;