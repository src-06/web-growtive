import { LayoutAdmin } from "@/Components"
import { ServiceCharts } from "@/Components/Partials/Dashboard/ServicesChart"
import { Charts } from "@/Types"

const AdminDashboard = ({ charts }: { charts: Charts[] }) => {
  return (
    <LayoutAdmin>
      <ServiceCharts charts={charts} />
    </LayoutAdmin>
  )
}

export default AdminDashboard
