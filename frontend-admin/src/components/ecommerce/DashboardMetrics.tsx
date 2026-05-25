import { HugeiconsIcon } from "@hugeicons/react";
import {
  GridIcon,
  Package01Icon,
  Clock01Icon,
  CheckmarkCircle01Icon,
} from "@hugeicons/core-free-icons";

const metrics = [
  // Baris 1
  {
    label: "Total Produk",
    value: "248",
    icon: Package01Icon,
    iconBg: "bg-mamvir-50 dark:bg-mamvir-500/15",
    iconColor: "text-mamvir-700 dark:text-mamvir-400",
  },
  {
    label: "Total Kategori",
    value: "12",
    icon: GridIcon,
    iconBg: "bg-mamvir-100 dark:bg-mamvir-500/20",
    iconColor: "text-mamvir-800 dark:text-mamvir-300",
  },
  // Baris 2
  {
    label: "Penjualan Sudah Bayar Hari Ini",
    value: "Rp 2.750.000",
    icon: CheckmarkCircle01Icon,
    iconBg: "bg-green-50 dark:bg-green-500/10",
    iconColor: "text-green-500 dark:text-green-400",
  },
  {
    label: "Penjualan Belum Bayar Hari Ini",
    value: "Rp 250.000",
    icon: Clock01Icon,
    iconBg: "bg-red-50 dark:bg-red-500/10",
    iconColor: "text-red-500 dark:text-red-400",
  },
];

export default function DashboardMetrics() {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-6">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6"
        >
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-lg ${metric.iconBg}`}
          >
            <HugeiconsIcon
              icon={metric.icon}
              size={24}
              strokeWidth={1.8}
              className={metric.iconColor}
            />
          </div>
          <div className="mt-5">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {metric.label}
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              {metric.value}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}
