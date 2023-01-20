import { MenuAlt3Icon } from "@heroicons/react/outline"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

export default function Navbar() {
    return(
        <div>
            <div className="w-full flex justify-between">
                <div className="relative max-w-[69px] lg:max-w-[107px]">
                    <Image src={"/logo.png"} width={107} height={107} alt="" />
                </div>
                <div className="max-w-lg lg:flex space-x-5 items-center hidden">
                    <Link href="/"><p className="text-white text-[20px] hover:text-red-700">About us</p></Link>
                    <Link href="/"><p className="text-white text-[20px] hover:text-red-700">Services</p></Link>
                    <Link href="/"><p className="text-white text-[20px] hover:text-red-700">Strategies</p></Link>
                    <Link href="/"><Button text="CONTACT US" url="" /></Link>
                </div>
                <div className="lg:hidden">
                    <button onClick={() => {
                        document.querySelector(".sidebar")?.classList.toggle("-translate-x-full")}
                    }><MenuAlt3Icon className="h-12 w-12 text-white" /></button>
                </div>
            </div>
            <div className="bg-black w-64 h-screen fixed top-0 left-0 transition duration-200 ease-in-out transform -translate-x-full sidebar lg:hidden z-20">
                <div className="p-3.5"><Image src={"/logo.png"} alt="logo" width={75} height={75} className="block lg:hidden" /></div>
                <div className="px-3.5 space-y-0.5">
                    <div className="hover:cursor-pointer hover:bg-red-700 p-2.5 rounded-lg">
                        <Link href="/" className="text-[20px] text-white tracking-wide">About us</Link>
                    </div>
                    <div className="hover:cursor-pointer hover:bg-red-700 p-2.5 rounded-lg">
                        <Link href="/" className="text-[20px] text-white tracking-wide">Services</Link>
                    </div>
                    <div className="hover:cursor-pointer hover:bg-red-700 p-2.5 rounded-lg">
                        <Link href="/" className="text-[20px] text-white tracking-wide">Strategies</Link>
                    </div>
                    <div className="hover:cursor-pointer hover:bg-red-700 p-2.5 rounded-lg">
                        <Link href="/" className="text-[20px] text-white tracking-wide">Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}