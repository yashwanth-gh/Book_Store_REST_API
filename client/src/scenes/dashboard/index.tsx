import { useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { useGetKpisQuery } from "@/state/api";

const gridTemplateLargeScreens = `
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

const gridTemplateSmallScreens = `
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

  const { data: kpiData, isLoading, isError } = useGetKpisQuery();

  if (isLoading)
    return (
      <Box
        width={"100%"}
        height={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ color: palette.secondary[400] }}
      >
        <h2>Loading Data...</h2>
      </Box>
    );

  if (isError || !kpiData?.data)
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
      <Row1 data={kpiData?.data} />
      <Row2 data={kpiData?.data} />
      <Row3 data={kpiData?.data} />
    </Box>
  );
};

export default Dashboard;
