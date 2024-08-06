export default function Home() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-100">
        <div className="relative w-96">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500 to-blue-200 rounded-lg transform rotate-[-10deg] z-0"></div>
          <div className="bg-white p-8 rounded-lg shadow-lg relative z-10">
            <h2 className="text-2xl font-bold mb-6 font-sans text-black">
              Login
            </h2>
            <form>
              <div className="mb-6">
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 sm:text-sm font-sans text-black"
                  placeholder="Email Address"
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 sm:text-sm font-sans text-black"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-b from-blue-500 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2 mb-4 font-sans"
              >
                Submit
              </button>
              <span className="inline-block w-4"></span>{" "}
              {/* Gap between buttons */}
              <button
                type="button"
                className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded flex items-center font-sans"
              >
                <img
                  className="w-6 h-6 mr-2"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  loading="lazy"
                  alt="Google logo"
                />
                Continue with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  