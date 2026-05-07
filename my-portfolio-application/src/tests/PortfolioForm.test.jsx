import { render, screen, fireEvent } from "@testing-library/react"
import PortfolioForm from "../components/PortfolioForm"

test("allows user to type into form inputs", () => {
  render(<PortfolioForm addProject={() => {}} />)

  const titleInput =
    screen.getByPlaceholderText("Project Title")

  const descriptionInput =
    screen.getByPlaceholderText(
      "Project Description"
    )

  fireEvent.change(titleInput, {
    target: { value: "React Portfolio" },
  })

  fireEvent.change(descriptionInput, {
    target: { value: "Built using React and Tailwind." },
  })

  expect(titleInput.value).toBe("React Portfolio")

  expect(descriptionInput.value).toBe(
    "Built using React and Tailwind."
  )
})  