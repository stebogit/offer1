import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('App should render', () => {
  render(<App />);
  const logoElement = screen.getByTestId('logo');
  expect(logoElement).toBeInTheDocument();
});
