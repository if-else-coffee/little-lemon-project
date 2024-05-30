import { render, screen } from '@testing-library/react';
import ReservationForm from './components/ReservationForm';
import { initializeTimes, updateTimes } from './components/Main';
import { useReducer } from 'react';


test('renders label', () => {
  render(<ReservationForm availableTimes={initializeTimes} setAvailableTimes={updateTimes}/>);
  const labelElement = screen.getByLabelText("Number of guests:")
  expect(labelElement).toBeInTheDocument();
});

test ("initializeTimes returns expected values", ()=> {
  expect(["17:00","18:00","19:00","20:00","21:00","22:00"]).toEqual(initializeTimes());
});

test ("calls initializeTimes function with argument", ()=> {
  const newTimes = updateTimes(initializeTimes, {})
  expect(newTimes()).toEqual(initializeTimes());
});


