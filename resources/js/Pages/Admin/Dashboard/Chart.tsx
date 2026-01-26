import { LayoutAdmin, ServiceCharts } from "@/Components"
import { Charts } from "@/Types"

const AdminDashboardChart = ({ charts }: { charts: Charts[] }) => {
  return (
    <LayoutAdmin
      title="Dashboard"
    >
      <ServiceCharts charts={charts} />
    </LayoutAdmin>
  )
}

export default AdminDashboardChart
