import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilePdf, faEye } from "@fortawesome/free-solid-svg-icons"
export default function PublicationView(props) {
  return (
    <div>
      <p class="text-drexel-blue">
        {props.citation}
      </p>
      <a
        class="text-drexel-blue hover:underline"
        href={props.pdfLink}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faFilePdf} /> Download the PDF
      </a>
      <a
        class="ml-4 text-drexel-blue hover:underline"
        href={props.sourceLink}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faEye} /> View on {props.source}
      </a>
    </div>
  )
}
