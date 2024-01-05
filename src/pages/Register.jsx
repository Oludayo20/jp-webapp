import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterMutation, useGoogleMutation } from '../redux/slice/authApi';
import Helmet from '../component/Helmet';

const UserData = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const Register = () => {
  const [userData, setUserData] = useState(UserData);
  const dispatch = useDispatch();

  const [register, { data, isLoading, isSuccess, isError, error }] =
    useRegisterMutation();

  const [
    google,
    {
      isLoading: googleL,
      isSuccess: googleS,
      isError: googleIE,
      error: googleE
    }
  ] = useGoogleMutation();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
  };

  const navigate = useNavigate();

  useEffect(() => {
    const handleSuccess = () => {
      toast.success('Account created');
      navigate('/home');
    };

    const handleError = (error) => {
      toast.error(error);
    };

    if (isSuccess) {
      handleSuccess();
    } else if (googleS) {
      handleSuccess();
    } else if (isError) {
      handleError(error);
    } else if (googleIE) {
      handleError(googleE);
    }
  }, [isSuccess, googleS, isError, googleIE, error, googleE]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (userData.password != userData.confirmPassword)
      return toast.error('Password do not match!!');
    await register(userData);
  };

  const googleSignIn = async () => {
    await google();
  };

  return (
    <Helmet title="Register">
      <div className="contain py-16">
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <h2 className="text-2xl uppercase font-medium mb-1">
            Create an account
          </h2>
          <p className="text-gray-600 mb-6 text-sm">Register Minister</p>
          <form onSubmit={onSubmit}>
            <div className="space-y-2">
              <div>
                <label className="text-gray-600 mb-2 block">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                  placeholder="Full Name"
                  required
                  value={userData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="text-gray-600 mb-2 block">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                  placeholder="youremail.@domain.com"
                  required
                  value={userData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="text-gray-600 mb-2 block">Password</label>
                <input
                  type="password"
                  name="password"
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                  placeholder="*******"
                  required
                  autoComplete="true"
                  value={userData.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="text-gray-600 mb-2 block">
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                  placeholder="*******"
                  required
                  autoComplete="true"
                  value={userData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="aggrement"
                  id="aggrement"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  required
                />
                <label className="text-gray-600 ml-3 cursor-pointer">
                  I have read and agree to the{' '}
                  <a href="#" className="text-primary">
                    terms & conditions
                  </a>
                </label>
              </div>
            </div>
            <div className="mt-4">
              <button
                disabled={isLoading || googleL}
                type="submit"
                className="w-full py-4 justify-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium inline-flex items-center"
              >
                {isLoading ? (
                  <>
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-6 h-6 mr-3 text-primary animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    Loading...
                  </>
                ) : (
                  'Register'
                )}
              </button>
            </div>
          </form>

          {/* <!-- login with --> */}
          <div className="mt-6 flex justify-center relative">
            <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
              Or register with
            </div>
            <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
          </div>
          <div className="mt-4 flex gap-4">
            <button
              disabled={isLoading || googleL}
              onClick={googleSignIn}
              className="w-full py-4  text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500"
            >
              {googleL ? (
                <>
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-6 h-6 mr-3 text-primary animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Loading...
                </>
              ) : (
                'google'
              )}
            </button>
          </div>
          {/* <!-- ./login with --> */}

          <p className="mt-4 text-center text-gray-600">
            Already have account?{' '}
            <Link to="/login" className="text-primary">
              Login now
            </Link>
          </p>
        </div>
      </div>
    </Helmet>
  );
};

export default Register;
