import DashboardBox from "@/components/DashboardBox";
import { Data } from "@/state/types";

interface IRow1Props{
  data:Data[];
}

const Row3 = ({data}:IRow1Props) => {
  return (
    <>
      <DashboardBox gridArea={"g"}></DashboardBox>
      <DashboardBox gridArea={"h"}></DashboardBox>
      <DashboardBox gridArea={"i"}></DashboardBox>
      <DashboardBox gridArea={"j"}></DashboardBox>
    </>
  );
};

export default Row3;
