import { render, screen } from '@testing-library/react';
import MainPage from '../Pages/MainPage';

test('has Language and Font Size selects', () => {
  render(<MainPage />);
  const headerText = screen.getByText(/Font size/i);
  const language = screen.getByText(/Language/i);
  expect(headerText).toBeInTheDocument();
  expect(language).toBeInTheDocument();
});
