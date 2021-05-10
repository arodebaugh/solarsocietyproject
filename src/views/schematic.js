import React from "react"
import schematic from "../images/schematic.png"
export default function Schematic() {
  return (
    <div class="ml-auto mr-auto w-8/12">
      <h1 class="text-drexel-blue font-bold text-xl text-center">
        Schematic
      </h1>
      <br />
      <img
          src={schematic}
          alt="Schematic"
          class="block ml-auto mr-auto"
        ></img>
    </div>
  )
}
