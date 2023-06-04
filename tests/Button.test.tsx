import * as React from 'react';
import { render } from '@testing-library/react';

import 'jest-canvas-mock';

import { Button } from '../src/components';

describe('button render', () => {
  it('renders without crashing', () => {
    render(<Button />);
  });
});
