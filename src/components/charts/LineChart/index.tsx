'use client';

//NETX JS
import dynamic from 'next/dynamic';

// import Chart from 'react-apexcharts';
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

  //CONTEXT
  
  //USEEFFECT

  //TOASTS
  
  //VARIABLES
  const LineChart = (props) => {
  const { chartData, chartOptions } = props;
  
  //STATES

  //FUNCTIONS

  return (
    // @ts-ignore
    <Chart
      options={chartOptions}
      type="line"
      width="100%"
      height="100%"
      series={chartData}
      fontSize={{base: "sm", "2xl":"2xl"}}
    />
  );
};

export default LineChart;
