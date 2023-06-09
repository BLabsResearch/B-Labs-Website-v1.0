import Image from "next/image";
import Link from "next/link";

export default function Expertise() {
    return(
        <div className="bg-black w-full px-3.5 py-5 flex flex-col justify-center items-center space-y-6 pt-[80px]" id="strategies">
            <h3 className="w-full text-2xl font-semibold text-left text-white lg:text-3xl md:pl-14 lg:text-center lg:pl-0">
                Main areas of <span className="text-red-700">expertise</span>
            </h3>
            <p className="w-full text-left text-white md:pl-14 lg:text-center lg:pl-0">We can currently offer you:</p>
            <div className="max-w-6xl grid sm:grid-cols-2 xl:grid-cols-3 gap-3 gap-y-[76px] lg:gap-[76px]">
                <div className="w-[300px] border-2 border-white rounded-lg space-y-1.5 p-[27px]">
                    <Image src="/business.png" width={30} height={30} alt="icon" />
                    <h4 className="text-white h4 font-semibold">Business</h4>
                    <div className="text-white p">
                        <ol className="space-y-1 list-disc sm:px-5">
                            <li className="p">Market access and sector specific analysis</li>
                            <li className="p"> New market and partnership opportunities Analysis of cross-chain deployment</li>
                            <li className="p">Trend forecasting</li>
                            <li className="p">Innovation reports</li>
                        </ol>
                    </div>
                </div>
                <div className="w-[300px] border-2 border-white rounded-lg space-y-1.5 p-[27px]">
                    <Image src="/marketing.png" width={30} height={30} alt="icon" />
                    <h4 className="text-white h4 font-semibold">Marketing</h4>
                    <div className="text-white p">
                        <ol className="space-y-1 list-disc sm:px-5">
                            <li className="p">Brand research</li>
                            <li className="p">Competitive analysis</li>
                            <li className="p">Consumer insights</li>
                            <li className="p">Customer satisfaction and segmentation research</li>
                            <li className="p">Social media strategy</li>
                            <li className="p">Copy & technical writing</li>
                        </ol>
                    </div>
                </div>
                <div className="w-[300px] border-2 border-white rounded-lg space-y-1.5 p-[27px]">
                    <Image src="/treasury.png" width={30} height={30} alt="icon" />
                    <h4 className="text-white h4 font-semibold">Treasury</h4>
                    <div className="text-white p">
                        <ol className="space-y-1 list-disc sm:px-5">
                            <li className="p">Asset diversification</li>
                            <li className="p">Portfolio analysis</li>
                            <li className="p">Yield farming strategies </li>
                            <li className="p">Risk analysis</li>
                            <li className="p">Security</li>
                        </ol>
                    </div>
                </div>
                <div className="w-[300px] border-2 border-white rounded-lg space-y-1.5 p-[27px]">
                    <Image src="/community.png" width={30} height={30} alt="icon" />
                    <h4 className="text-white h4 font-semibold">Community</h4>
                    <div className="text-white p">
                        <ol className="space-y-1 list-disc sm:px-5">
                            <li className="p">Attracting talent</li>
                            <li className="p">Education</li>
                            <li className="p">Competitive analysis</li>
                            <li className="p">Case studies</li>
                            <li className="p">Interviews/profiling to understand pain points in communities</li>
                            <li className="p">Communication audit</li>
                        </ol>
                    </div>
                </div>
                <div className="w-[300px] border-2 border-white rounded-lg space-y-1.5 p-[27px]">
                    <Image src="/tokenomics.png" width={30} height={30} alt="icon" />
                    <h4 className="text-white h4 font-semibold">Tokenomics</h4>
                    <div className="text-white p">
                        <ol className="space-y-1 list-disc sm:px-5">
                            <li className="p">Automations/CADCAD governance audit </li>
                            <li className="p">Bribing strategies</li>
                            <li className="p">Token locking</li>
                            <li className="p">Contagion resistant design</li>
                            <li className="p">NFT-token integration</li>
                            <li className="p">Tokenomics driven behaviour strategies</li>
                        </ol>
                    </div>
                </div>
                <div className="w-[300px] border-2 border-white rounded-lg space-y-1.5 p-[27px]">
                    <Image src="/flag.png" width={30} height={30} alt="icon" />
                    <h4 className="text-white h4 font-semibold">Governance</h4>
                    <div className="text-white p">
                        <ol className="space-y-1 list-disc sm:px-5">
                            <li className="p">Voting best practices</li>
                            <li className="p">Governance audit</li>
                            <li className="p">Meta-governance feasibility</li>
                            <li className="p">Sybil attack risks</li>
                            <li className="p">Token locking (governance)</li>
                            <li className="p">Grant processes/best practices</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full">
                <Link href={"#newsletter"}>
                    <button className="py-2.5 px-10 bg-red-700 text-white rounded-md font-semibold text-[14px]">GET IN TOUCH</button>
                </Link>
            </div>
        </div>
    )
}
