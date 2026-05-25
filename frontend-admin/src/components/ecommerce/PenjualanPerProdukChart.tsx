import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useLanguage } from "../../context/LanguageContext";

const productKeys = [
  "product.ayamBakar",
  "product.nasiGoreng",
  "product.mieGoreng",
  "product.esTeh",
  "product.jusAlpukat",
  "product.sotoAyam",
  "product.rendang",
  "product.gadoGado",
];

const salesData = [42, 78, 55, 91, 38, 63, 47, 29];

export default function PenjualanPerProdukChart() {
  const { t } = useLanguage();
  const products = productKeys.map((key) => t(key));

  const options: ApexOptions = {
    colors: ["var(--color-mamvir-500)"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "bar",
      height: 300,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "55%",
        borderRadius: 4,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: products,
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          fontFamily: "Outfit, sans-serif",
          cssClass: "text-xs fill-gray-500 dark:fill-gray-400",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontFamily: "Outfit, sans-serif",
          cssClass: "text-xs fill-gray-500 dark:fill-gray-400",
        },
      },
    },
    grid: {
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: false } },
      borderColor: "#e5e7eb",
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val} ${t("dashboard.chart.soldSuffix")}`,
      },
    },
  };

  const series = [
    {
      name: t("dashboard.chart.sold"),
      data: salesData,
    },
  ];

  return (
    <div className="flex flex-col h-full rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          {t("dashboard.chart.salesByProduct")}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {t("dashboard.chart.salesByProductDesc")}
        </p>
      </div>
      <div className="flex-1">
        <Chart options={options} series={series} type="bar" height="100%" />
      </div>
    </div>
  );
}
