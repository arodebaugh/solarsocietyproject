import React from "react"
import PeopleCard from "../components/people-card"
import EllenBassImage from "../images/ellen-bass-photo.jpg"

export default function People() {
  return (
    <div class="flex flex-col ml-auto mr-auto ">
      <div class="mb-6">
        <h1 class="text-drexel-blue font-bold text-xl text-center">People</h1>
      </div>
      <div class="flex flex-row flex-wrap gap-12 justify-center">
        <PeopleCard
          profileImage={EllenBassImage}
          professorName="Ellen Bass"
          professorDescription="Proffessor, Drexel University"
          description="Short description for person. Should not be too long... maybe just a basic description on how this person worked with Ellen Bass."
          mailLink="mailto:fakeemail@example.com"
          websiteLink="https://drexel.edu"
          twitterLink="https://twitter.com"
        ></PeopleCard>
        <PeopleCard
          profileImage={EllenBassImage}
          professorName="Ellen Bass"
          professorDescription="Proffessor, Drexel University"
          description="Short description for person. Should not be too long... maybe just a basic description on how this person worked with Ellen Bass."
          mailLink="mailto:fakeemail@example.com"
          websiteLink="https://drexel.edu"
          twitterLink="https://twitter.com"
        ></PeopleCard>
        <PeopleCard
          profileImage={EllenBassImage}
          professorName="Ellen Bass"
          professorDescription="Proffessor, Drexel University"
          description="Short description for person. Should not be too long... maybe just a basic description on how this person worked with Ellen Bass."
          mailLink="mailto:fakeemail@example.com"
          websiteLink="https://drexel.edu"
          twitterLink="https://twitter.com"
        ></PeopleCard>
      </div>
    </div>
  )
}
