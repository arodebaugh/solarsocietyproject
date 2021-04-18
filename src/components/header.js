import React from "react"
export default function Header() {
  return (
    <div class="flex flex-row py-7 px-7 bg-drexel-blue w-full border-b-4 border-drexel-yellow">
        <div class="float-left">
          <img class="min-h-full w-auto" src="http://cci.drexel.edu/faculty/Logos/newischool-logo.png" alt="Drexel CCI Logo"></img>
        </div>
        <div class="flex justify-center items-center ml-auto">
          <a href="https://drexel.edu/cci" class="mx-5 text-white hover:underline sm:text-sm">CCI Home</a>
          <a href="https://www.drexel.edu/" class="text-white hover:underline sm:text-sm">Drexel Home</a>
        </div>
    </div>
  );
}