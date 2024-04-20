import DashboardBox from "@/components/DashboardBox";
import { Data } from "@/state/types";

interface IRow1Props{
  data:Data[];
}

const Row2 = ({data}:IRow1Props) => {
  return (
    <>
      <DashboardBox gridArea={"d"}></DashboardBox>
      <DashboardBox gridArea={"e"}></DashboardBox>
      <DashboardBox gridArea={"f"}></DashboardBox>
    </>
  );
};

export default Row2;
