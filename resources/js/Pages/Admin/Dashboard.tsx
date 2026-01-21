import { LayoutAdmin, ServiceCharts } from "@/Components"
import { Charts } from "@/Types"

const AdminDashboard = ({ charts }: { charts: Charts[] }) => {
  return (
    <LayoutAdmin
      title="Dashboard"
    >
      <ServiceCharts charts={charts} />
    </LayoutAdmin>
  )
}

export default AdminDashboard
