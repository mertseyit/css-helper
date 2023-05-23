import { Link } from 'react-router-dom'
import useWidth from '../hooks/useWindowSize'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
const SideBar = () => {
  const [toggle, setToggle] = useState<boolean>(true)
  const width = useWidth()
  return (

    <>
      {
        width > 478 ? (
          <nav className='flex lg:justify-center md:justify-evenly justify-between w-full p-10 gap-10'>
            <Link to={'/box-shadow-generator'} className='px-3 py-2 bg-slate-200 shadow-2xl rounded-lg hover:-translate-y-2 transition-all duration-100'>
              <div className='lg:text-lg md:text-md text-sm whitespace-nowrap font-semibold ' >Box Shadow</div>
            </Link>
            <Link to={'/text-shadow-generator'} className='px-3 py-2 bg-slate-200 shadow-2xl rounded-lg hover:-translate-y-2 transition-all duration-100'>
              <div className='lg:text-lg md:text-md text-sm whitespace-nowrap font-semibold ' >Text Shadow</div>
            </Link>
            <Link to={'/color-founder'} className='px-3 py-2 bg-slate-200 shadow-2xl rounded-lg hover:-translate-y-2 transition-all duration-100'>
              <div className='lg:text-lg md:text-md text-sm whitespace-nowrap font-semibold ' >Color Founder</div>
            </Link>
          </nav >
        ) : (
          <>
            <div className='p-2 z-40 fixed top-0 w-full bg-slate-100'>
              <button onClick={() => setToggle(pre => !pre)}>
                {
                  toggle ? <FaTimes className="text-2xl"/> :<FaBars className="text-2xl" />
                }
              </button>
            </div>
            <nav className={`${toggle ? "translate-y-10 " : "-translate-y-52 "} fixed z-20   transition-all duration-300 flex w-full bg-slate-100 flex-col p-2 mb-5`}>
              <Link to={'/box-shadow-generator'} className='p-2 w-full border-b-2 hover:bg-slate-200 hover:cursor-pointer transition-all duration-150'>
                <div className='lg:text-lg md:text-md text-sm whitespace-nowrap font-semibold '>Box Shadow</div>
              </Link>
              <Link to={'/text-shadow-generator'} className='p-2 w-full border-b-2 hover:bg-slate-200 hover:cursor-pointer transition-all duration-150'>
                <div className='lg:text-lg md:text-md text-sm whitespace-nowrap font-semibold ' >Text Shadow</div>
              </Link>
              <Link to={'/color-founder'} className='p-2 w-full border-b-2 hover:bg-slate-200 hover:cursor-pointer transition-all duration-150'>
                <div className='lg:text-lg md:text-md text-sm whitespace-nowrap font-semibold ' >Color Founder</div>
              </Link>
            </nav >
          </>
        )
      }
    </>
  )
}

export default SideBar