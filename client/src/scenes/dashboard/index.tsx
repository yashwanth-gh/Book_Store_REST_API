import { useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { useGetKpisQuery, useGetProductsQuery, useGetTransactionQuery } from "@/state/api";
import SkeletonLoader from "@/components/SkeletonLoader";

export const gridTemplateLargeScreens = `
"a b c"
"a b c"
"a b c"
"a b f"
"d e f"
"d e f"
"d h i"
"g h i"
"g h j"
"g h j"
  `;

export const gridTemplateSmallScreens = `
"a"
"a"
"a"
"a"
"b"
"b"
"b"
"b"
"c"
"c"
"c"
"d"
"d"
"d"
"e"
"e"
"f"
"f"
"f"
"g"
"g"
"g"
"h"
"h"
"h"
"h"
"i"
"i"
"j"
"j"
`;

const Dashboard = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { palette } = useTheme();

  const {
    data: kpiData,
    isLoading: isKpiDataLoading,
    isError: isKpiDataError,
  } = useGetKpisQuery();

  const {
    data: productsData,
    isLoading: isLoadingProducts,
    isError: isErrorProducts,
  } = useGetProductsQuery();

  const {
    data: transactionsData,
    isLoading: isLoadingTransactions,
    isError: isErrorTransactions,
  } = useGetTransactionQuery();

  if (isKpiDataLoading || isLoadingProducts || isLoadingTransactions) return <SkeletonLoader />;

  if (
    isKpiDataError ||
    isErrorProducts ||
    isErrorTransactions ||
    !kpiData?.data ||
    !productsData?.data ||
    !transactionsData?.data
  )
    return (
      <Box width={"100%"} height={"100%"} sx={{ color: palette.error.dark }}>
        <h2>ERROR: there was no data received from API</h2>
        <p>Plese try again!</p>
      </Box>
    );

  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"grid"}
      gap={"1.5rem"}
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(3,minmax(370px,1fr))",
              gridTemplateRows: "repeat(10, minmax(60px,1fr))",
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      <Row1 kpiData={kpiData?.data} />
      <Row2 kpiData={kpiData?.data} productData={productsData?.data} />
      <Row3 kpiData={kpiData?.data} productData={productsData?.data} transactionData={transactionsData?.data} />
    </Box>
  );
};

export default Dashboard;
