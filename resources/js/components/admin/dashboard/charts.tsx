import { Charts } from "@/types"
import { useState } from "react"
import Chart from "react-apexcharts"

const categories = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'Oktober',
  'September',
  'November',
  'Desember'
]

export function ApexCharts({ charts }: { charts: Charts[] }) {
  const chart = (month: number, year: number) => charts.filter(value => {
    const date = new Date(value.created_at)
    return date.getMonth() == month && date.getFullYear() == (year || (new Date).getFullYear())
  }), [ year, setYear ] = useState((new Date).getFullYear()), years = []

  let dataIG: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    dataTT: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    dataIGTT: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  categories.map((v, index) => {
    chart(index, year).map(value => {
      dataIG[index] += value.instagram
      dataTT[index] += value.tiktok
      dataIGTT[index] += value.ig_and_tt
    })
  })

  return (
    <div
      className="relative pt-6 px-3 text-fg bg-bg rounded-3xl shadow-xl shadow-bg/50"
    >
      <select
        defaultValue={year}
        onChange={(e) => setYear(Number(e.target.value))}
        className="z-50 absolute top-6 left-4 px-2"
      >
        {[2026, 2025, 2024].map(value =>
          <option key={value} value={value}>{value}</option>
        )}
      </select>
      <Chart
        options={{
          chart: {
            id: 'ApexCharts',
            background: 'transparent',
          },
          legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'center',
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories,
            title: {
              text: 'Data Penjualan Jasa Growdience Creative',
            }
          },
          // categories,
          stroke: {
            curve: 'smooth'
          },
          theme: {
            mode: 'dark',
            palette: 'transparent',
            monochrome: {
              enabled: true,
              color: '#565656',
            },
          },
        }}
        series={[
          {
            name: 'Instagram',
            data: dataIG,
          },
          {
            name: 'Tiktok',
            data: dataTT,
          },
          {
            name: 'Instagran & Tiktok',
            data: dataIGTT,
          },
        ]}
        type="area"
      />
    </div>
  )
}
