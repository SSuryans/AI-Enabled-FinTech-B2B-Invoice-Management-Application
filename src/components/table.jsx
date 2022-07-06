import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'id', width: 70 },
  { field: 'business_code', headerName: 'business_code', width: 130 },
  { field: 'cust_number', headerName: 'cust_number', width: 130 },
  { field: 'name_customer', headerName: 'name_customer', width: 130 },
  { field: 'clear_date', headerName: 'clear_date', width: 130 },
  { field: 'buisness_year', headerName: 'buisness_year', width: 130 },
  { field: 'doc_id', headerName: 'doc_id', width: 130 },
  { field: 'posting_date', headerName: 'posting_date', width: 130 },
  { field: 'due_in_date', headerName: 'due_in_date', width: 130 },
  { field: 'baseline_create_date', headerName: 'baseline_create_date', width: 130 },
  { field: 'cust_payment_terms', headerName: 'cust_payment_terms', width: 130 },
  { field: 'converted_usd', headerName: 'converted_usd', width: 130 },
  { field: 'Aging Bucket', headerName: 'Aging Bucket', width: 130 },
  {
    field: 'id',
    headerName: 'id',
    type: 'number',
    width: 90,
  },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}