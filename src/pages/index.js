import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Profile from "../components/profile"
import Information from "../components/information"
import EllenBassImage from "../images/ellen-bass-photo.jpg"
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
        <title>Solar Society Project</title>
      </Helmet>
      <Header></Header>
      <div className="bg-gray-100 h-screen">
        <Information></Information>
      </div>
    </div>
  )
}
