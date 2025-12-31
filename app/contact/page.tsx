"use client"

import Image from "next/image";
import {Mail} from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="relative flex flex-col m-0 p-0 w-screen min-h-screen overflow-hidden" style={{
            backgroundImage: 'url(/FAQs.svg)',
            backgroundSize: 'cover',
        }}>
            {/*Header section*/}
            <div className="relative flex flex-row justify-between mt-50 max-sm:mt-10 max-sm:pt-0">
                <div>
                   {/*Heading*/}
                   <Image src="/getInTouch.svg" alt="get in touch" width={800} height={120} className="ml-15 max-sm:w-[300px] max-sm:ml-3 -rotate-2"/>
                   {/*Subheading*/}
                   <Image src="/subheading.svg" alt="get in touch subheading" width={1100} height={133} className="max-sm:w-[350px]"/>
                </div>
                {/*illustration*/}
                <Image src="/contact.svg" alt="contact" width={300} height={310} className="relative mr-48 -mt-40 max-sm:w-[100px] max-sm:h-[100px] max-sm:mt-0 max-sm:mr-0" />
            </div>
            {/*Reaching section*/} 
            <div className="flex flex-col">
                {/*header*/}
                <Image src="/Reaching.svg" alt="how to reach IIITDMJ" width={730} height={70} className="mt-30 ml-20 max-sm:mt-8 max-sm:w-[300px] max-sm:ml-5"/>
                {/*box*/}
                <div className="bg-black w-438 h-200 border-white border-10 rounded-4xl mx-auto mt-10 mb-10 max-sm:w-100 max-sm:h-100 max-sm:border-5 max-sm:mt-2 max-sm:rounded-3xl"></div>
                {/*transport*/}
                <div className="flex flex-row w-screen justify-around mb-20 flex-wrap max-sm:mb-5">
                    <Image src="/train.svg" alt="By train" width={500} height={300} className="max-sm:w-[380px] max-sm:h-[250px]"/>
                    <Image src="/flight.svg" alt="By flight" width={500} height={300} className="max-sm:w-[380px] max-sm:h-[250px]"/>
                    <Image src="/bus.svg" alt="By bus" width={500} height={300} className="max-sm:w-[380px] max-sm:h-[250px]"/>
                </div>
            </div>
            {/*Contact details section*/}
            <div className="flex flex-row w-screen justify-between mb-40 flex-wrap mt-25 pl-20 pr-20 max-sm:pl-0 max-sm:pr-0 max-sm:justify-center max-sm:mt-18">
                {/*Mail*/}
                <div className="max-sm:flex max-sm:flex-col max-sm:items-center">
                    <Image src="/mailUs.svg" alt="email details" width={240} height={55} className="max-sm:w-40"/>
                    <div className="flex flex-row gap-2 mt-4 items-center">
                        <Mail className="inline-block text-white" size={26} />
                        <span className="text-white text-2xl align-middle font-kanit" >theprogclub@iiitdmj.ac.in</span>
                    </div>
                </div>
                {/*Address*/}
                <div className="relative mr-100 max-sm:mr-0 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:mt-20">
                    <Image src="/Address.svg" alt="address details" width={240} height={55} className="max-sm:w-40"/>
                    <div className="mt-4">
                        <p className="text-white text-xl align-middle font-kanit max-sm:font-center">IIITDM Jabalpur, Near Dumna Airport,<br/>Jabalpur, Madhya Pradesh 482005</p>
                    </div>
                </div>
                <Image src="/sideGlass.svg" alt="broken glass" width={750} height={400} className="absolute right-0 rotate-28 z-10 bottom-10 max-sm:hidden"/>
            </div>
        </div>
    )
}