import React from "react"
export default function ThreedPrint() {
  return (
    <div className="ml-auto mr-auto bg-gray-100 h-screen">
      <h1 className="text-drexel-blue font-bold text-xl text-center">
        3D Print
      </h1>
      <br />
      <div className="bg-gray-100 w-screen" style={{ height: 170 + 'vh' }} >
        <embed className="ml-auto mr-auto"  src="./Charging Station Version 3 Drawing v2.pdf" type="application/pdf" width="1000px" height="800px" />
        <br /><br />
        <iframe className="ml-auto mr-auto w-4/5" style={{ height: 800 + 'px' }} title="Solar society charging station" src="https://a360.co/2Z7RgwJ"></iframe>
      </div>
    </div>
  )
}
