import * as React from 'react';
import { render } from '@testing-library/react';

import 'jest-canvas-mock';

import { Table } from '../src/components';

describe('table render', () => {
  it('renders without crashing', () => {
    render(
      <Table
        title={''}
        data={{
          rows: [],
          total: 0,
          page: 0,
          pageSize: 0,
          totalPages: 0,
        }}
        refetch={function (): void {
          throw new Error('Function not implemented.');
        }}
      />,
    );
  });
});
