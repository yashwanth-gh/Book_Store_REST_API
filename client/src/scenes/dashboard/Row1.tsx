import DashboardBox from "@/components/DashboardBox";
import DashboardBoxHeader from "@/components/DashboardBoxHeader";
import { Data } from "@/state/types";
import { useTheme } from "@mui/material";
import { useMemo } from "react";
import {
  Area,
  AreaChart,
  Line,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  LineChart,
  BarChart,
  Bar,
} from "recharts";

interface IRow1Props {
  data: Data[];
}

const Row1 = ({ data }: IRow1Props) => {
  const { palette } = useTheme();

  const revenueExpenses = useMemo(() => {
    return data[0].monthlyData.map((item) => {
      return {
        name: item.month.substring(0, 3),
        revenue: item.revenue,
        expenses: item.expenses,
      };
    });
  }, [data]);

  const revenueProfit = useMemo(() => {
    return data[0].monthlyData.map((item) => {
      return {
        name: item.month.substring(0, 3),
        revenue: item.revenue,
        profit: (item.revenue - item.expenses).toFixed(2),
      };
    });
  }, [data]);

  return (
    <>
      <DashboardBox gridArea={"a"}>
        <DashboardBoxHeader
          title={"Revenue and Expenses"}
          subtitle={
            "Top line represents revenue & bottom line represents expenses"
          }
          rightText={"+4.34%"}
        />
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <AreaChart
            width={730}
            height={250}
            data={revenueExpenses}
            margin={{
              top: 15,
              right: 25,
              left: -10,
              bottom: 60,
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "9px" }}
            />
            <YAxis
              tickLine={false}
              axisLine={{ strokeWidth: "0" }}
              style={{ fontSize: "12px" }}
              domain={[8000, 23000]}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              dot={true}
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
            <Area
              type="monotone"
              dataKey="expenses"
              dot={true}
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorExpenses)"
            />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea={"b"}>
        <DashboardBoxHeader
          title={"Profit and Revenue"}
          subtitle={
            "Top line represents Profit & bottom line represents Revenue"
          }
          rightText={"+2.34%"}
        />
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart
            width={500}
            height={400}
            data={revenueProfit}
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
            <Legend
              height={20}
              wrapperStyle={{
                margin: "0 0 10px 0",
              }}
            />
            <Line
              yAxisId={"left"}
              type="monotone"
              dataKey="profit"
              dot={true}
              stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId={"right"}
              type="monotone"
              dataKey="revenue"
              stroke={palette.primary.main}
            />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>

      <DashboardBox gridArea={"c"}>
        <DashboardBoxHeader
          title={"Revenue month by month"}
          subtitle={"Bar chart representing revenue month by month"}
          rightText={"-1.94%"}
        />
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <BarChart
            data={revenueProfit}
            margin={{
              top: 17,
              right: 15,
              left: -5,
              bottom: 58,
            }}
          >
            <defs>
              <linearGradient
                id="colorMonthlyRevenue"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="20%"
                  stopColor={palette.grey[600]}
                  stopOpacity={1}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.3}
                />
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "9px" }}
            />
            <YAxis
              tickLine={false}
              axisLine={{ strokeWidth: "1" }}
              style={{ fontSize: "12px" }}
            />
            <Tooltip
              cursor={{
                opacity: 0.2,
              }}
            />

            <Bar
              dataKey="revenue"
              fillOpacity={1}
              fill="url(#colorMonthlyRevenue)"
            />
          </BarChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default Row1;
