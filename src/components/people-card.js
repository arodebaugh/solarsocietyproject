import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
export default function PeopleCard(props) {
  return (
    <div>
      <figure class="bg-gray-100 rounded-xl p-8 w-80">
        <img
          class="w-32 h-32 rounded-full mx-auto"
          src={props.profileImage}
          alt={props.professorName}
          width="384"
          height="512"
        />
        <div class="pt-6 text-center md:text-left space-y-4">
          <figcaption class="font-medium text-center">
            <div class="text-drexel-blue">{props.professorName}</div>
            <div class="text-gray-500">{props.professorDescription}</div>
          </figcaption>

          <blockquote>
            <p class="text-lg font-semibold">{props.description}</p>
          </blockquote>

          <div class="flex gap-4 justify-center mt-4 text-gray-500 text-lg">
            <a
              aria-label="Email"
              class="hover:text-drexel-blue"
              href={props.mailLink}
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              aria-label="Website"
              class="hover:text-drexel-blue"
              href={props.websiteLink}
            >
              <FontAwesomeIcon icon={faLink} />
            </a>
            <a
              aria-label="Twitter"
              class="hover:text-drexel-blue"
              href={props.twitterLink}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </figure>
    </div>
  )
}
