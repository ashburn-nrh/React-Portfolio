import { RiReactjsLine } from "react-icons/ri"
import { RiJavascriptFill } from "react-icons/ri"
import { RiTailwindCssFill } from "react-icons/ri"
import { RiFlutterFill } from "react-icons/ri"
import { RiFirebaseLine } from "react-icons/ri"


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className=" flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>      
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavascriptFill className="text-7xl text-yellow-300"/>      
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className="text-7xl text-cyan-400"/>      
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiFlutterFill className="text-7xl text-cyan-400"/>      
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiFirebaseLine className="text-7xl text-yellow-500"/>      
            </div>
        </div>
    </div>
    )
}

export default Technologies