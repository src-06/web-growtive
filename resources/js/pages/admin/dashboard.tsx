import { ApexCharts } from "@/components/admin/dashboard/charts"
import Layouts from "@/components/admin/layouts"
import { Charts } from "@/types"

export default function AdminDashboard({ charts }: { charts: Charts[] }) {
  return (
    <Layouts
      title="Dashboard"
    >
      <ApexCharts charts={charts} />
    </Layouts>
  )
}
