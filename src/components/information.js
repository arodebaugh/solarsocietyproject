import React from "react"
import ResearchInterests from "../views/research-interests"
import Classes from "../views/classes"
import People from "../views/people"
import Projects from "../views/projects"
import Publications from "../views/publications"

export default class Information extends React.Component {
  constructor(props) {
    super(props)
    this.handleResearchInterestClick = this.handleResearchInterestClick.bind(
      this
    )
    this.handleClassesClick = this.handleClassesClick.bind(this)
    this.handlePeopleClick = this.handlePeopleClick.bind(this)
    this.handleProjectsClick = this.handleProjectsClick.bind(this)
    this.handlePublicationsClick = this.handlePublicationsClick.bind(this)
    this.state = { page: "research-interests" }
  }

  componentDidMount() {
    const params = new URLSearchParams(window.location.search)
    const page = params.get("page")
    if (page === "research-interests") {
      this.setState({ page: "research-interests" })
    } else if (page === "classes") {
      this.setState({ page: "classes" })
    } else if (page === "people") {
      this.setState({ page: "people" })
    } else if (page === "projects") {
      this.setState({ page: "projects" })
    } else if (page === "publications") {
      this.setState({ page: "publications" })
    }
  }

  setPage(page) {
    window.history.pushState(
      "data",
      "Ellen Bass - Drexel Univerity",
      "/?page=" + page
    )
    this.setState({ page: page })
  }

  handleResearchInterestClick() {
    this.setPage("research-interests")
  }

  handleClassesClick() {
    this.setPage("classes")
  }

  handlePeopleClick() {
    this.setPage("people")
  }

  handleProjectsClick() {
    this.setPage("projects")
  }

  handlePublicationsClick() {
    this.setPage("publications")
  }

  render() {
    const page = this.state.page
    let header
    let body

    if (page === "research-interests") {
      header = (
        <div class="flex flex-row justify-center mb-6">
          <button class="border-b-4 border-drexel-yellow mx-4 text-drexel-blue focus:outline-none">
            Research Interests
          </button>
          <button
            class="hover:underline mx-4 text-drexel-blue focus:outline-none"
            onClick={this.handleClassesClick}
          >
            Classes
          </button>
          <button
            class="hover:underline mx-4 text-drexel-blue focus:outline-none"
            onClick={this.handlePeopleClick}
          >
            People
          </button>
          <button
            class="hover:underline mx-4 text-drexel-blue focus:outline-none"
            onClick={this.handleProjectsClick}
          >
            Projects
          </button>
          <button
            class="hover:underline mx-4 text-drexel-blue focus:outline-none"
            onClick={this.handlePublicationsClick}
          >
            Publications
          </button>
        </div>
      )

      body = <ResearchInterests></ResearchInterests>
    } else if (page === "classes") {
      header = (
        <div class="flex flex-row justify-center mb-6">
          <button
            class="hover:underline mx-4 text-drexel-blue focus:outline-none"
            onClick={this.handleResearchInterestClick}
          >
            Research Interests
          </button>
          <button class="border-b-4 border-drexel-yellow mx-4 text-drexel-blue focus:outline-none">
            Classes
          </button>
          <button
            class="hover:underline mx-4 text-drexel-blue focus:outline-none"
            onClick={this.handlePeopleClick}
          >
            People
          </button>
          <button
            class="hover:underline mx-4 text-drexel-blue focus:outline-none"
            onClick={this.handleProjectsClick}
          >
            Projects
          </button>
          <button
            class="hover:underline mx-4 text-drexel-blue focus:outline-none"
            onClick={this.handlePublicationsClick}
          >
            Publications
          </button>
        </div>
      )

      body = <Classes></Classes>
    } else if (page === "people") {
      header = (
        <div class="flex flex-row justify-center mb-6">
          <button
            class="hover:underline mx-4 text-drexel-blue focus:outline-none"
            onClick={this.handleResearchInterestClick}
          >
            Research Interests
          </button>
          <button
            class="hover:underline mx-4 text-drexel-blue focus:outline-none"
            onClick={this.handleClassesClick}
          >
            Classes
          </button>
          <button class="border-b-4 border-drexel-yellow mx-4 text-drexel-blue focus:outline-none">
            People
          </button>
          <button
            class="hover:underline mx-4 text-drexel-blue focus:outline-none"
            onClick={this.handleProjectsClick}
          >
            Projects
          </button>
          <button
            class="hover:underline mx-4 text-drexel-blue focus:outline-none"
            onClick={this.handlePublicationsClick}
          >
            Publications
          </button>
        </div>
      )

      body = <People></People>
    } else if (page === "projects") {
      header = (
        <div class="flex flex-row justify-center mb-6">
          <button
            class="hover:underline mx-4 text-drexel-blue focus:outline-none"
            onClick={this.handleResearchInterestClick}
          >
            Research Interests
          </button>
          <button
            class="hover:underline mx-4 text-drexel-blue focus:outline-none"
            onClick={this.handleClassesClick}
          >
            Classes
          </button>
          <button
            class="hover:underline mx-4 text-drexel-blue focus:outline-none"
            onClick={this.handlePeopleClick}
          >
            People
          </button>
          <button class="border-b-4 border-drexel-yellow mx-4 text-drexel-blue focus:outline-none">
            Projects
          </button>
          <button
            class="hover:underline mx-4 text-drexel-blue focus:outline-none"
            onClick={this.handlePublicationsClick}
          >
            Publications
          </button>
        </div>
      )

      body = <Projects></Projects>
    } else if (page === "publications") {
      header = (
        <div class="flex flex-row justify-center mb-6">
          <button
            class="hover:underline mx-4 text-drexel-blue focus:outline-none"
            onClick={this.handleResearchInterestClick}
          >
            Research Interests
          </button>
          <button
            class="hover:underline mx-4 text-drexel-blue focus:outline-none"
            onClick={this.handleClassesClick}
          >
            Classes
          </button>
          <button
            class="hover:underline mx-4 text-drexel-blue focus:outline-none"
            onClick={this.handlePeopleClick}
          >
            People
          </button>
          <button
            class="hover:underline mx-4 text-drexel-blue focus:outline-none"
            onClick={this.handleProjectsClick}
          >
            Projects
          </button>
          <button class="border-b-4 border-drexel-yellow mx-4 text-drexel-blue focus:outline-none">
            Publications
          </button>
        </div>
      )

      body = <Publications></Publications>
    }

    return (
      <div class="w-full flex justify-center">
        <div class="py-7">
          {header}
          {body}
        </div>
      </div>
    )
  }
}
