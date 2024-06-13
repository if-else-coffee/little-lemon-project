import { fireEvent, render, screen } from '@testing-library/react';
import {ReservationForm, isFormValid} from './components/ReservationForm';
import { initializeTimes, updateTimes, submitForm } from './components/Main';



test('renders label', () => {
  render(<ReservationForm availableTimes={initializeTimes} setAvailableTimes={updateTimes} submitForm={submitForm}/>);
  const labelElement = screen.getByLabelText("Number of guests:")
  expect(labelElement).toBeInTheDocument();
});

test ("initializeTimes returns expected values", ()=> {
  expect(initializeTimes()).not.toBe([])
});

test ("calls initializeTimes function with argument", ()=> {
  const newTimes = updateTimes(initializeTimes, {})
  expect(newTimes()).toEqual(initializeTimes());
});



test("testing validation for each required form field", () => {
  const handleSubmit = jest.fn();
  render (<ReservationForm onSubmit={handleSubmit} availableTimes={initializeTimes} setAvailableTimes={updateTimes} submitForm={submitForm}/>);

  const selectGuests = screen.getByLabelText("Number of guests:");
  fireEvent.change(selectGuests, {target: {value: "Select number of guests"}});

  const selectDate = screen.getByLabelText("Date:");
  fireEvent.change(selectDate, {target: {value: ""}});

  const selectOccasion = screen.getByLabelText("Select occasion:");
  fireEvent.change(selectOccasion, {target: {value: "Select occasion"}});

  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  const requestInput = screen.getByLabelText("Add special request (optional):");
  fireEvent.change(requestInput, {target: {value: "3"}});

  expect(handleSubmit).not.toHaveBeenCalled();
  expect(submitButton).toHaveAttribute("disabled");

});

test("submit button is disabled if form fields empty and not filled in", () => {
  expect(isFormValid({guests: '', date: '', time: '', occasion: '', request: ''})).toBe(false);
});

test("submit button is enabled when all field forms filled in", () => {
  expect(isFormValid({guests: '2 people', date: '2026-06-21', time: '17:00', occasion: 'Birthday', request: 'Please add kids chair'})).toBe(true);
});
