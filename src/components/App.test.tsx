import { render, screen } from '@testing-library/react';

import App from './App';

it("renders app", () => {
  render(<App />);
  const greeting = screen.getByText(/hello/i);
  expect(greeting).toBeInTheDocument();
});
