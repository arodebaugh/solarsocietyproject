import React from "react"
import logo from "../images/solarsocietylogot.png"
export default function Header() {
  return (
    <div class="flex flex-row py-5 px-7 bg-white w-full border-b-4 border-drexel-yellow">
      <div class="float-left">
        <img
          class="h-32 w-auto"
          src={logo}
          alt="Solar Society Logo"
        ></img>

        
      </div>
      <div class="flex justify-center items-center ml-auto">
        <h1 class="text-drexel-yellow text-2xl font-light italic tagline">Where energy meets community.</h1> 
      </div>
    </div>
  )

}
