import { cn } from "@/Lib/util"
import { Charts } from "@/Types"
import { ComponentProps, useState } from "react"
import Chart from "react-apexcharts"
import { PersentChart } from "./PersentChart"

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

const ServiceCharts = ({ charts }: { charts: Charts[] }) => {
  const chart = (month: number, year: number) => charts.filter(value => {
    const date = new Date(value.created_at)
    return date.getMonth() == month && date.getFullYear() == (year || (new Date).getFullYear())
  })

  const date = new Date,
    [ year, setYear ] = useState(date.getFullYear()),
    years = []

  for (let i = 0; i < 3; i++)
    years.push(date.getFullYear()-i)

  let dataIG: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    dataTT: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    dataIGTT: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    dataEndors: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    persentIG: number[] = [0, 0],
    persentTT: number[] = [0, 0],
    persentIGTT: number[] = [0, 0],
    persentEndors: number[] = [0, 0]

  categories.map((v, index) => {
    chart(index, year).map(value => {
      dataIG[index] += value.instagram
      dataTT[index] += value.tiktok
      dataIGTT[index] += value.instagram_tiktok
      dataEndors[index] += value.endorsement
    })
  })

  const persentMonth: number[] = [date.getMonth() - 1, date.getMonth() - 2]
  const conditionMonth: number[] = [persentMonth[0] === -1 ? 11 : persentMonth[0], persentMonth[1] === -2 ? 10 : persentMonth[1] === -1 ? 11 : persentMonth[1]]
  const conditionYear: number[] = [persentMonth[0] === -1 ? date.getFullYear() - 1 : date.getFullYear(), persentMonth[1] === -2 || persentMonth[1] === -1 ? date.getFullYear() - 1 : date.getFullYear()]

  chart(conditionMonth[0], conditionYear[0]).map(value => {
    persentIG[0] += value.instagram
    persentTT[0] += value.tiktok
    persentIGTT[0] += value.instagram_tiktok
    persentEndors[0] += value.endorsement
  })

  chart(conditionMonth[1], conditionYear[1]).map(value => {
    persentIG[1] += value.instagram
    persentTT[1] += value.tiktok
    persentIGTT[1] += value.instagram_tiktok
    persentEndors[1] += value.endorsement
  })

  persentIG[0] = Math.floor(((persentIG[0] / persentIG[1]) - 1) * 100)
  persentTT[0] = Math.floor(((persentTT[0] / persentTT[1]) - 1) * 100)
  persentIGTT[0] = Math.floor(((persentIGTT[0] / persentIGTT[1]) - 1) * 100)
  persentEndors[0] = Math.floor(((persentEndors[0] / persentEndors[1]) - 1) * 100)

  return (
    <div>
      <Background
        className="relative"
      >
        <select
          defaultValue={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="z-50 absolute top-6 left-4 px-2"
        >
          { years.map(value =>
            <option key={value} value={value}>{value}</option>
          )}
        </select>
        <Chart
          options={{
            chart: {
              id: 'ApexCharts',
              background: 'transparent'
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
            stroke: {
              curve: 'smooth'
            },
            theme: {
              mode: 'dark',
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
            {
              name: 'Endorsement',
              data: dataEndors,
            },
          ]}
          type="area"
        />
      </Background>

      <Background
        className="mt-10"
      >
        <p
          className="text-center font-bold"
        >Persentase penjualan dari bulan lalu</p>
        <p
          className="text-center font-bold"
        >{categories[conditionMonth[1]]} {conditionYear[1]} - {categories[conditionMonth[0]]} {conditionYear[0]}</p>
        <div
          className="flex flex-wrap"
        >
          <PersentChart
            title="Instagram"
            data={persentIG[0]}
          />
          <PersentChart
            title="Tiktok"
            data={persentTT[0]}
          />
          <PersentChart
            title="Instagram & Tiktok"
            data={persentIGTT[0]}
          />
          <PersentChart
            title="Endorsement"
            data={persentEndors[0]}
          />
        </div>
      </Background>
    </div>
  )
}

const Background = ({ children, className }: ComponentProps<"div">) => {
  return (
    <div
      className={cn("w-full h-fit pt-6 px-3 text-foreground bg-background shadow-xl shadow-background/50 rounded-3xl", className)}
    >{children}</div>
  )
}

export { Background, ServiceCharts }
