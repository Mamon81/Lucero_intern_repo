/** @jest-environment jsdom */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MessageDisplay from './MessageDisplay';

describe('MessageDisplay Component', () => {
  let alertSpy;

  beforeEach(() => {
    window.alert = window.alert || (() => {});
    alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    alertSpy.mockRestore();
  });

  test('renders the title and button correctly', () => {
    render(<MessageDisplay />);

    const title = screen.getByText(
      /Testing React Components with Jest & React Testing Library/i
    );
    const button = screen.getByRole('button', { name: /Press Me/i });

    expect(title).toBeTruthy();
    expect(button).toBeTruthy();
    expect(button.textContent).toBe('Press Me');
  });

  test('calls alert with correct message when button is clicked', async () => {
    render(<MessageDisplay />);
    const user = userEvent.setup();
    const button = screen.getByRole('button', { name: /Press Me/i });

    await user.click(button);

    expect(alertSpy).toHaveBeenCalledTimes(1);
    expect(alertSpy).toHaveBeenCalledWith('Button has been Pressed');
  });
});
