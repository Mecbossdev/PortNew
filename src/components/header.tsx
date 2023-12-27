import Image from "next/image"
import JFlogo from "../assets/jf-logo.svg"
export interface IAppProps {
}

export function Headers(props: IAppProps) {
  return (
    <div className="flex items-center p-12 justify-between text-gray-300 font-medium">
      <div>
        <h1 className="text-3xl text-gray-50">Jeferson Fernandes</h1>
      </div>      
      <div className="flex space-x-8 justify-between">
        <a href="" className="hover:text-gray-50">Home</a>
        <a href="" className="hover:text-gray-50">Team</a>
        <a href="" className="hover:text-gray-50">Projects</a>
        <a href="" className="hover:text-gray-50">Hire Us</a>
      </div>
    </div>
  )
}
