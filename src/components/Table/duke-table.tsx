import React, { FC } from 'react';

interface TableComponentProps<TData = any> {
  title: string;
  data: {
    rows: TData[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
  loading?: boolean;
  isRefetching?: boolean;
  renderColumns?: FC<TData>;
  renderItem?: FC<TData>;
  renderGridItem?: FC<TData>;
  renderFilter?: FC<{
    filterOpen: boolean;
    setFilterOpen: (val: boolean) => void;
  }>;
  renderExport?: FC<{
    exportOpen: boolean;
    setExportOpen: (val: boolean) => void;
  }>;
  renderLoader?: FC;
  renderGridLoader?: FC;
  refetch: () => void;
  hasSearch?: boolean;
  defaultView?: 'grid' | 'list';
}

const Table: FC<TableComponentProps> = () => {
  return <div>duke-table</div>;
};

export default Table;
