import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../../Components/Login";

test("submitting the form calls onSubmit with username and password", () => {
  const onSubmit = jest.fn();

  render(<Login onSubmit={onSubmit} />);

  const username = screen.getByLabelText(/username/i);
  const password = screen.getByLabelText(/password/i);
  const submitButton = screen.getByRole("button", { name: /submit/i });

  userEvent.type(username, "testUser");
  userEvent.type(password, "testPassword");

  userEvent.click(submitButton);

  expect(onSubmit).toBeCalledWith({
    username: "testUser",
    password: "testPassword",
  });
});
