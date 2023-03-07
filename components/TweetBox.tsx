import React, { useState } from "react" 
import { CalendarIcon, FaceSmileIcon, MapPinIcon, PhotoIcon, MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline"
const TweetBox = () => {

   const [input, setInput] = useState<string>("")
    return (
        <div className="flex space-x-2 p-5">
            <img className=" mt-4 w-14 h-14 object-cover  rounded-full" src="https://www.xatobaxestion.com/wp-content/uploads/2016/09/default-user-img.jpg" alt="porfile"/>
             
            <div className="flex flex-1 items-center pl-2">
                <form  className="flex flex-1 flex-col">
                    <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text" 
                    placeholder="what's Happening?" className="outline-none h-24 w-full text-xl placeholder:text-xl"
                    />
                    <div className="flex items-center">
                    <div className="flex flex-1 space-x-2 text-twitter">
                    <PhotoIcon className="w-5 h-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150"/> 
                    <MagnifyingGlassCircleIcon className="w-5 h-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150"/>
                    <FaceSmileIcon className="w-5 h-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150"/> 
                    <CalendarIcon className="w-5 h-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150"/> 
                    <MapPinIcon className="w-5 h-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150"/>
                    </div>
                    <button disabled={!input} className="bg-twitter px-5 py-2 text-white font-bold rounded-full disabled:opacity-40">Tweet</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default TweetBox