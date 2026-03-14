import { describe, it, expect } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('should render the App component and handle loaded state', async () => {
    const { getByText, getAllByText, container } = render(<App />);

    // Initially it should be opacity-0
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toHaveClass('opacity-0');

    expect(getByText(/BRENO/)).toBeInTheDocument();

    // Wait for loaded state
    await waitFor(
      () => {
        expect(mainDiv).toHaveClass('opacity-100');
      },
      { timeout: 1000 },
    );

    expect(getAllByText(/Works/i).length).toBeGreaterThan(0);
    expect(getByText(/Contact Me/)).toBeInTheDocument();
  });
});
