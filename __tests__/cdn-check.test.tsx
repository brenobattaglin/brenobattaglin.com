import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('CDN Check', () => {
  it('should not contain Google Fonts CDN links in index.html', () => {
    const indexPath = path.resolve(__dirname, '../index.html');
    const indexContent = fs.readFileSync(indexPath, 'utf-8');

    expect(indexContent).not.toContain('fonts.googleapis.com');
    expect(indexContent).not.toContain('fonts.gstatic.com');
  });
});
