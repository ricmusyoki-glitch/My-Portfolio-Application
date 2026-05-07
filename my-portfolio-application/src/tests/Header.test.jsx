import { render, screen } from "@testing-library/react"
import Header from "../components/Header"

test("renders application title", () => {
  render(<Header />)

  const titleElement = screen.getByText(
    /Ric's Portfolio project showcase app/i
  )

  expect(titleElement).toBeInTheDocument()
})   