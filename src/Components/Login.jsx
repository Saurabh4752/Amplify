import React, { useState } from 'react'
import LoginImg from '../assets/Login.png';
import Logo from '../assets/Logo.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [passward, setPassward] = useState(null);
  const [msg, setMsg] = useState('')
  const navigate = useNavigate();

  const redirectToDashbord = () => {
    if (userName == "test@gmail.com" && passward == 12345678) {
      navigate('/dashboard');
    }
    else {
      setMsg('Invalid username or passward')
    }
  };

  console.log(msg)

  return (
    <div className='flex h-screen'>
      <div className='flex flex-col justify-center items-center px-40 w-1/2'>
        <div className='flex items-center justify-center gap-2'>
          <img src={Logo} alt='Logo' className='w-8 h-8' />
          <div className='font-bold text-blue-400 text-xl'>Flow State</div>
        </div>
        <div className='mt-8  w-full'>
          <div className='text-lg font-bold'>Login</div>
          <div className='text-md text-gray-400'>Enter you email to sign in your account </div>
        </div>
        <div className='mt-8 w-full'>
          <div className='text-xs font-bold'>Business Email Address </div>
          <input
            placeholder='username@domain.com'
            className='border border-gray-300 rounded-lg p-1 mt-2 w-full'
            value={userName}
            onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div className='mt-8  w-full'>
          <div className='text-xs font-bold'>Passward</div>
          <input type='number'
            placeholder='Enter Passward'
            className='border border-gray-300 rounded-lg p-1 mt-2 w-full'
            value={passward}
            onChange={(e) => setPassward(e.target.value)} />
        </div>
        <div className='flex flex-col w-full'>
          <div className='font-bold ml-auto underline my-2 text-blue-400'>Forget Your Passward</div>
          <div className='bg-blue-400 text-white font-bold py-2 px-4 rounded text-center' onClick={redirectToDashbord}>Login</div>
          <div className='text-center'> Dont have an account? <span className='underline text-blue-400 pointer'>Sing Up</span></div>
        </div>
        {msg && <p>{msg}</p>}
      </div>
      <div className='w-1/2 '>
        <img src={LoginImg} alt='LoginImg' className='w-full h-[700px]' />
      </div>

    </div>
  )
}
export default Login