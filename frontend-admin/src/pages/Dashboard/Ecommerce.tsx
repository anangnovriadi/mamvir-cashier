import PageMeta from "../../components/common/PageMeta";
import DashboardMetrics from "../../components/ecommerce/DashboardMetrics";
import PenjualanPerProdukChart from "../../components/ecommerce/PenjualanPerProdukChart";

export default function Ecommerce() {
  return (
    <>
      <PageMeta
        title="Dashboard | Mamvir Cashier"
        description="Halaman dashboard utama Mamvir Cashier"
      />
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 md:gap-6">
        <DashboardMetrics />
        <PenjualanPerProdukChart />
      </div>
    </>
  );
}
