import React from "react"
import PeopleCard from "../components/people-card"
import AndrewRodebaughImage from "../images/andrew-rodebaugh-photo.jpg"
import OliviaHernendezImge from "../images/olivia-hernandez-photo.jpg"
import EricSavoyImge from "../images/eric-savoy-photo.jpg"

export default function People() {
  return (
    <div class="flex flex-col ml-auto mr-auto ">
      <div class="mb-6">
        <h1 class="text-drexel-blue font-bold text-xl text-center">People</h1>
      </div>
      <div class="flex flex-row flex-wrap gap-12 justify-center">
        <PeopleCard
          profileImage={AndrewRodebaughImage}
          professorName="Andrew Rodebaugh"
          professorDescription="Student, Drexel University"
          description="Working on website design and development for College of Computing & Informatics professors including this site. Along with helping organize/find research studies."
          mailLink="mailto:ajr439@drexel.edu"
          twitterLink="https://twitter.com/andrewrodebaugh"
          linkedinLink="https://www.linkedin.com/in/andrew-rodebaugh-7aaa3a147/"
        ></PeopleCard>
        <PeopleCard
          profileImage={OliviaHernendezImge}
          professorName="Olivia Hernandez"
          professorDescription="Post-Doctoral Researcher, Drexel in the College of Computing & Informatics, PhD from The Ohio State University"
          description="Performing qualitative data analysis of focus group interviews on a supplemental grant developing an operational concept for a device providing chronic wound care for those with Alzheimer’s disease and Alzheimer’s disease related dementia."
          mailLink="mailto:oh66@drexel.edu"
        ></PeopleCard>
        <PeopleCard
          profileImage={EricSavoyImge}
          professorName="Eric Savoy"
          professorDescription="Software Engineer Co-op, Drexel University CCI"
          description="Designs and develops a web tool for the HATRICC-US study."
          mailLink="mailto:ets43@drexel.edu"
          linkedinLink="https://www.linkedin.com/in/eric-savoy/"
        ></PeopleCard>
      </div>
    </div>
  )
}
