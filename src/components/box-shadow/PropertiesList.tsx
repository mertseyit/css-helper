import { convertHexToRGB } from "../../helpers/convertHextToRGB"

type PropType = {
    horizontal:string,
    setHorizontal:React.Dispatch<React.SetStateAction<string>>,
    vertical:string,
    setVertical:React.Dispatch<React.SetStateAction<string>>,
    blur:string,
    setBlur:React.Dispatch<React.SetStateAction<string>>,
    opacity:string,
    setOpacity:React.Dispatch<React.SetStateAction<string>>
    shadowColor:string,
    setShadowColor:React.Dispatch<React.SetStateAction<string>>

}
const PropertiesList = ({blur,horizontal,opacity,setBlur,setHorizontal,setOpacity,setShadowColor,setVertical,shadowColor,vertical}:PropType) => {
  return (
    <div>
            <div className="flex flex-col">
              <label className="lg:text-lg text-sm font-semibold mt-3 text-gray-600" htmlFor="horizontal">Horizontal</label>
              {horizontal}
              <input
                onChange={(e) => setHorizontal(e.target.value)}
                min="-200"
                max="200"
                defaultValue={horizontal}
                className="w-full h-2 appearance-none bg-gray-300 rounded-full"
                type="range"
                name="horizontal"
                id="horizontal"
              />
            </div>
            <div className="flex flex-col">
              <label className="lg:text-lg text-sm font-semibold mt-3 text-gray-600" htmlFor="vertical">Vertical</label>
              {vertical}
              <input
                onChange={(e) => setVertical(e.target.value)}
                min="-200"
                max="200"
                defaultValue={vertical}
                className="w-full h-2 appearance-none bg-gray-300 rounded-full"
                type="range"
                name="vertical"
                id="vertical"
              />
            </div>
            <div className="flex flex-col">
              <label className="lg:text-lg text-sm font-semibold mt-3 text-gray-600" htmlFor="blur">Blur</label>
              {blur}
              <input
                onChange={(e) => setBlur(e.target.value)}
                min="0"
                max="200"
                defaultValue={blur}
                className="w-full h-2 appearance-none bg-gray-300 rounded-full"
                type="range"
                name="blur"
                id="blur"
              />
            </div>
            <div className="flex flex-col">
              <label className="lg:text-lg text-sm font-semibold mt-3 text-gray-600" htmlFor="opacity">Opacity</label>
              {opacity}
              <input
                onChange={(e) => setOpacity(e.target.value)}
                min="0"
                max="9"
                defaultValue={opacity}
                className="w-full h-2 appearance-none bg-gray-300 rounded-full"
                type="range"
                name="opacity"
                id="opacity"
              />
            </div>
            <div className="flex flex-col">
              <label className="lg:text-lg text-sm font-semibold mt-3 text-gray-600 " htmlFor="color">Shadow Color</label>
              <span className='text-sm font-semibold'>{shadowColor + ")"}</span>
              <input
                onChange={(e) => setShadowColor(convertHexToRGB(e.target.value))}
                className="lg:w-80 w-52"
                type="color"
                name="color"
                id="color"
              />
            </div>
          </div>
  )
}

export default PropertiesList