import Link from "next/link"

export default function Example() {
    return (
        <div className="bg-black">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-20 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    <span className="block">Do you like what you see?</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-600">Contact me!</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <Link
                        href="/contact"
                        aria-label=""
                        className="inline-flex items-center font-semibold text-white"
                    >
                        <button type="button" className="text-white bg-gradient-to-br from-yellow-300 to-pink-600 hover:bg-gradient-to-bl focus:ring-4 font-medium rounded-lg text-base px-5 py-3 text-center mr-2 mb-2">Contact Me</button>
                    </Link>
                    <Link
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold text-white"
                    >
                        <button type="button" className="text-white bg-black hover:bg-gradient-to-bl focus:ring-4 font-medium rounded-lg text-base px-5 py-3 text-center mr-2 mb-2">Go back</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}