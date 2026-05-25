import PageMeta from "../../components/common/PageMeta";
import DashboardMetrics from "../../components/ecommerce/DashboardMetrics";
import PenjualanPerProdukChart from "../../components/ecommerce/PenjualanPerProdukChart";
import { useLanguage } from "../../context/LanguageContext";

export default function Ecommerce() {
  const { t } = useLanguage();

  return (
    <>
      <PageMeta
        title={t("dashboard.meta.title")}
        description={t("dashboard.meta.description")}
      />
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 md:gap-6">
        <DashboardMetrics />
        <PenjualanPerProdukChart />
      </div>
    </>
  );
}
