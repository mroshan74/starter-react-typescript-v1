import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import App from '../App';

describe('App', () => {
  it('Renders the vite screen', () => {
    // ARRANGE
    render(<App />);
    // ACT
    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Vite + React');
  });
});
