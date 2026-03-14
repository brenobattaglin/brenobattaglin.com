import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import { Header } from '../components/Header';

describe('Smoke test', () => {
  it('should pass if Vitest is working', () => {
    expect(true).toBe(true);
  });

  it('should render the Header component', () => {
    const { getByText } = render(<Header />);
    expect(getByText('About')).toBeInTheDocument();
  });
});
