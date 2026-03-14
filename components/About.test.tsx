import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Hero, InfoPill } from './About';

// Mock useIntersectionObserver
vi.mock('../hooks/useIntersectionObserver', () => ({
  useIntersectionObserver: vi.fn(() => ({
    elementRef: { current: null },
    isVisible: true,
  })),
}));

describe('Hero and InfoPill components', () => {
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

  it('should render InfoPill with right alignment and animation', () => {
    const { getByText, container } = render(
      <InfoPill
        label="Test"
        value="Value"
        indicatorColor="bg-red-500"
        align="right"
        animated={true}
      />
    );
    expect(getByText('Test')).toBeInTheDocument();
    expect(getByText('Value')).toBeInTheDocument();
    
    // Check for right alignment class
    const pillContainer = container.firstChild as HTMLElement;
    expect(pillContainer).toHaveClass('items-end');
    
    // Check for animation class on the indicator
    const indicator = pillContainer.querySelector('.bg-red-500');
    expect(indicator).toHaveClass('animate-pulse');
  });
});
