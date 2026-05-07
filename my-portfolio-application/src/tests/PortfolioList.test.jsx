import { render, screen } from "@testing-library/react"
import PortfolioList from "../components/PortfolioList"

test("renders project cards from props", () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Built using React",
    },
    {
      title: "Weather App",
      description: "Uses weather API",
    },
  ]

  render(<PortfolioList projects={projects} />)

  expect(
    screen.getByText("Portfolio Website")
  ).toBeInTheDocument()

  expect(
    screen.getByText("Weather App")
  ).toBeInTheDocument()
})