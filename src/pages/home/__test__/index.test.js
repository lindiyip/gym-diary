import { render, screen } from "@testing-library/react";

// Test against this component
import Home from "../index";

// The dependency for useContext
import DiaryHistoryContextWrapper from "../../../contexts/DiaryHistoryContext";

// For programmatically perform user input
import { fireEvent } from "@testing-library/react";

test("given no input, when user click Submit button, then 3 instances of Cannot be empty is displayed", async () => {
  render(
    <DiaryHistoryContextWrapper>
      <Home />
    </DiaryHistoryContextWrapper>
  ); // Render the targeted component with its dependency

  // GIVEN - no input (no test code)

  // WHEN - user click Submit button
  const submitButton = screen.getByRole("button", { name: "Submit" }); // Query the button
  await fireEvent.click(submitButton); // Click it programmatically

  // THEN - 3 instances of "Cannot be empty" message is displayed

  // Query all instances of HTML Elements with content "Cannot be empty"
  const appearingErrorMessages = screen.getAllByText("Cannot be empty");

  // expects three instances of "Cannot be empty"
  expect(appearingErrorMessages.length).toBe(3);
});
