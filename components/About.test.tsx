import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Hero } from './About';

// Mock useIntersectionObserver
vi.mock('../hooks/useIntersectionObserver', () => ({
  useIntersectionObserver: vi.fn(() => ({
    elementRef: { current: null },
    isVisible: true,
  })),
}));

describe('Hero component', () => {
  it('should render the name "BRENO BATTAGLIN"', () => {
    const { getByText } = render(<Hero />);
    expect(getByText(/BRENO/)).toBeInTheDocument();
    expect(getByText(/BATTAGLIN/)).toBeInTheDocument();
  });

  it('should render the role "Software Engineer"', () => {
    const { getByText } = render(<Hero />);
    expect(getByText('Software Engineer')).toBeInTheDocument();
  });

  it('should render the location "Brazil"', () => {
    const { getByText } = render(<Hero />);
    expect(getByText('Brazil')).toBeInTheDocument();
  });

  it('should render the scroll indicator', () => {
    const { getByText } = render(<Hero />);
    expect(getByText(/Scroll/i)).toBeInTheDocument();
  });

  it('should render the professional narrative', () => {
    const { getByText } = render(<Hero />);
    expect(getByText(/passionate about building high-quality software/i)).toBeInTheDocument();
  });
});
