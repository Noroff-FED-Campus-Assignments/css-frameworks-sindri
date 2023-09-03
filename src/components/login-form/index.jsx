export default function Login() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-300">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-8" action="/profile" method="#">
            <div>
              <div className="flex items-start">
                <label
                  htmlFor="email"
                  className="block text-l font-medium leading-6 text-gray-900 dark:text-gray-300"
                >
                  USERNAME
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  placeholder=""
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-2 border-gray-900 py-2.5 text-center text-gray-900 shadow-sm ring-2 ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-gray-300"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-l font-medium leading-6 text-gray-900 dark:text-gray-300"
                >
                  PASSWORD
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-gray-900 hover:text-gray-900 dark:text-gray-300"
                  >
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
                  className="block w-full rounded-md border-2 border-gray-900 py-2.5 text-gray-900 shadow-sm ring-2 ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-gray-300"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center w-86 rounded-md bg-gradient-to-r from-green-950 to-green-700 px-3 py-4 text-lg font-bold leading-6 text-white shadow-sm hover:from-green-800 hover:to-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-200"
              >
                Sign in
              </button>
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                className="w-86 rounded-md bg-gradient-to-r from-green-950 to-green-800 px-3 py-4 text-lg font-bold leading-6 text-white shadow-sm hover:from-green-800 hover:to-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-200"
              >
                Create a new user
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
