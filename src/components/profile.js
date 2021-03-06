import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilePdf, faNewspaper } from "@fortawesome/free-solid-svg-icons"
export default function Profile(props) {
  return (
    <div class="w-full flex justify-center bg-gray-200">
      <div class="flex flex-row py-7 w-full justify-center px-6">
        <div class="grid grid-cols-3 gap-8">
          <div>
            <img
              class="h-auto w-full"
              src={props.profileImage}
              alt={props.professorName}
            ></img>
          </div>
          <div class="col-span-2">
            <h1 class="text-2xl text-drexel-blue">{props.professorName}</h1>
            <p class="text-drexel-blue">
              {props.occupation},{" "}
              <a class="hover:underline" href={props.collegeLink}>
                {props.college}
              </a>
              <br />
              <a class="hover:underline" href="http://www.drexel.edu/">
                Drexel University
              </a>
              <br />
              <a class="hover:underline" href={props.addressLink}>
                {props.addressLine1}
                <br />
                {props.addressLine2}
              </a>
            </p>
            <br />
            <p class="text-drexel-blue">
              <b>Office:</b> {props.office}
              <br />
              <b>Phone:</b>{" "}
              <a class="hover:underline" href={props.phoneLink}>
                {props.phone}
              </a>
              <br />
              <b>Fax:</b> {props.fax}
              <br />
              <b>Email:</b>{" "}
              <a class="hover:underline" href={props.emailLink}>
                {props.email}
              </a>
              <br />
              <b class="mr-1">CV: </b>
              <a
                class="hover:underline"
                href={props.pdfLink}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFilePdf} /> Download the PDF
              </a>
              <br />
              <a
                class="hover:underline"
                href={props.newsLink}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faNewspaper} /> View on Drexel CI News
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
