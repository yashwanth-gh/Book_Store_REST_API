import DashboardBox from "@/components/DashboardBox";
import DashboardBoxHeader from "@/components/DashboardBoxHeader";
import FlexBetween from "@/components/FlexBetween";
import { Data, ProductData } from "@/state/types";
import { Box, Typography, useTheme } from "@mui/material";

import { useMemo } from "react";
import {
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";

interface IRow2Props {
  kpiData: Data[];
  productData: ProductData[];
}

const pieData = [
  { name: "Group A", value: 600 },
  { name: "Group B", value: 400 },
];

const Row2 = ({ kpiData, productData }: IRow2Props) => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.secondary[200]];
  const operationalExpenses = useMemo(() => {
    return kpiData[0].monthlyData.map((item) => {
      return {
        name: item.month.substring(0, 3),
        "Operational expenses": item.operationalExpenses,
        "Non-Operational expenses": item.nonOperationalExpenses,
      };
    });
  }, [kpiData]);
  const productExpensesData = useMemo(() => {
    return productData.map((item) => {
      return {
        id: item._id,
        price: item.price,
        expense: item.expense,
      };
    });
  }, [productData]);

  return (
    <>
      <DashboardBox gridArea={"d"}>
        <DashboardBoxHeader
          title={"Operational and Non-Operational cost"}
          subtitle={
            "blue line represents Operational cost & grey line Non-Ops cost"
          }
          rightText={"+1.76%"}
        />
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart
            width={500}
            height={400}
            data={operationalExpenses}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 55,
            }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "9px" }}
            />
            <YAxis
              yAxisId={"left"}
              orientation="left"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "12px" }}
            />
            <YAxis
              yAxisId={"right"}
              orientation="right"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "12px" }}
            />

            <Line
              yAxisId={"left"}
              type="monotone"
              dataKey="Operational expenses"
              dot={true}
              stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId={"right"}
              type="monotone"
              dataKey="Non-Operational expenses"
              stroke={palette.primary.main}
            />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea={"e"}>
        <DashboardBoxHeader title="Campaigns and Targets" rightText="+4%" />
        <FlexBetween mt="0.25rem" gap="1.5rem" pr="1rem">
          <PieChart
            width={110}
            height={100}
            margin={{
              top: 0,
              right: -10,
              left: 10,
              bottom: 0,
            }}
          >
            <Tooltip />
            <Pie
              data={pieData}
              dataKey="value"
              stroke="none"
              paddingAngle={5}
              innerRadius={18}
              outerRadius={38}
              fill={palette.grey[500]}
            />
            {pieData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={pieColors[index]} />
            ))}
          </PieChart>
          <Box ml="-0.7rem" flexBasis="40%" textAlign="center">
            <Typography variant="h5">Target Sales</Typography>
            <Typography m="0.3rem 0" variant="h3" color={palette.primary[300]}>
              83
            </Typography>
            <Typography variant="h6">
              Finance goals of the campaign that is desired
            </Typography>
          </Box>
          <Box flexBasis="40%">
            <Typography variant="h5">Losses in Revenue</Typography>
            <Typography variant="h6">Losses are down 25%</Typography>
            <Typography mt="0.4rem" variant="h5">
              Profit Margins
            </Typography>
            <Typography variant="h6">
              Margins are up by 30% from last month.
            </Typography>
          </Box>
        </FlexBetween>
      </DashboardBox>
      <DashboardBox gridArea={"f"}>
        <DashboardBoxHeader
          title="Product Prices vs Expenses"
          rightText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{
              top: 20,
              right: 25,
              bottom: 40,
              left: -16,
            }}
          >
            <CartesianGrid stroke={palette.grey[800]} />
            <YAxis
              type="number"
              dataKey="expense"
              name="expense"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`}
            />
            <XAxis
              type="number"
              dataKey="price"
              name="price"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`}
            />
            <ZAxis type="number" range={[20]} />
            <Tooltip formatter={(v) => `$${v}`} />
            <Scatter
              name="Product expense ratio"
              data={productExpensesData}
              fill="#8884d8"
            />
          </ScatterChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default Row2;
