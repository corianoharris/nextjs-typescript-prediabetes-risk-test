export default function Home() {

  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg p-4">
        <div className="mx-auto min-w-full min-w-[50%]">
          <h1 className="text-3xl text-black">Prediabetes Risk Test</h1>
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 py-8 text-base leading-7 text-gray-600 font-thin">
              <div className="flex flex-col">
                <label className="inline-flex items-center mb-2 font-medium tracking-wide sm:text-sm md:text-md " htmlFor="age">
                  How old are you?
                </label>
                <select className="select max-w-xs outline-dashed p-2 rounded" id="age">
                  <option>Younger than 40 years</option>
                  <option>40-49 years</option>
                  <option>50-59 years</option>
                  <option>60 years or older</option>
                </select>
              </div>

              <div className="lex flex-col">
                <label className="inline-flex items-center font-medium" htmlFor="gender">
                  Are you a man or woman?
                </label>
                <div className="flex-col space-x-4">
                  <label className="inline-flex items-center" htmlFor="man">
                    <input
                      id="man"
                      type="radio"
                      className="form-radio h-5 w-5 text-yellow-600"
                    />
                    <span className="ml-2 text-gray-700">man</span>
                  </label>
                  <label className="inline-flex items-center mt-3" htmlFor="woman">
                    <input
                      id="woman"
                      type="radio"
                      className="form-radio h-5 w-5 text-yellow-600"
                    />
                    <span className="ml-2 text-gray-700">woman</span>
                  </label>
                </div>
              </div>

              <div className="lex flex-col">
                <label className="inline-flex items-center font-medium" htmlFor="gastational-diabetes">
                  If you are a woman, have you ever been diagnosed with gastational
                  diabetes?
                </label>
                <div className="flex-col space-x-4">
                  <label className="inline-flex items-center" htmlFor="gastational-diabetes-yes">
                    <input
                      id="gastational-diabetes-yes"
                      type="radio"
                      className="form-radio h-5 w-5 text-yellow-600"
                    />
                    <span className="ml-2 text-gray-700">yes</span>
                  </label>
                  <label className="inline-flex items-center mt-3" htmlFor="gastational-diabetes-no">
                    <input
                      id="gastational-diabetes-no"
                      type="radio"
                      className="form-radio h-5 w-5 text-yellow-600"
                    />
                    <span className="ml-2 text-gray-700">no</span>
                  </label>
                </div>
              </div>

              <div className="lex flex-col">
                <label className="inline-flex items-center font-medium" htmlFor="family">
                  Do you have a mother, father, sister, brother, with diabetes?
                </label>
                <div className="flex-col space-x-4">
                  <label className="inline-flex items-center" htmlFor="family-yes">
                    <input
                      id="family-yes"
                      type="radio"
                      className="form-radio h-5 w-5 text-yellow-600"
                    />
                    <span className="ml-2 text-gray-700">yes</span>
                  </label>
                  <label className="inline-flex items-center mt-3" htmlFor="family-no">
                    <input
                      id="family-no"
                      type="radio"
                      className="form-radio h-5 w-5 text-yellow-600"
                    />
                    <span className="ml-2 text-gray-700">no</span>
                  </label>
                </div>
              </div>

              <div className="lex flex-col">
                <label className="inline-flex items-center font-medium" htmlFor="high-blood-pressure">
                  Have you been diagnosed with high blood pressure?
                </label>
                <div className="flex-col space-x-4">
                  <label className="inline-flex items-center" htmlFor="high-blood-pressure-yes">
                    <input
                      id="high-blood-pressure-yes"
                      type="radio"
                      className="form-radio h-5 w-5 text-yellow-600"
                    />
                    <span className="ml-2 text-gray-700">yes</span>
                  </label>
                  <label className="inline-flex items-center mt-3" htmlFor="high-blood-pressure-no">
                    <input
                      id="high-blood-pressure-no"
                      type="radio"
                      className="form-radio h-5 w-5 text-yellow-600"
                    />
                    <span className="ml-2 text-gray-700">no</span>
                  </label>
                </div>
              </div>

              <div className="lex flex-col">
                <label className="inline-flex items-center font-medium" htmlFor="active">
                  Are you physically active?
                </label>
                <div className="flex-col space-x-4">
                  <label className="inline-flex items-center" htmlFor="active-yes">
                    <input
                      id="active-yes"
                      type="radio"
                      className="form-radio h-5 w-5 text-yellow-600"
                    />
                    <span className="ml-2 text-gray-700">yes</span>
                  </label>
                  <label className="inline-flex items-center mt-3" htmlFor="active-no">
                    <input
                      id="active-no"
                      type="radio"
                      className="form-radio h-5 w-5 text-yellow-600"
                    />
                    <span className="ml-2 text-gray-700">no</span>
                  </label>
                </div>
              </div>
            </div>
            <div className=" p-2 text-base font-semibold leading-7  mt-2 text-right" >
            <button className="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100">Next &rarr;</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}