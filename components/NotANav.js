import Link from 'next/link'

export const NotANav = () => {
    return (
        <div className="bg-black sticky top-0">
            <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
                <div className="relative flex items-center justify-between">
                    <Link
                        href="/"
                        aria-label="Sebastian"
                        title="Sebastian"
                        className="inline-flex items-center"
                    >
                        <span className="cursor-pointer ml-2 text-3xl font-bold tracking-wide text-white">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-600">Sebastian</span>.
                        </span>
                    </Link>
                    <ul className="flex items-center space-x-0 lg:flex color-white">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center h-12 px-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none"
                            aria-label="Connect with me"
                            title="Connect with me"
                        >
                            <li className="text-white text-xl cursor-pointer">
                                Contact me
                            </li>
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center h-12 px-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none"
                            aria-label="Connect with me"
                            title="Connect with me"
                        >
                            <svg className="fill-white h-6 w-6 content-center cursor-pointer" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z"></path></svg>
                        </Link>
                    </ul>

                    <div className="lg:hidden">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotANav;