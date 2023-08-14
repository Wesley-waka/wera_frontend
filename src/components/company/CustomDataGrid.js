import React, { useState } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { GridToolbarQuickFilter } from "@mui/x-data-grid";

import SortedAscendingIcon from "./icons/SortedAscendingIcon.js";
import SortedDescendingIcon from "./icons/SortedDescendingIcon.js";
import CustomNoRowsOverlay from "./NoRowsOverlay.js";


const CustomDataGrid = ({ rows, columns }) => {
  const [pageSize, setPageSize] = useState(10);

  return (
    <>
      <Box
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "primary.lightest_gray",
            fontSize: 16,
          },
        }}
      >
        <DataGrid
          getRowId={(row) => row.code || row.id}
          rows={rows}
          columns={columns}
          autoHeight  
          sx={{ mt: -3 }}        
          pageSize={pageSize}
          rowsPerPageOptions={[5, 10, 15, 20, 25, 50, 100]}
          onPageSizeChange={(newValue) => setPageSize(newValue)}
          components={{
            ColumnSortedDescendingIcon: SortedDescendingIcon,
            ColumnSortedAscendingIcon: SortedAscendingIcon,
            NoRowsOverlay: CustomNoRowsOverlay,
            Toolbar: GridToolbarQuickFilter,
          }}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
        />
      </Box>
    </>
  );
};
export default CustomDataGrid;
