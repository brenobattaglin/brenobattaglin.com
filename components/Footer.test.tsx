import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer component', () => {
  it('should render the social links', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('Github')).toBeInTheDocument();
    expect(getByText('LinkedIn')).toBeInTheDocument();
  });

  it('should have social links with correct URLs and attributes', () => {
    const { getByText } = render(<Footer />);
    const githubLink = getByText('Github').closest('a');
    const linkedinLink = getByText('LinkedIn').closest('a');

    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/brenobattaglin',
    );
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');

    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/brenobattaglin',
    );
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('should render the copyright text', () => {
    const { getByText } = render(<Footer />);
    expect(
      getByText(/Breno Battaglin\. All rights reserved\./i),
    ).toBeInTheDocument();
  });
});
