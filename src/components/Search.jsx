import React,{useEffect,useState} from 'react';
import { useDebounce } from "use-debounce";
import { useResultContext } from "../contexts/ResultContextProvider";
import { Links } from "./Links"

export const Search = () => {
  const [text, setText] = useState('Indonesia')
  const {setSearchTerm} = useResultContext()
  const {debouncedValue} = useDebounce(text,300)
  useEffect(() => {
     if(debouncedValue) setSearchTerm(debouncedValue)
  }, [debouncedValue])
  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        value={text}
        type="text"
        className="sm:w-96 w-full px-3 py-2 rounded-full outline-none border"
        onChange={(e)=>setText(e.target.value)}
        placeholder="Tanya sama simbah..."
      />
      {
        text && (
          <button className="absolute top-1.5 right-4 text-gray-500" onClick={()=>setText('')}>
            ✖
          </button>
        )
      }
      <Links />
    </div>
  )
}
