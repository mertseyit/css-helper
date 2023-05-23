import { useState, useEffect } from 'react';
import useCopyToClipboard from '../hooks/useCopyToClipboard'
import { MdContentCopy, MdCheckCircleOutline } from 'react-icons/md'
import PropertiesList from '../components/box-shadow/PropertiesList';
const BoxShadow = () => {
  const [horizontal, setHorizontal] = useState<string>('0');
  const [vertical, setVertical] = useState<string>('20');
  const [blur, setBlur] = useState<string>('35');
  const [opacity, setOpacity] = useState<string>('3');
  const [shadowColor, setShadowColor] = useState<string>('rgba(0, 0, 0');
  const [copyControl, setCopyControl] = useState<boolean>(false)
  const [boxShadow, setBoxShadow] = useState<string>(
    `${horizontal}px ${vertical}px ${blur}px ${shadowColor}, .${opacity}))`
  );


  const tailwindExtend = `
  theme: {
    extend: {
      boxShadow:{
        "genereted":"${horizontal}px ${vertical}px ${blur}px ${shadowColor}, .${opacity})"
      }
    },
  },
  `
  const [value, copy] = useCopyToClipboard(" ")
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (value !== " ") {
        setCopyControl(false)
      }
    }, 1500);
    return () => clearTimeout(timeout); // Komponentin unmount edildiğinde timeout'u temizleme
  }, [value, copy]);
  useEffect(() => {
    setBoxShadow(`${horizontal}px ${vertical}px ${blur}px ${shadowColor}, .${opacity})`);
  }, [horizontal, vertical, blur, shadowColor, opacity, boxShadow]);


  return (
    <div className='w-full h-screen'>
      <div className="flex lg:flex-row flex-col-reverse justify-center items-center ">
        <div className="flex lg:w-96 lg:h-96 md:h-auto md:w-72 h-auto w-auto mt-5 lg:mt-0 justify-between items-center border px-10 py-2 shadow-lg rounded-lg bg-white">
          {/* properties list */}
          <PropertiesList
            blur={blur}
            horizontal={horizontal}
            opacity={opacity}
            setBlur={setBlur}
            setHorizontal={setHorizontal}
            setOpacity={setOpacity}
            setShadowColor={setShadowColor}
            setVertical={setVertical}
            shadowColor={shadowColor}
            vertical={vertical}
          />
        </div>
        <div className="lg:w-96 md:w-72 w-52 lg:h-96 h-auto border shadow-lg flex flex-row justify-center items-center lg:ml-10 ml-0 bg-white rounded-lg">
          <div className="flex flex-col relative">
            <div
              style={{
                boxShadow: boxShadow,
              }}
              className="lg:w-80 lg:h-80 w-auto h-52 bg-white border rounded-sm flex justify-center items-center">
              <div className='flex flex-col items-center h-auto lg:p-3 md:p-8 p-1'>
                <div className={`flex items-center justify-center mb-1 border px-2 bg-green-200 rounded-lg  ${!copyControl ? "translate-y-10" : "tralate-y-0"} transition-all duration-200`}>
                  <span className='text-sm mr-2 text-green-700'>copied !</span>
                  <MdCheckCircleOutline className="text-green-600" />
                </div>
                <div className={`text-xs border w-auto bg-gray-100 hover:bg-gray-200 cursor-pointer py-2 overflow-hidden z-10`}>
                  <div onClick={() => {
                    copy(`box-shadow:${horizontal}px ${vertical}px ${blur}px ${shadowColor}, .${opacity})`)
                    setCopyControl(true)
                  }} className='whitespace-nowrap px-2 '>
                    <div className='flex items-center justify-items-center ml-3'>
                      <span className='font-semibold text-xs '>box-shadow:</span> {`${horizontal}px ${vertical}px ${blur}px ${shadowColor}, .${opacity})`}
                      <MdContentCopy className={"mt-1 ml-2 text-lg mr-3"} />
                    </div>
                  </div>
                </div>
                <div className='flex w-full justify-center lg:mt-30 mt-5 h-1/5 rounded-lg'>
                  <div className='w-full mx-2 h-full lg:p-3 p-1 bg-slate-50 rounded-lg shadow-lg mb-5'>
                    <h3 className='font-bold lg:text-lg text-sm text-gray-600'>Tailwind Extend</h3>
                    <div onClick={() => {
                      copy(tailwindExtend)
                      setCopyControl(true)
                    }} className='mt-2 border w-full h-20 p-2 relative bg-slate-100 hover:bg-slate-200 cursor-pointer transition-all duration-100 '>
                      <MdContentCopy className={"mt-1 ml-2 text-lg mr-3 absolute right-0 top-1"} />
                      <span className='lg:text-md sm:text-sm text-xs'>
                        {
                          tailwindExtend
                        }
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    //   
  );
};

export default BoxShadow;
