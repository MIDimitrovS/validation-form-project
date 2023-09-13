import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../ReduxStore/store";
import Form from "./index";

const LABELS = ["First Name:", "Last Name:", "Email:", "Message:"];
const getInputs = (labels) => {
  return labels.map((label) => screen.getByLabelText(label));
};

const fillData = () => {
  const inputs = getInputs(LABELS);
  const data = ["John", "Doe", "john@example.com", "Hello"];
  inputs.forEach((input, index) => {
    fireEvent.change(input, { target: { value: data[index] } });
  });
};
describe("Form Component", () => {
  it("renders form elements", () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    const inputs = getInputs(LABELS);
    const submitButton = screen.getByText("Submit");

    inputs.forEach((input) => {
      expect(input).toBeInTheDocument();
    });
    expect(submitButton).toBeInTheDocument();
  });

  it("validates and submits the form", async () => {
    const dispatch = jest.fn();
    render(
      <Provider store={store}>
        <Form dispatch={dispatch} />
      </Provider>
    );
    const submitButton = screen.getByText("Submit");

    // Fill out the form with valid data
    fillData();

    // Submit the form
    fireEvent.click(submitButton);

    // Wait for async actions to complete (if any)
    await waitFor(() => {
      // Add your assertions here, e.g., check for a success message
      expect(dispatch).toHaveBeenCalled();
    });
  });

  it("disables the submit button when form is invalid", () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    const submitButton = screen.getByText("Submit");

    // Initially, the submit button should be disabled
    expect(submitButton).toBeDisabled();

    // Fill out the form with valid data
    fillData();

    // After filling out the form, the submit button should be enabled
    expect(submitButton).not.toBeDisabled();
  });
});
