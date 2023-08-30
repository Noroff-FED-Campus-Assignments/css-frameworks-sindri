export default function Login() {
    return (
      <>
      <div className="flex-auto mx-auto m-8">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 border-2 border-indigo-300 w-96 mx-auto rounded-xl">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            /> */}
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-8" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-l font-medium leading-6 text-gray-900">
                  USERNAME
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-l font-medium leading-6 text-gray-900">
                    PASSWORD
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-gray-700 hover:text-gray-900">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-4">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
              <button
  type="submit"
  className="flex w-full justify-center rounded-md bg-gradient-to-r from-blue-200 to-blue-100 px-3 py-4 text-lg font-bold leading-6 text-black shadow-sm hover:from-blue-200 hover:to-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-200"
>
  Sign in
</button>

              </div>
            </form>
          </div>
        </div>
        </div>
      </>
    )
  }