import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Contact } from './Contact';

// Mock useIntersectionObserver
vi.mock('../hooks/useIntersectionObserver', () => ({
  useIntersectionObserver: vi.fn(() => ({
    elementRef: { current: null },
    isVisible: true,
  })),
}));

describe('Contact component', () => {
  it('should render the "Contact Me" heading', () => {
    const { getByText } = render(<Contact />);
    expect(getByText('Contact Me')).toBeInTheDocument();
  });

  it('should render the LinkedIn button with correct URL', () => {
    const { getByText } = render(<Contact />);
    const link = getByText('Connect on LinkedIn').closest('a');
    expect(link).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/brenobattaglin',
    );
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('should render the Email button with correct mailto link', () => {
    const { getByText } = render(<Contact />);
    const link = getByText('Send Message').closest('a');
    expect(link).toHaveAttribute(
      'href',
      'mailto:contato@breno.simplelogin.com',
    );
  });

  it('should render the profile image', () => {
    const { getByAltText } = render(<Contact />);
    expect(getByAltText('Breno Battaglin profile photo')).toBeInTheDocument();
  });

  it('should render the availability status', () => {
    const { getByText } = render(<Contact />);
    expect(getByText(/Available for new projects/i)).toBeInTheDocument();
  });
});
