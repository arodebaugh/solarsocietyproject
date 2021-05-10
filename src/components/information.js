import React from "react"
import MissionStatement from "../views/mission-statement"
import ThreedPrint from "../views/3d-print"
import ShoppingList from "../views/shopping-list"
import Schematic from "../views/schematic"

export default class Information extends React.Component {
  constructor(props) {
    super(props)
    this.handleMissionStatementClick = this.handleMissionStatementClick.bind(this)
    this.handle3dPrintClick = this.handle3dPrintClick.bind(this)
    this.handleShoppingListClick = this.handleShoppingListClick.bind(this)
    this.handleSchematicClick = this.handleSchematicClick.bind(this)
    this.state = { page: "mission-statement" }
  }

  componentDidMount() {
    const params = new URLSearchParams(window.location.search)
    const page = params.get("page")
    if (page === "mission-statement") {
      this.setState({ page: "mission-statement" })
    } else if (page === "3d-print") {
      this.setState({ page: "3d-print" })
    } else if (page === "schematic") {
      this.setState({ page: "schematic" })
    }
  }

  // mission statement, project overview, 3d print, schematic, shopping list

  setPage(page) {
    window.history.pushState(
      "data",
      "Ellen Bass - Drexel Univerity",
      "/?page=" + page
    )
    this.setState({ page: page })
  }

  handleMissionStatementClick() {
    this.setPage("mission-statement")
  }

  handle3dPrintClick() {
    this.setPage("3d-print")
  }

  handleSchematicClick() {
    this.setPage("schematic")
  }

  handleShoppingListClick() {
    this.setPage("shopping-list")
  }

  render() {
    const page = this.state.page;
    let header;
    let body;

    let missionStatement = <button class="hover:underline mx-2 text-drexel-blue focus:outline-none" onClick={this.handleMissionStatementClick}>Mission Statement</button>;
    let threedPrint = <button class="hover:underline mx-2 text-drexel-blue focus:outline-none" onClick={this.handle3dPrintClick}>3D Print</button>;
    let schematic = <button class="hover:underline mx-2 text-drexel-blue focus:outline-none" onClick={this.handleSchematicClick}>Schematic</button>;
    let shoppingList = <button class="hover:underline mx-2 text-drexel-blue focus:outline-none" onClick={this.handleShoppingListClick}>Shopping List</button>;

    if (page === "mission-statement") {
      missionStatement = <button class="border-b-4 border-drexel-yellow mx-2 text-drexel-blue focus:outline-none">Mission Statement</button>;
      body = <MissionStatement></MissionStatement>
    } else if (page === "3d-print") {
      threedPrint = <button class="border-b-4 border-drexel-yellow mx-2 text-drexel-blue focus:outline-none">3D Print</button>;
      body = <ThreedPrint></ThreedPrint>
    } else if (page === "schematic") {
      schematic = <button class="border-b-4 border-drexel-yellow mx-2 text-drexel-blue focus:outline-none">Schematic</button>;
      body = <Schematic></Schematic>
    } else if (page === "shopping-list") {
      shoppingList = <button class="border-b-4 border-drexel-yellow mx-2 text-drexel-blue focus:outline-none">Shopping List</button>;
      body = <ShoppingList></ShoppingList>
    }

    header = (
      <div class="flex flex-row justify-center mb-6 max-w-full px-2">
        { missionStatement }
        { threedPrint }
        { schematic }
        { shoppingList }
      </div>
    )

    return (
      <div class="w-full flex justify-center bg-gray-100 h-full">
        <div class="py-7">
          {header}
          {body}
        </div>
      </div>
    )
  }
}
