import React, { useState, useEffect } from 'react';
import Loader from '@/components/loader';


const Result = () => {
  const [isloading, setIsLoading] = useState<boolean>(true);
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
      setIsLoading(false);
      setIsLowRisk(true);
    } else {
      setIsLowRisk(false);
    }
    
    if (score >= 5 && score <= 6) {
      setIsLoading(false);
      setIsModerateRisk(true);
    } else {
      setIsModerateRisk(false);
    }
    
    if (score >= 7) {
    setIsLoading(false);
    setIsHighRisk(true);
    } else {
     setIsHighRisk(false);
   }
  }, [score])



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-slate-100">
      <div className="relative bg-white px-2 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:min-w-lg sm:rounded-lg md:max-w-[60%] m-auto">
        <div className="mx-auto min-w-full tracking-wider">
          <h1 className="text-xl text-center text-indigo-950 mb-5">{`Your score is `}<span className='mr-2 text-4xl text-indigo-500 underline underline-offset-4 font-black'>{`${score}`}</span><span>out of</span><span className='number-of-questions ml-2 text-3xl'>11</span></h1>
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 text-base leading-7 text-indigo-300">
              {isloading && (
                <h3 className="text-md text-indigo-700 font-bold mb-2">Calculating your results...</h3>
              )}
              {isLowRisk && (
                <div className="p-6 mb-2 text-indigo-300 leading-7 tracking-wider">
                  <h3 className="text-md text-indigo-700 font-bold mb-2">You are low risk for prediabetes.</h3>
                  <p className="text-md text-indigo-500 font-medium bg-slate-200 p-2 rounded shadow-xl">Based on your score, you’re at low risk for prediabetes. Keep up the good work! These healthy habits will help keep your risk low:</p>
                  <ul className="mt-4 mb-2 text-indigo-800 font-semibold list-disc">
                    <li>Get at least 150 minutes of physical activity a week.</li>
                    <li> Keep your weight in a healthy range.</li>
                    <li>Eat healthy foods, including lots of fruits and veggies.</li>
                    <li>Drink more water and fewer sugary drinks.</li>
                    <li>Don’t smoke.</li>
                  </ul>
                </div>
              )}

              {isModerateRisk && (
                <div className="p-6 mb-2 text-indigo-300 leading-7 tracking-wider">
                  <h3 className="text-md text-indigo-700 mb-2 font-bold">You are moderate risk for prediabetes.</h3>
                  <p className="text-md text-indigo-500 font-medium bg-slate-200 p-2 rounded shadow-xl" >Based on your score, there is a potential risk of developing prediabetes, but only your doctor can diagnose it for sure. Share your results with your doctor and ask for a simple blood test to confirm them.</p>
                  <p className="text-md mt-6 mb-4 text-indigo-500 font-medium bg-slate-200 p-2 rounded shadow-xl">Center for Disease Control National Diabetes Prevention Program lifestyle change program gives you the steps you need to cut your risk for type 2 diabetes in half.</p>
                  <a className="text-black text-xs text-slate-900 hover:text-slate-500 underline underline-offset-4 tracking-wider" target="_blank" href="https://www.cdc.gov/prediabetes/risktest/Prediabetes">Centers for Disease Control Prediabetes</a>
                </div>
              )}

              {isHighRisk && (
                <div className="p-6 mb-2 text-indigo-300 leading-7 tracking-wider">
                  <h3 className="text-md text-indigo-700 mb-2 font-bold">You are high risk for prediabetes.</h3>
                  <p className="text-md text-indigo-500 font-medium bg-slate-200 p-2 rounded shadow-xl" >Based on your score, you’re likely to have prediabetes, but only your doctor can diagnose it for sure. Share your results with your doctor and ask for a simple blood test to confirm them.</p>
                  <p className="text-md mt-6 mb-4 text-indigo-500 font-medium bg-slate-200 p-2 rounded shadow-xl">Center for Disease Control National Diabetes Prevention Program lifestyle change program gives you the steps you need to cut your risk for type 2 diabetes in half.</p>
                  <a className="text-black text-xs text-slate-900 hover:text-slate-500 underline underline-offset-4 mt-2 tracking-wider" target="_blank" href="https://www.cdc.gov/prediabetes/risktest/Prediabetes">Centers for Disease Control Prediabetes</a>
                </div>
              )}
            </div>
            <div className=" p-3 text-base font-semibold leading-7 text-left " >
            <p className="text-sm mt-2 text-indigo-600 font-medium bg-slate-200 p-2 rounded shadow-xl tracking-wider leading-7">If you African American, Hispanic/Latino American, American Indian/Alaska Native, or Pacific Islander, you are at a higher risk for prediabetes and type 2 diabetes. Also if you are Asian American, you are at increased risk for type 2 diabetes at a lower weight (about 15 pounds lower than weight in first weight column). Talk to your doctor to see if you should have your blood sugar tested.</p>
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