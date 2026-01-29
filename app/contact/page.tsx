"use client"

import Image from "next/image";
import { Mail } from 'lucide-react';
import FadeInView from "@/components/FadeInView";

export default function ContactPage() {
    return (
        <div className="relative flex flex-col m-0 p-0 w-screen min-h-screen overflow-hidden bg-gradient-to-br from-white to-[#F0F7FF]">
            {/*Header section*/}
            <div className="relative flex flex-row justify-between mt-50 max-sm:mt-10 max-sm:pt-0">
                <div>
                    {/*Heading*/}
                    <FadeInView delay={0.1}>
                        <Image src="/getInTouch.svg" alt="get in touch" width={800} height={120} className="ml-15 max-sm:w-[300px] max-sm:ml-3 -rotate-2" />
                    </FadeInView>
                    {/*Subheading*/}
                    <FadeInView delay={0.2}>
                        <Image src="/subheading.svg" alt="get in touch subheading" width={1100} height={133} className="max-sm:w-[350px]" />
                    </FadeInView>
                </div>
                {/*illustration*/}
                <FadeInView delay={0.3}>
                    <Image src="/contact.svg" alt="contact" width={300} height={310} className="relative mr-48 -mt-40 max-sm:w-[100px] max-sm:h-[100px] max-sm:mt-0 max-sm:mr-0" />
                </FadeInView>
            </div>

            {/*Reaching section*/}
            <div className="flex flex-col">
                {/*header*/}
                <FadeInView delay={0.2}>
                    <Image src="/Reaching.svg" alt="how to reach IIITDMJ" width={730} height={70} className="mt-30 ml-20 max-sm:mt-8 max-sm:w-[300px] max-sm:ml-5" />
                </FadeInView>
                {/*box*/}
                <FadeInView delay={0.3}>
                    <div className="bg-white w-[90vw] h-200 border-[#005CAA] border-4 rounded-4xl mx-auto mt-10 mb-10 max-sm:w-100 max-sm:h-100 max-sm:border-3 max-sm:mt-2 max-sm:rounded-3xl shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.4774721298!2d80.02231931544636!3d23.176386884867444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ae1a0fb6a97d%3A0x44020f94f795d69f!2sIIITDM%20Jabalpur!5e0!3m2!1sen!2sin!4v1629789876543!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: '20px' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </FadeInView>

                {/*transport*/}
                <div className="flex flex-row w-screen justify-around mb-20 flex-wrap max-sm:mb-5 px-10">
                    <FadeInView delay={0.2}>
                        <Image src="/train.svg" alt="By train" width={500} height={300} className="max-sm:w-[380px] max-sm:h-[250px] h-68" />
                    </FadeInView>
                    <FadeInView delay={0.3}>
                        <Image src="/flight.svg" alt="By flight" width={500} height={300} className="max-sm:w-[380px] max-sm:h-[250px] h-68" />
                    </FadeInView>
                    <FadeInView delay={0.4}>
                        <Image src="/bus.svg" alt="By bus" width={500} height={300} className="max-sm:w-[380px] max-sm:h-[250px] h-68" />
                    </FadeInView>
                </div>
            </div>

            {/*Contact details section*/}
            <div className="flex flex-row w-screen justify-between mb-40 flex-wrap mt-25 pl-20 pr-20 max-sm:pl-0 max-sm:pr-0 max-sm:justify-center max-sm:mt-18">
                {/*Mail*/}
                <FadeInView delay={0.2}>
                    <div className="max-sm:flex max-sm:flex-col max-sm:items-center">
                        <Image src="/mailUs.svg" alt="email details" width={240} height={55} className="max-sm:w-40" />
                        <div className="flex flex-row gap-2 mt-4 items-center">
                            <Mail className="inline-block text-[#005CAA]" size={26} />
                            <span className="text-[#003366] text-2xl align-middle font-kanit">hackbyte@iiitdmj.ac.in</span>
                        </div>
                    </div>
                </FadeInView>
                {/*Address*/}
                <FadeInView delay={0.3}>
                    <div className="relative mr-100 max-sm:mr-0 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:mt-20">
                        <Image src="/Address.svg" alt="address details" width={240} height={55} className="max-sm:w-40" />
                        <div className="mt-4">
                            <p className="text-[#003366] text-xl align-middle font-kanit max-sm:font-center">IIITDM Jabalpur, Near Dumna Airport,<br />Jabalpur, Madhya Pradesh 482005</p>
                        </div>
                    </div>
                </FadeInView>
                <Image src="/sideGlass.svg" alt="broken glass" width={750} height={400} className="absolute right-0 rotate-28 z-10 bottom-10 max-sm:hidden" />
            </div>
        </div>
    )
}