import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Header } from './Header';

describe('Header component', () => {
  it('should render the navigation items', () => {
    const { getByText } = render(<Header />);
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('Works')).toBeInTheDocument();
    expect(getByText('Contact')).toBeInTheDocument();
  });

  it('should have links with correct hrefs', () => {
    const { getByText } = render(<Header />);
    expect(getByText('About').closest('a')).toHaveAttribute('href', '#about');
    expect(getByText('Works').closest('a')).toHaveAttribute('href', '#works');
    expect(getByText('Contact').closest('a')).toHaveAttribute(
      'href',
      '#contact',
    );
  });

  it('should call window.scrollTo when a navigation link is clicked', () => {
    // Mock getElementById and scrollTo
    const mockElement = {
      getBoundingClientRect: () => ({ top: 500 }),
    };
    document.getElementById = vi.fn().mockReturnValue(mockElement);
    window.scrollTo = vi.fn();
    window.pageYOffset = 100;

    const { getByText } = render(<Header />);
    const aboutLink = getByText('About');

    fireEvent.click(aboutLink);

    expect(window.scrollTo).toHaveBeenCalled();
    // 500 (top) + 100 (offset) - 80 (headerOffset) = 520
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 520,
      behavior: 'smooth',
    });
  });

  it('should not call window.scrollTo if the target element is not found', () => {
    document.getElementById = vi.fn().mockReturnValue(null);
    window.scrollTo = vi.fn();

    const { getByText } = render(<Header />);
    const aboutLink = getByText('About');

    fireEvent.click(aboutLink);

    expect(window.scrollTo).not.toHaveBeenCalled();
  });
});
