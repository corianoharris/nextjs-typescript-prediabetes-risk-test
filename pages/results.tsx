import React, { useState, useEffect } from 'react';


const Result = () => {
  const [score, setScore] = useState<number>(0);
  const [isLowRisk, setIsLowRisk] = useState<boolean>(false);
  const [isModerateRisk, setIsModerateRisk] = useState<boolean>(false);
  const [isHighRisk, setIsHighRisk] = useState<boolean>(false);

  const clearScore = () => {
    localStorage.clear();
    window.location.href = "/";
  }

  useEffect(() => {
    let points;
    const data = localStorage.getItem("points");
    if (data !== null) {
      points = JSON.parse(data);
    }
    const numbers = points.map((point: string) => Number(point))
    setScore(numbers.reduce((prev: any, curr: any) => prev + curr))
    
    if (score <= 4) {
      setIsLowRisk(true);
    } else {
      setIsLowRisk(false);
    }
    
    if (score >=5 && score <=6) {
      setIsModerateRisk(true);
    } else {
      setIsModerateRisk(false);
    }
    
    if (score >= 7) {
     setIsHighRisk(true);
   } else {
     setIsHighRisk(false);
   }
  }, [score])



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-slate-100">
      <div className="relative bg-white px-2 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:min-w-lg sm:rounded-lg md:max-w-[60%] m-auto">
        <div className="mx-auto min-w-full tracking-wider">
          <h1 className="text-xl text-center text-indigo-950 mb-5">{`Your score is ${score} of 11`}</h1>
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 text-base leading-7 text-indigo-300">
              {isLowRisk && (
                <div className="p-6">
                  <h3 className="text-md text-indigo-700 font-bold mb-2">You are low risk for prediabetes.</h3>
                  <p className="text-md text-indigo-500 font-medium bg-slate-200 p-2 rounded">Based on your score, you’re at low risk for prediabetes. Keep up the good work! These healthy habits will help keep your risk low:</p>
                  <ul className="mt-2 mb-2 text-indigo-800 font-semibold list-disc">
                    <li>Get at least 150 minutes of physical activity a week.</li>
                    <li> Keep your weight in a healthy range.</li>
                    <li>Eat healthy foods, including lots of fruits and veggies.</li>
                    <li>Drink more water and fewer sugary drinks.</li>
                    <li>Don’t smoke.</li>
                  </ul>
                </div>
              )}

              {isModerateRisk && (
                <div className="p-6 text-indigo-300 leading-7 tracking-wider">
                  <h3 className="text-md text-indigo-700 mb-2 font-bold">You are moderate risk for prediabetes.</h3>
                  <p className="text-md text-indigo-500 font-medium bg-slate-200 p-2 rounded" >Based on your score, there is a potential risk of developing prediabetes, but only your doctor can diagnose it for sure. Share your results with your doctor and ask for a simple blood test to confirm them.</p>
                  <p className="text-md mt-2 text-indigo-500 font-medium bg-slate-200 p-2 rounded">Center for Disease Control National Diabetes Prevention Program lifestyle change program gives you the steps you need to cut your risk for type 2 diabetes in half.</p>
                  <a className="text-black text-xs text-slate-900 hover:bg-grey-700 underline mt-2 tracking-wider" target="_blank" href="https://www.cdc.gov/prediabetes/risktest/Prediabetes">Centers for Disease Control Prediabetes</a>
                </div>
              )}

              {isHighRisk && (
                <div className="p-6 text-indigo-300 leading-7 tracking-wider">
                  <h3 className="text-md text-indigo-700 mb-2 font-bold">You are high risk for prediabetes.</h3>
                  <p className="text-md text-indigo-500 font-medium bg-slate-200 p-2 rounded" >Based on your score, you’re likely to have prediabetes, but only your doctor can diagnose it for sure. Share your results with your doctor and ask for a simple blood test to confirm them.</p>
                  <p className="text-md mt-2 text-indigo-500 font-medium bg-slate-200 p-2 rounded">Center for Disease Control National Diabetes Prevention Program lifestyle change program gives you the steps you need to cut your risk for type 2 diabetes in half.</p>
                  <a className="text-black text-xs text-slate-900 hover:bg-grey-700 underline mt-2 tracking-wider" target="_blank" href="https://www.cdc.gov/prediabetes/risktest/Prediabetes">Centers for Disease Control Prediabetes</a>
                </div>
              )}
            </div>
            <div className=" p-3 text-base font-semibold leading-7 text-right " >
              <button className="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100 tracking-wider" onClick={clearScore}>&larr; Retake Test</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Result;