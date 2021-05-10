import React from "react"
import logo from "../images/solarsocietylogot.png"
export default function MissionStatement() {
  return (
    <div class="ml-auto mr-auto w-8/12">
      <h1 class="text-drexel-blue font-bold text-xl text-center">
        Mission Statement
      </h1>
      <br />
      <p class="text-drexel-blue text-center text-lg">
        An overlooked need in the homeless community is smartphones. The need to have communication with their caseworkers, 
        family, and other resources is crucial in their process of getting help and getting in a safe position. 
        The Solar Society Project’s mission is to give those in need, an access to charging their phone. 
        With the outbreak of Covid-19 in this past year, indoor access has been 
        limited which can make it difficult to have access to something as simple as a charging outlet. 
        What The Solar Society Project has created is a portable charger for outdoor use, The original target of this project 
        was for homeless shelters and missions, but we want to expand to schools, sports teams, community centers, and so much more. 
        On this site you will find plans to make this station, 3-D print files, electronic schematics, and a the list of materials needed.
      </p>
      <br />
      <img
          src={logo}
          alt="Solar Society Logo"
          class="block ml-auto mr-auto"
        ></img>
    </div>
  )
}
