// Login.js
const Login = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-yello-900">
        <div className="bg-red p-8 rounded shadow-md w-96">
          <h2 className="text-3xl font-extrabold text-yellow-800 mb-6 text-center">
            Welcome Back!
          </h2>
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full border rounded-md p-3 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border rounded-md p-3 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-3 rounded-md w-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;
  