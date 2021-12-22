export const Hero = () => {
    return (
        <div className="relative bg-black">
            <div className="absolute inset-x-0 bottom-0">
                <svg
                    viewBox="0 0 224 12"
                    fill="currentColor"
                    className="w-full -mb-1 text-white"
                    preserveAspectRatio="none"
                >
                    <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
                </svg>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-10">
                <div className="animate-fade-in-down relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center ">
                    <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-6xl sm:leading-none">
                        Hi! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-600">Sebastian</span>.
                    </h2>
                    <p className="mb-6 text-base text-indigo-100 md:text-lg">
                        I'm a Machine Learning developer who also focuses in web technologies like Backend and API development.
                    </p>
                </div>
                <div className="flex items-center md:justify-center">
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white"
                    >
                        <button type="button" class="text-white bg-gradient-to-br from-yellow-300 to-pink-600 hover:bg-gradient-to-bl focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Contact me!</button>
                    </a>
                    <a
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold text-white"
                    >
                        <button type="button" class="text-white bg-gradient-to-br from-yellow-300 to-pink-600 hover:bg-gradient-to-bl focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Get my CV</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;