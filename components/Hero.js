import Link from 'next/link'

export const Hero = () => {
    return (
        <div className="relative bg-black">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-5">
                <div className="animate-fade-in-down relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center ">
                    <h2 className="mb-3 font-sans text-3xl font-black tracking-tight text-white sm:text-6xl sm:leading-none">
                        Hi! I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-600">Sebastian</span>.
                    </h2>
                    <p className="mb-6 text-base text-gray-200 md:text-lg">
                        I&apos;m a Machine Learning developer who also focuses in web technologies like Backend and API development.
                    </p>
                </div>
                <div className="flex items-center md:justify-center">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white"
                    >
                        <button type="button" className="text-white bg-gradient-to-br from-yellow-300 to-pink-600 hover:bg-gradient-to-bl focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Contact me!</button>
                    </Link>
                    <Link
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold text-white"
                    >
                        <button type="button" className="text-white bg-gradient-to-br from-yellow-300 to-pink-600 hover:bg-gradient-to-bl focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><span>Get my CV</span></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;