import { fireEvent, render, screen, waitFor } from './utils/test-utils';
import ApiDemo from '../app/api-demo';
import { fetchHabits } from '@/services/api';
import { mockHabitsData } from './fixtures/habits';
import {
  mockFetchHabitsSuccess,
  mockFetchHabitsFailure,
} from './utils/mock-helpers';

jest.mock('@/services/api');

describe('ApiDemoScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  // Test case for successful API response
  it('renders habit data after successful API fetch', async () => {
    mockFetchHabitsSuccess(mockHabitsData);

    render(<ApiDemo />);

    // Advance timers to allow async operations to complete
    jest.runAllTimers();

    await waitFor(
      () => {
        expect(screen.getByText('Drink Water')).toBeTruthy();
        expect(screen.getByText('Exercise')).toBeTruthy();
      },
      { timeout: 3000 }
    );
  });

  // Test case for API failure
  it('displays error message on API failure', async () => {
    mockFetchHabitsFailure();

    render(<ApiDemo />);

    jest.runAllTimers();

    await waitFor(
      () => {
        expect(
          screen.getByText('Failed to load habits. Please try again.')
        ).toBeTruthy();
      },
      { timeout: 3000 }
    );
  });

  //Test Case for Loading State
  it('displays loading indicator while fetching data', () => {
    (fetchHabits as jest.Mock).mockReturnValue(new Promise(() => {}));

    render(<ApiDemo />);

    expect(screen.getByTestId('loading-indicator')).toBeTruthy();
  });

  //Test Case for Retry Button
  it('successfully reloads data when retry button is pressed', async () => {
    (fetchHabits as jest.Mock).mockRejectedValueOnce(new Error('API Error'));
    render(<ApiDemo />);

    const retryButton = await screen.findByText('Retry');

    (fetchHabits as jest.Mock).mockResolvedValueOnce(mockHabitsData);

    fireEvent.press(retryButton);

    jest.runAllTimers();

    await waitFor(
      () => {
        expect(screen.getByText('Drink Water')).toBeTruthy();
        expect(screen.getByText('Exercise')).toBeTruthy();
      },
      { timeout: 3000 }
    );
  });
});
