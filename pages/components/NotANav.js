export const NotANav = () => {
    return (
        <div className="bg-black">
            <div class="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
                <div class="relative flex items-center justify-between">
                    <a
                        href="/"
                        aria-label="Sebastian"
                        title="Sebastian"
                        class="inline-flex items-center"
                    >
                        <span class="ml-2 text-xl font-bold tracking-wide text-white">
                            <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-600">Sebastian</span>.
                        </span>
                    </a>
                    <ul class="flex items-center space-x-0 lg:flex color-white">
                    <a
                                href="https://www.linkedin.com/in/sebaspv"
                                class="inline-flex items-center justify-center h-12 px-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none"
                                aria-label="Connect with me"
                                title="Connect with me"
                            >
                        <li>
                            <a
                                href="https://www.linkedin.com/in/sebaspv"
                                class="inline-flex items-center justify-center h-12 px-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none"
                                aria-label="Connect with me"
                                title="Connect with me"
                            >
                                Connect with me
                            </a>
                        </li>
                        <svg class="fill-white h-5 w-5 content-center" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z"></path></svg>
                        </a>
                    </ul>
                    
                    <div className="lg:hidden">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotANav;