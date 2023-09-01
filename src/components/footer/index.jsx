function Footer() {
  return (
    <>
      <footer className="bg-[var(--primary)] rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0"
            >
              <img
                src="../public/assets/media/sindri-logo.svg"
                className="h-8 mr-3"
                alt="Sindri Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                SindriConnect
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-blue-1000 sm:mb-0 dark:text-gray-400">
              <li>
                <a
                  href="#"
                  className="mr-4 hover:underline md:mr-6 text-blue-100"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mr-4 hover:underline md:mr-6 text-blue-100"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mr-4 hover:underline md:mr-6 text-blue-100"
                >
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-blue-100">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-50">
            © 2023{" "}
            <a href="#" className="hover:underline text-blue-100">
              SindriConnect™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
