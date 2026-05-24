import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const products = [
  "Ayam Bakar",
  "Nasi Goreng",
  "Mie Goreng",
  "Es Teh",
  "Jus Alpukat",
  "Soto Ayam",
  "Rendang",
  "Gado-Gado",
];

const salesData = [42, 78, 55, 91, 38, 63, 47, 29];

export default function PenjualanPerProdukChart() {
  const options: ApexOptions = {
    colors: ["#465fff"],
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
        formatter: (val: number) => `${val} terjual`,
      },
    },
  };

  const series = [
    {
      name: "Terjual",
      data: salesData,
    },
  ];

  return (
    <div className="flex flex-col h-full rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Penjualan Berdasarkan Produk
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Jumlah produk terjual bulan ini
        </p>
      </div>
      <div className="flex-1">
        <Chart options={options} series={series} type="bar" height="100%" />
      </div>
    </div>
  );
}
