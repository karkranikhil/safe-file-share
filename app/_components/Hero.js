import React from 'react'
import Constant from '../_utils/Constant'
function Hero() {
  return (
    <section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="text-3xl  sm:text-5xl sm:leading-tight"
      >
        Simplify Your Sharing: <span className='text-primary'>Upload, Save,</span> and <span className='text-primary'>Share</span> with Ease
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-gray-500">
      {Constant.desc}
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border border-primary bg-primary px-12 py-3 text-sm font-medium text-white  focus:outline-none focus:ring  sm:w-auto"
          href="/files"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded border border-primary px-12 py-3 text-sm font-medium   text-primary focus:outline-none focus:ring  sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero