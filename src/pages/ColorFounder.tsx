import { useEffect, useState } from "react"
import { prominent, Output } from 'color.js'
import picture_icon from '../../public/picture-icon.png'
import danger_icon from '../../public/danger.png'
import { FaClipboard, FaClipboardCheck, FaRedo } from "react-icons/fa"
import { MdCheckCircleOutline, MdContentCopy } from "react-icons/md"
import { convertRGBToHex } from "../helpers/convertRGBToHex"
import useCopyToClipboard from "../hooks/useCopyToClipboard"
const acceptableFileExtention = ["image/jpeg", "image/png", "image/gif"]
const ColorFounder = () => {

  const [image, setImage] = useState<File>()
  const [imageURL, setImageURL] = useState<string>("")
  const [dominantColors, setDominantColors] = useState<Output | number[][]>([])
  const [rgbColors, setRgbColors] = useState<string[]>([])
  const [danger, setDanger] = useState<boolean>(false)
  const [value, copy] = useCopyToClipboard(" ")
  const [copyControl, setCopyControl] = useState<boolean>(false)
  const [copyControl2, setCopyControl2] = useState<boolean>(false)
  useEffect(() => {
    if (image !== undefined) {
      setImageURL(URL.createObjectURL(image))
      prominent(`${URL.createObjectURL(image)}`, {
        sample: 30,
        group: 30,
        amount: 5
      }).then(colors => setDominantColors(colors)).catch(err => console.log("An Error Achoured: " + err))
    }
  }, [image])

  useEffect(() => {
    if (dominantColors) {
      const colors: string[] = []
      dominantColors.map((item: number[]) => {
        colors.push(convertRGBToHex(item))
      })
      setRgbColors(colors)
      setTwColors(`
        theme: {
            colors: {
              "genereted-1":"${colors[0]}",
              "genereted-2":"${colors[1]}",
              "genereted-3":"${colors[2]}",
              "genereted-4":"${colors[3]}",
              "genereted-5":"${colors[4]}",
            }
          },`
      )

    }
  }, [dominantColors])

  const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (e.target.files) {
      if (!acceptableFileExtention.includes(e.target.files[0].type)) {
        setDanger(true)
      } else {
        setImage(e.target.files[0])
      }
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (danger) {
        setDanger(false)
      }
    }, 2000);
    return () => clearTimeout(timeout); // Komponentin unmount edildiğinde timeout'u temizleme
  }, [danger]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (value !== " ") {
        setCopyControl(false)
        setCopyControl2(false)
      }
    }, 500);
    return () => clearTimeout(timeout); // Komponentin unmount edildiğinde timeout'u temizleme
  }, [value, copy]);

  const [twColors, setTwColors] = useState<string>("")

  return (
    <>
      <div className="grid grid-cols-1 w-full h-screen  px-10">
        <div className="flex justify-center w-full">
          {
            imageURL && <div className="lg:h-full h-auto w-full flex flex-col items-start justify-start">
              <h3 className="p-3 text-2xl font-bold text-gray-600">Tailwind Extend</h3>
              <div className="flex">
                <div className="text-center w-full text-gray-600 bg-slate-200 py-3 px-2 mx-3 rounded-lg lg:text-lg text-sm">
                  {
                    twColors
                  }
                </div>
                <button onClick={() => {
                  copy(twColors)
                  setCopyControl2(true)
                }}>
                  {
                    !copyControl2 ? <MdContentCopy className="text-2xl" /> : <MdCheckCircleOutline className="text-2xl text-green-400" />
                  }

                </button>
              </div>
            </div>
          }
        </div>
        <div className=" col-span-3 flex relative lg:h-80vh h-70vh w-full justify-center items-center lg:px-0 px-5">

          <div className={`relative border-2 col-span-2 p-2  border-gray-400 rounded-lg border-spacing-4 border-dashed ${imageURL ? "w-auto lg:h-full md:h-60vh h-30vh" : "lg:w-1/2 lg:h-2/3 h-1/2"} flex justify-center items-center `}>
            {
              imageURL ? (
                <>
                  {
                    imageURL && rgbColors && (

                      <div className="ml-5 absolute right-0 top-0 p-4">
                        <button className="p-3 bg-gray-200 mb-5 rounded-xl shadow-lg group" onClick={() => {
                          setImageURL("")
                          setRgbColors([])
                          setDominantColors([])
                        }}>
                          <FaRedo className="hover:rotate-360 transition-all duration-700" />
                        </button>
                      </div>
                    )
                  }
                  <img className="w-full h-full border shadow-lg rounded-lg transition-all duration-500" src={imageURL} />
                </>


              ) : (
                <form className="flex flex-col items-center">
                  <img src={danger ? danger_icon : picture_icon} className="w-1/5" />
                  {
                    danger ? <p className="text-center text-sm text-red-500">Only <span className="font-bold">.jpeg/.jpg, .png, .icon and .gif</span> extensions accepted </p> : null
                  }
                  <p className="my-3 font-semibold text-gray-600">Import a picture </p>
                  <input
                    type="file"
                    accept="image/png, image/gif, image/jpeg"
                    className="file:w-full w-28 file:p-2 file:border file:bg-blue-400 file:rounded-xl file:text-white file:border-blue-400 file:hover:bg-blue-500 file:cursor-pointer"
                    onChange={imageHandler} />
                </form>
              )
            }
          </div>
          <div className="flex flex-col items-center w-auto">
            {
              rgbColors.length !== 0 && (
                <>

                  <div className="flex relative flex-col ml-6 gap-4 z-20">
                    {
                      rgbColors.map((color, key) => {
                        return (

                          <button key={key} className="group relative" onClick={() => {
                            copy(color)
                            setCopyControl(true)
                          }}>
                            <span className="border px-2 rounded-xl bg-slate-100 text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 lg:w-16 w-auto  absolute -top-5 lg:-left-0 md:-left-0 -left-1">{color}</span>
                            <div style={{
                              backgroundColor: color
                            }} className="lg:h-16 lg:w-16 md:w-12 md:h-12 w-10 h-10 border rounded-lg p-1">
                              <span className=" opacity-0  group-hover:opacity-100  transition-all duration-100">
                                {
                                  !copyControl ? <FaClipboard className="bg-white p-1 text-2xl rounded-full" /> : <FaClipboardCheck className="text-green-500 bg-white p-1 text-2xl rounded-full" />
                                }
                              </span>
                            </div>
                          </button>
                        )
                      })
                    }
                  </div>
                </>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ColorFounder