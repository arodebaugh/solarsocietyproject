import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Profile from "../components/profile"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>Ellen Bass - Drexel University</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="todo" />
      </Helmet>
      <Header></Header>
      <Profile
        profileImage="http://cci.drexel.edu/faculty/ebass/images/photo.jpg"
        professorName="Ellen Bass"
        occupation="Professor"
        college="College of Computing & Informatics"
        collegeLink="https://drexel.edu/cci"
        addressLink="https://goo.gl/maps/RTNHeMVNdKbEt91P8"
        addressLine1="3675 Market Street"
        addressLine2="Philadelphia, PA 19104"
        office="Room 1124"
        phoneLink="tel:2155714416"
        phone="(215) 571-4416"
        fax="(215) 895-2494"
        emailLink="mailto:Ellen.J.Bass@drexel.edu"
        email="Ellen.J.Bass@drexel.edu"
        pdfLink="/Bass,EllenJCV.pdf"
      ></Profile>
      <br />
      <div class="ml-4">
        <h1 class="text-3xl">404: Page not found</h1>
        <br />
        <a href="/coop-tmp-site" className="hover:underline">
          Return to home
        </a>
      </div>
      <br />
      <div class="absolute bottom-0 w-full">
        <Footer></Footer>
      </div>
    </div>
  )
}
