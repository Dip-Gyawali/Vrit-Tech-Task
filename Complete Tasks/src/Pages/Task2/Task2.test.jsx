import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import axiosMock from 'axios-mock-adapter';
import Task2 from './Task2';

const mock = new axiosMock(axios);

describe('Task2 Component', () => {
  const mockUserData = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1-770-736-8031',
      address: { city: 'Gwenborough' },
    },
  ];

  it('renders the component and shows loading state', () => {
    render(<Task2 />);
    expect(screen.getByText(/API Test/i)).toBeInTheDocument();
  });

  it('displays the user info after successful API call', async () => {
    mock.onGet('https://jsonplaceholder.typicode.com/users').reply(200, mockUserData);
    
    render(<Task2 />);

    await waitFor(() => {
      expect(screen.getByText('Id: 1')).toBeInTheDocument();
      expect(screen.getByText('Name : John Doe')).toBeInTheDocument();
      expect(screen.getByText('Email: john@example.com')).toBeInTheDocument();
      expect(screen.getByText('Phone: 1-770-736-8031')).toBeInTheDocument();
      expect(screen.getByText('Address : Gwenborough')).toBeInTheDocument();
    });
  });
});
