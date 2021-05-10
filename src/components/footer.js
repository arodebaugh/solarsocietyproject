import React from "react"
import drexelDragonLogo from "../images/Drexel_vertical_yellow.png"
export default function Footer() {
  return (
    <div class="w-full">
      <div class="flex flex-row py-4 px-7 bg-drexel-blue w-full border-t-4 border-drexel-yellow">
        <div class="float-left flex justify-center items-center mr-4">
          <p class="text-white">
            <a
              class="hover:underline"
              href="https://goo.gl/maps/RTNHeMVNdKbEt91P8"
            >
              3675 Market Street, Philadelphia, PA 19104
            </a>{" "}
            <a class="hover:underline" href="tel:2158952474">
              215.895.2474
            </a>{" "}
            <a class="hover:underline" href="mailto:cciinfo@drexel.edu">
              cciinfo@drexel.edu
            </a>
          </p>
        </div>
        <div class="flex justify-center items-center ml-auto">
          <img
            class="w-16 h-auto"
            src={drexelDragonLogo}
            alt="Drexel Dragon Logo"
          ></img>
        </div>
      </div>
    </div>
  )
}
