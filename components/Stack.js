import Image from "next/image";

export const Stack = () => {
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-10 lg:pb-16">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h4 className="max-w-lg font-sans text-xl font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-600 sm:text-3xl md:mx-auto">
          Stack
        </h4>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-6xl md:mx-auto">
          Best tools for best solutions.
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          I use modern frameworks and libraries to build modern solutions focused on production standards and scalability.
        </p>
      </div>
      <div class="grid grid-cols-2 row-gap-2 md:grid-cols-8">
        <div class="text-center align-middle">
          <Image src="/fastapi-1.svg" width="100" height="100" />
        </div>
        <div class="text-center align-middle">
          <Image src="/mongodb.svg" width="100" height="100" />
        </div>
        <div class="text-center">
          <Image src="/pytorch.svg" width="100" height="100" />
        </div>
        <div class="text-center">
          <Image src="/tensorflow.svg" width="100" height="100" />
        </div>
        <div class="text-center">
          <Image src="/sklearn.svg" width="100" height="100" />
        </div>
        <div class="text-center">
          <Image src="/c.svg" width="100" height="100" />
        </div>
        <div class="text-center">
          <Image src="/cuda.svg" width="100" height="100" />
        </div>
        <div class="text-center">
          <Image src="/python-5.svg" width="100" height="100" />
        </div>
      </div>
    </div>
  );
};

export default Stack;