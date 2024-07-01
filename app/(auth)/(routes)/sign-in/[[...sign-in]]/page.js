import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Constant from "../../../../_utils/Constant";
export default function Page() {
  return (

<section class="bg-white">
  <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
    

    <main
      class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div class="max-w-xl lg:max-w-3xl text-center mx-auto">
        <a class="block text-primary text-center" href="/">
          <span class="sr-only">Home</span>
          <Image src='/logo.svg' width={150} height={100} className="mx-auto" alt="file share app logo"/>
        </a>

        <h1 class="mt-6 text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
          Welcome to Safe File Share App
        </h1>

        <p class="mt-4 leading-relaxed text-gray-500 pb-5">
          {Constant.desc}
        </p>
        <div className="mx-auto siginpage">
            <SignIn className="mx-auto"/>
        </div>
        
      </div>
    </main>
    <aside class="relative block h-16 lg:order-first lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1694903110330-cc64b7e1d21d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        class="absolute inset-0 h-full w-full object-cover"
      />
    </aside>
  </div>
</section>
    )
}