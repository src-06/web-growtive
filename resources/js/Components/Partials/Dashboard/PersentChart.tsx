import Chart from "react-apexcharts"

const PersentChart = ({ title, data }: { title?: string; data?: number }) => {
  return (
    <div
      className="w-1/2"
    >
      <Chart
        options={{
          chart: {
            id: "MonthCharts",
            background: "transparent",
          },
          legend: {
            show: false,
          },
          stroke: {
            lineCap: "round",
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  color: "#dadada",
                },
                value: {
                  fontSize: "20px",
                  fontWeight: "bold",
                },
              },
            },
          },
          theme: {
            mode: "dark",
            monochrome: {
              enabled: true,
              color: '#111111',
            },
          },
        }}
        series={[
          {
            data: [{
              x: title,
              y: data,
            }],
          }
        ]}
        type="radialBar"
      />
    </div>
  )
}

export { PersentChart }
