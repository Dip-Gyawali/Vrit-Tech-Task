import { render, screen } from '@testing-library/react';
import Dashboard from '../pages/dashboard';
import cookie from 'js-cookie';

jest.mock('js-cookie', () => ({
  get: jest.fn(),
}));

test('redirects to login if not authenticated', () => {
  cookie.get.mockReturnValue(null);
  render(<Dashboard />);
  
  expect(window.location.href).toBe('/login');
});