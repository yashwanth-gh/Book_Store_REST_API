import DashboardBox from "@/components/DashboardBox";
import DashboardBoxHeader from "@/components/DashboardBoxHeader";
import FlexBetween from "@/components/FlexBetween";
import { Data, ProductData, TransactionData } from "@/state/types";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { useMemo } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

interface IRow3Props {
  kpiData: Data[];
  productData: ProductData[];
  transactionData: TransactionData[];
}

const Row3 = ({ kpiData, productData, transactionData }: IRow3Props) => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.secondary[200]];

  const pieChartData = useMemo(() => {
    if (kpiData) {
      const totalExpenses = kpiData[0].totalExpenses;
      return Object.entries(kpiData[0].expensesByCategory).map(
        ([key, value]) => {
          return [
            {
              name: key,
              value: value,
            },
            {
              name: `${key} of Total`,
              value: totalExpenses - value,
            },
          ];
        }
      );
    }
  }, [kpiData]);

  const productColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "expense",
      headerName: "Expense",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
  ];
  const transactionColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "buyer",
      headerName: "Buyer",
      flex: 0.67,
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 0.35,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "productIds",
      headerName: "Count",
      flex: 0.1,
      renderCell: (params: GridCellParams) =>
        (params.value as Array<string>).length,
    },
  ];
  return (
    <>
      <DashboardBox gridArea={"g"}>
        <DashboardBoxHeader
          title={"List of products"}
          rightText={`${productData?.length} products`}
        />
        <Box
          mt={"0.5rem"}
          p={"0.5rem"}
          height={"75%"}
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]}!important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${palette.grey[800]}!important`,
            },
            "& .MuiDataGrid-coloumSeparator": {
              visibility: "hidden",
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: palette.background.default,
            },
            "& .MuiDataGrid-columnMenu:hover": {
              backgroundColor: "yellow",
            },
          }}
        >
          <DataGrid
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            rows={productData || []}
            columns={productColumns}
          />
        </Box>
      </DashboardBox>
      <DashboardBox gridArea={"h"}>
        <DashboardBoxHeader
          title={"Recent orders"}
          rightText={`${transactionData?.length} latest transactions`}
        />
        <Box
          mt={"1rem"}
          p={"0.5rem"}
          height={"80%"}
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]}!important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${palette.grey[800]}!important`,
            },
            "& .MuiDataGrid-coloumSeparator": {
              visibility: "hidden",
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: palette.background.default,
            },
            "& .MuiDataGrid-columnMenu:hover": {
              backgroundColor: "yellow",
            },
          }}
        >
          <DataGrid
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            rows={transactionData || []}
            columns={transactionColumns}
          />
        </Box>
      </DashboardBox>
      <DashboardBox gridArea={"i"}>
        <DashboardBoxHeader
          title="Expense Break down by category"
          rightText="+4%"
        />
        <ResponsiveContainer width={"100%"} height={"50%"}>
          <FlexBetween
            mt={"0.5rem"}
            gap={"0.5rem"}
            p={"0 1rem"}
            textAlign={"center"}
          >
            {pieChartData?.map((data, i) => (
              <Box key={`${data[0].name}-${i}`}>
                <PieChart width={100} height={100}>
                  <Tooltip />
                  <Pie
                    data={data}
                    dataKey="value"
                    stroke="none"
                    paddingAngle={5}
                    innerRadius={18}
                    outerRadius={35}
                    fill={palette.grey[500]}
                  />
                  {data.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index]} />
                  ))}
                </PieChart>
                <Typography variant="h5" mt={"-0.8rem"}>
                  {data[0].name}
                </Typography>
              </Box>
            ))}
          </FlexBetween>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea={"j"}>
        <DashboardBoxHeader
          title="Overall Summary and Explanation Data"
          rightText="+15%"
        />
        <Box
          height="15px"
          margin="1.25rem 1rem 0.4rem 1rem"
          bgcolor={palette.primary[800]}
          borderRadius="1rem"
        >
          <Box
            height="15px"
            bgcolor={palette.primary[600]}
            borderRadius="1rem"
            width="40%"
          ></Box>
        </Box>
        <Typography margin="0 1rem" variant="h6">
          Orci aliquam enim vel diam. Venenatis euismod id donec mus lorem etiam
          ullamcorper odio sed. Ipsum non sed gravida etiam urna egestas
          molestie volutpat et. Malesuada quis pretium aliquet lacinia ornare
          sed. In volutpat nullam at est id cum pulvinar nunc.
        </Typography>
      </DashboardBox>
    </>
  );
};

export default Row3;
