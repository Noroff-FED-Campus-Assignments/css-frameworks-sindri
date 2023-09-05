// {/* component from flowbite.com */}
function Footer() {
  return (
    <>
      <footer className="bg-[var(--primary)] rounded-lg shadow m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.3333 9.9H13.8883C13.4333 8.624 12.2417 7.7 10.8333 7.7C9.425 7.7 8.23333 8.624 7.77833 9.9H4.33333C3.97583 9.9 2.16667 9.79 2.16667 7.7V6.6C2.16667 4.587 3.835 4.4 4.33333 4.4H15.3617C15.8167 5.676 17.0083 6.6 18.4167 6.6C19.2786 6.6 20.1053 6.25232 20.7148 5.63345C21.3243 5.01458 21.6667 4.17521 21.6667 3.3C21.6667 2.42479 21.3243 1.58542 20.7148 0.966548C20.1053 0.347678 19.2786 0 18.4167 0C17.0083 0 15.8167 0.924 15.3617 2.2H4.33333C2.58917 2.2 0 3.366 0 6.6V7.7C0 10.934 2.58917 12.1 4.33333 12.1H7.77833C8.23333 13.376 9.425 14.3 10.8333 14.3C12.2417 14.3 13.4333 13.376 13.8883 12.1H17.3333C17.6908 12.1 19.5 12.21 19.5 14.3V15.4C19.5 17.413 17.8317 17.6 17.3333 17.6H6.305C5.85 16.324 4.65833 15.4 3.25 15.4C2.38805 15.4 1.5614 15.7477 0.951903 16.3665C0.34241 16.9854 0 17.8248 0 18.7C0 19.5752 0.34241 20.4146 0.951903 21.0335C1.5614 21.6523 2.38805 22 3.25 22C4.65833 22 5.85 21.076 6.305 19.8H17.3333C19.0775 19.8 21.6667 18.623 21.6667 15.4V14.3C21.6667 11.077 19.0775 9.9 17.3333 9.9ZM18.4167 2.2C18.704 2.2 18.9795 2.31589 19.1827 2.52218C19.3859 2.72847 19.5 3.00826 19.5 3.3C19.5 3.59174 19.3859 3.87153 19.1827 4.07782C18.9795 4.28411 18.704 4.4 18.4167 4.4C18.1293 4.4 17.8538 4.28411 17.6506 4.07782C17.4475 3.87153 17.3333 3.59174 17.3333 3.3C17.3333 3.00826 17.4475 2.72847 17.6506 2.52218C17.8538 2.31589 18.1293 2.2 18.4167 2.2ZM3.25 19.8C2.96268 19.8 2.68713 19.6841 2.48397 19.4778C2.2808 19.2715 2.16667 18.9917 2.16667 18.7C2.16667 18.4083 2.2808 18.1285 2.48397 17.9222C2.68713 17.7159 2.96268 17.6 3.25 17.6C3.53732 17.6 3.81287 17.7159 4.01603 17.9222C4.2192 18.1285 4.33333 18.4083 4.33333 18.7C4.33333 18.9917 4.2192 19.2715 4.01603 19.4778C3.81287 19.6841 3.53732 19.8 3.25 19.8Z"
                  fill="url(#paint0_linear_126_504)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_126_504"
                    x1="10.8333"
                    y1="0"
                    x2="10.8333"
                    y2="22"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3594CA" />
                    <stop stop-color="#75C3C8" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                </defs>
              </svg>

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
