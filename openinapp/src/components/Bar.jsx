import { Card, Title, BarChart, } from "@tremor/react";

const chartdata2 = [
  {
    name: "Week 1",
    "User": 500,
    "Guest": 396,
    
  },
  {
    name: "Week 2",
    "Guest": 396,
    "User": 500,
    
  },
  {
    name: "Week 3",
    "Guest": 396,
    "User": 1000,
    
  },
  {
    name: "Week 4",
    "Guest": 396,
    "User": 500,
    
  },
];

const dataFormatter = (number) => {
  return  new Intl.NumberFormat("abcasda").format(number).toString();
};

const Bar = () => (
  <Card>
    <Title>Activities</Title>
    <p className="text-[7px] font-montserrat text-[#858585]">Aug - Sept 2023</p>
    <BarChart
      className="mt-6"
      data={chartdata2}
      index="name"
      categories={["Guest","User"]}
      colors={["green", "red"]}
      valueFormatter={dataFormatter}
      yAxisWidth={48}
      
    />
  </Card>
);

export default Bar;
