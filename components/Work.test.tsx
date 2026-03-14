import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { WorkList } from './WorkList';

// Mock useIntersectionObserver
vi.mock('../hooks/useIntersectionObserver', () => ({
  useIntersectionObserver: vi.fn(() => ({
    elementRef: { current: null },
    isVisible: true,
  })),
}));

describe('WorkList and WorkItem components', () => {
  it('should render the header with project count', () => {
    const { getByText } = render(<WorkList />);
    expect(getByText(/Works/i)).toBeInTheDocument();
    expect(getByText('(04)')).toBeInTheDocument();
  });

  it('should render all project titles', () => {
    const { getByText } = render(<WorkList />);
    expect(getByText('MY BMW')).toBeInTheDocument();
    expect(getByText('MINI')).toBeInTheDocument();
    expect(getByText('ZALLPY')).toBeInTheDocument();
    expect(getByText('MINHA ENTRADA')).toBeInTheDocument();
  });

  it('should open project link in a new tab when clicked', () => {
    window.open = vi.fn();
    const { getByText } = render(<WorkList />);
    const bmwProject = getByText('MY BMW');
    
    fireEvent.click(bmwProject.closest('div[ref]') || bmwProject);
    
    expect(window.open).toHaveBeenCalledWith(
      'https://www.bmw.com',
      '_blank',
      'noopener,noreferrer'
    );
  });

  it('should render project years', () => {
    const { getByText } = render(<WorkList />);
    expect(getByText('2023 - Present')).toBeInTheDocument();
    expect(getByText('2021 - 2023')).toBeInTheDocument();
  });
});
