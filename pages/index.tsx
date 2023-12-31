import React, { useState, useEffect, useRef } from 'react';

const Home = () => {
  const [questionOne, setQuestionOne] = useState<string>(" ");
  const [questionTwo, setQuestionTwo] = useState<string>(" ");
  const [questionThree, setQuestionThree] = useState<string>(" ");
  const [questionFour, setQuestionFour] = useState<string>(" ");
  const [questionFive, setQuestionFive] = useState<string>(" ");
  const [questionSix, setQuestionSix] = useState<string>(" ");
  const [questionSeven, setQuestionSeven] = useState<string>(" ");
  const [points] = useState<string[]>([])

  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [isErrorMessage, setIsErrorMessage] = useState<boolean>(false);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const mulitpleAttr: boolean = false;

  const redirectToChart = () => {
    window.location.href = "/chart";
  }



  useEffect(() => {
    if ((questionOne !== " " && questionTwo !== " " && questionThree !== " " && questionFour !== " " && questionFive !== " " && questionSix !== " " && questionSeven !== " ")) {
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

    // if (buttonRef?.current?.disabled) {
    //   setIsErrorMessage(true);
    // } else setIsErrorMessage(false);


    // storing questions values to local storage
    const storageValue = (points: string[]) => {
      points[0] = questionOne;
      points[1] = questionTwo;
      points[2] = questionThree;
      points[3] = questionFour;
      points[4] = questionFive;
      points[5] = questionSix;
      points[6] = questionSeven;

      localStorage.setItem("points", JSON.stringify(points));
    }

    storageValue(points);
  }, [points, questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, buttonRef])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-slate-100">
      <div className="relative bg-white pt-20 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg p-4">
        <div className="mx-auto min-w-full min-w-[50%]">
          <h1 className="text-3xl text-indigo-500" role='heading' tabIndex={0}>Prediabetes Risk Test</h1>
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 py-8 text-base leading-7 text-gray-600 font-thin">
            {isErrorMessage ? (
              <h5 role='heading' tabIndex={0} >Please answer all questions to enable button</h5>
            ) : null

            }
              <div className="flex flex-col">
                <label className="inline-flex items-center mb-2 font-medium tracking-wide sm:text-sm md:text-md" htmlFor="age" tabIndex={0} aria-label='How old are you?'>
                  How old are you?
                </label>
                <select className="select max-w-xs outline-dashed outline-indigo-600 p-2 rounded bg-white text-indigo-900 font-normal" multiple={mulitpleAttr} id="age " defaultValue={questionOne} onChange={(
                  ev: React.ChangeEvent<HTMLSelectElement>,
                ): void => {
                  ev.preventDefault();
                  setQuestionOne(ev.target.value);
                  points[0] = questionOne;
                }}>
                  <option value={questionOne} disabled>select your option...</option>
                  <option value={0}>Younger than 40 years</option>
                  <option value={1}>40-49 years</option>
                  <option value={2}>50-59 years</option>
                  <option value={3}>60 years or older</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="inline-flex items-center mb-2 font-medium tracking-wide sm:text-sm md:text-md" htmlFor="ethnicity" tabIndex={0} aria-label='What is your ethnicity?'>
                  What is your ethnicity?
                </label>
                <select className="select max-w-xs outline-dashed outline-indigo-600 p-2 rounded bg-white text-indigo-900 font-normal" multiple={mulitpleAttr} id="ethnicity" defaultValue={questionTwo} onChange={(
                  ev: React.ChangeEvent<HTMLSelectElement>,
                ): void => {
                  ev.preventDefault();
                  setQuestionTwo(ev.target.value)
                }}>
                  <option value={questionTwo} disabled >select your option...</option>
                  <option value={0}>White/Caucasian</option>
                  <option value={2}>American Indian/Alaska Native</option>
                  <option value={2}>Alaska Native</option>
                  <option value={3}>Asian American</option>
                  <option value={2}>African American</option>
                  <option value={2}>Hispanic/Latino</option>
                  <option value={2}>Native Hawaiian</option>
                  <option value={2}>Pacific Islander</option>
                  <option value={0}>Other</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="inline-flex items-center font-medium" htmlFor="gender" tabIndex={0} aria-label='Are you a man or woman?'>
                  Are you a man or woman?
                </label>
                <div className="flex-col space-x-4">
                  <label className="inline-flex items-center" htmlFor="man" aria-label='man' >
                    <input
                      id="man"
                      type="radio"
                      name="gender"
                      className="form-radio h-5 w-5 accent-indigo-400 checked:accent-indigo-600"
                      value={1}
                      onChange={(
                        ev: React.ChangeEvent<HTMLInputElement>,
                      ): void => {
                        setQuestionThree(ev.target.value)
                      }}
                    />
                    <span className="ml-2 text-gray-700">man</span>
                  </label>
                  <label className="inline-flex items-center mt-3" htmlFor="woman" aria-label='woman'>
                    <input
                      id="woman"
                      type="radio"
                      name="gender"
                      className="form-radio h-5 w-5 accent-indigo-400 checked:accent-indigo-600"
                      value={0}
                      onChange={(
                        ev: React.ChangeEvent<HTMLInputElement>,
                      ): void => {
                        setQuestionThree(ev.target.value)
                      }}
                    />
                    <span className="ml-2 text-gray-700">woman</span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col">
                <label className="inline-flex items-center font-medium" htmlFor="gastational-diabetes" tabIndex={0} aria-label='If you are a woman, have you ever been diagnosed with gastational
                  diabetes?'>
                  If you are a woman, have you ever been diagnosed with gastational
                  diabetes?
                </label>
                <div className="flex-col space-x-4">
                  <label className="inline-flex items-center" htmlFor="gastational-diabetes-yes" aria-label='yes'>
                    <input
                      id="gastational-diabetes-yes"
                      type="radio"
                      name="gastational"
                      className="form-radio h-5 w-5 accent-indigo-400 checked:accent-indigo-600"
                      value={1}
                      onChange={(
                        ev: React.ChangeEvent<HTMLInputElement>,
                      ): void => {
                        setQuestionFour(ev.target.value)
                      }}
                    />
                    <span className="ml-2 text-gray-700">yes</span>
                  </label>
                  <label className="inline-flex items-center mt-3" htmlFor="gastational-diabetes-no" aria-label='no'>
                    <input
                      id="gastational-diabetes-no"
                      type="radio"
                      name="gastational"
                      className="form-radio h-5 w-5 accent-indigo-400 checked:accent-indigo-600"
                      value={0}
                      onChange={(
                        ev: React.ChangeEvent<HTMLInputElement>,
                      ): void => {
                        setQuestionFour(ev.target.value)
                      }}
                    />
                    <span className="ml-2 text-gray-700">no</span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col">
                <label className="inline-flex items-center font-medium" htmlFor="family" tabIndex={0} aria-label='Do you have a mother, father, sister, brother, with diabetes?'>
                  Do you have a mother, father, sister, brother, with diabetes?
                </label>
                <div className="flex-col space-x-4">
                  <label className="inline-flex items-center" htmlFor="family-yes" aria-label='yes'>
                    <input
                      id="family-yes"
                      type="radio"
                      name="family"
                      className="form-radio h-5 w-5 accent-indigo-400 checked:accent-indigo-600"
                      value={1}
                      onChange={(
                        ev: React.ChangeEvent<HTMLInputElement>,
                      ): void => {
                        setQuestionFive(ev.target.value)
                      }}
                    />
                    <span className="ml-2 text-gray-700">yes</span>
                  </label>
                  <label className="inline-flex items-center mt-3" htmlFor="family-no" aria-label='no'>
                    <input
                      id="family-no"
                      type="radio"
                      name="family"
                      className="form-radio h-5 w-5 accent-indigo-400 checked:accent-indigo-600"
                      value={0}
                      onChange={(
                        ev: React.ChangeEvent<HTMLInputElement>,
                      ): void => {
                        setQuestionFive(ev.target.value)
                      }}
                    />
                    <span className="ml-2 text-gray-700">no</span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col">
                <label className="inline-flex items-center font-medium" htmlFor="high-blood-pressure" tabIndex={0} aria-label='Have you been diagnosed with high blood pressure?'>
                  Have you been diagnosed with high blood pressure?
                </label>
                <div className="flex-col space-x-4">
                  <label className="inline-flex items-center" htmlFor="high-blood-pressure-yes" aria-label='yes'>
                    <input
                      id="high-blood-pressure-yes"
                      type="radio"
                      name="blood-pressure"
                      className="form-radio h-5 w-5 accent-indigo-400 checked:accent-indigo-600"
                      value={1}
                      onChange={(
                        ev: React.ChangeEvent<HTMLInputElement>,
                      ): void => {
                        setQuestionSix(ev.target.value)
                      }}
                    />
                    <span className="ml-2 text-gray-700">yes</span>
                  </label>
                  <label className="inline-flex items-center mt-3" htmlFor="high-blood-pressure-no" aria-label='no'>
                    <input
                      id="high-blood-pressure-no"
                      type="radio"
                      name="blood-pressure"
                      className="form-radio h-5 w-5 accent-indigo-400 checked:accent-indigo-600"
                      value={0}
                      onChange={(
                        ev: React.ChangeEvent<HTMLInputElement>,
                      ): void => {
                        setQuestionSix(ev.target.value)
                      }}
                    />
                    <span className="ml-2 text-gray-700">no</span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col">
                <label className="inline-flex items-center font-medium" htmlFor="active" tabIndex={0} aria-label='Are you physically active?'>
                  Are you physically active?
                </label>
                <div className="flex-col space-x-4">
                  <label className="inline-flex items-center" htmlFor="active-yes" aria-label='yes'>
                    <input
                      id="active-yes"
                      type="radio"
                      name="active"
                      className="form-radio h-5 w-5 accent-indigo-400 checked:accent-indigo-600"
                      value={1}
                      onChange={(
                        ev: React.ChangeEvent<HTMLInputElement>,
                      ): void => {
                        setQuestionSeven(ev.target.value)
                      }}
                    />
                    <span className="ml-2 text-gray-700">yes</span>
                  </label>
                  <label className="inline-flex items-center mt-3" htmlFor="active-no" aria-label='no'>
                    <input
                      id="active-no"
                      type="radio"
                      name="active"
                      className="form-radio h-5 w-5 accent-indigo-400 checked:accent-indigo-600"
                      value={0}
                      onChange={(
                        ev: React.ChangeEvent<HTMLInputElement>,
                      ): void => {
                        setQuestionSeven(ev.target.value)
                      }}
                    />
                    <span className="ml-2 text-gray-700">no</span>
                  </label>
                </div>
              </div>
            </div>
            <div className=" p-3 text-base font-semibold leading-7 text-right " >
              <button ref={buttonRef} disabled={isDisabled} className="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline cursor-not-allowed" onClick={redirectToChart}>Next &rarr;</button>
            </div>
          </div>
          <a className="text-black text-xs text-slate-900 hover:text-slate-500 underline underline-offset-4" target="_blank" href="http://www.cdc.gov/">Centers for Disease Control and Prevention</a>
        </div>
      </div>
    </main>
  )
}

export default Home;