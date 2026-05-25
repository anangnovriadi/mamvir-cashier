import { useMemo, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Add01Icon,
  PencilEdit01Icon,
  Delete02Icon,
  Search01Icon,
  FilterHorizontalIcon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import { useLanguage } from "../../context/LanguageContext";

type ProductRow = {
  sku: string;
  name: string;
  categoryKey: "category.food" | "category.drink";
  price: string;
  stock: number;
  statusKey: "common.active" | "common.inactive";
};

const products: ProductRow[] = [
  {
    sku: "PRD-001",
    name: "Nasi Goreng Spesial",
    categoryKey: "category.food",
    price: "Rp 28.000",
    stock: 34,
    statusKey: "common.active",
  },
  {
    sku: "PRD-002",
    name: "Mie Ayam Komplit",
    categoryKey: "category.food",
    price: "Rp 22.000",
    stock: 19,
    statusKey: "common.active",
  },
  {
    sku: "PRD-003",
    name: "Jus Alpukat",
    categoryKey: "category.drink",
    price: "Rp 18.000",
    stock: 8,
    statusKey: "common.active",
  },
  {
    sku: "PRD-004",
    name: "Es Teh",
    categoryKey: "category.drink",
    price: "Rp 8.000",
    stock: 0,
    statusKey: "common.inactive",
  },
];

export default function KelolaProduk() {
  const { t } = useLanguage();
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [stockFilter, setStockFilter] = useState("all");

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const q = query.trim().toLowerCase();
      const keywordMatch =
        q.length === 0 ||
        item.name.toLowerCase().includes(q) ||
        item.sku.toLowerCase().includes(q);

      const categoryMatch =
        categoryFilter === "all" || item.categoryKey === categoryFilter;
      const statusMatch = statusFilter === "all" || item.statusKey === statusFilter;

      const stockMatch =
        stockFilter === "all"
          ? true
          : stockFilter === "habis"
          ? item.stock === 0
          : stockFilter === "menipis"
          ? item.stock > 0 && item.stock <= 10
          : item.stock > 10;

      return keywordMatch && categoryMatch && statusMatch && stockMatch;
    });
  }, [query, categoryFilter, statusFilter, stockFilter]);

  const resetFilters = () => {
    setQuery("");
    setCategoryFilter("all");
    setStatusFilter("all");
    setStockFilter("all");
  };

  return (
    <>
      <PageMeta
        title={t("product.manage.meta.title")}
        description={t("product.manage.meta.description")}
      />

      <PageBreadcrumb pageTitle={t("product.manage.pageTitle")} />

      <div className="space-y-6">
        <section className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-white/[0.03] sm:p-5">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
            <label className="md:col-span-3">
              <span className="mb-1 block text-sm text-gray-600 dark:text-gray-300">
                {t("product.manage.searchLabel")}
              </span>
              <div className="flex h-10 items-center gap-2 rounded-lg border border-gray-300 px-3 focus-within:border-mamvir-500 dark:border-gray-700">
                <HugeiconsIcon
                  icon={Search01Icon}
                  size={18}
                  strokeWidth={1.8}
                  className="text-gray-500"
                />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t("product.manage.searchPlaceholder")}
                  className="h-full w-full bg-transparent text-sm text-gray-800 outline-none dark:text-white/90"
                />
              </div>
            </label>

            <div className="flex items-end">
              <button
                type="button"
                className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-mamvir-500 px-4 text-sm font-medium text-mamvir-950 hover:bg-mamvir-600"
              >
                <HugeiconsIcon icon={Add01Icon} size={18} strokeWidth={1.8} />
                {t("product.manage.addButton")}
              </button>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-4">
            <label className="block">
              <span className="mb-1 inline-flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
                <HugeiconsIcon
                  icon={FilterHorizontalIcon}
                  size={14}
                  strokeWidth={1.8}
                />
                {t("product.manage.filter.category")}
              </span>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="h-10 w-full rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-800 outline-none focus:border-mamvir-500 dark:border-gray-700 dark:text-white/90"
              >
                <option value="all">{t("product.manage.filter.allCategory")}</option>
                <option value="category.food">{t("category.food")}</option>
                <option value="category.drink">{t("category.drink")}</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-1 block text-sm text-gray-600 dark:text-gray-300">
                {t("product.manage.filter.status")}
              </span>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="h-10 w-full rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-800 outline-none focus:border-mamvir-500 dark:border-gray-700 dark:text-white/90"
              >
                <option value="all">{t("product.manage.filter.allStatus")}</option>
                <option value="common.active">{t("common.active")}</option>
                <option value="common.inactive">{t("common.inactive")}</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-1 block text-sm text-gray-600 dark:text-gray-300">
                {t("product.manage.filter.stock")}
              </span>
              <select
                value={stockFilter}
                onChange={(e) => setStockFilter(e.target.value)}
                className="h-10 w-full rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-800 outline-none focus:border-mamvir-500 dark:border-gray-700 dark:text-white/90"
              >
                <option value="all">{t("product.manage.filter.allStock")}</option>
                <option value="aman">{t("product.manage.filter.stockSafe")}</option>
                <option value="menipis">{t("product.manage.filter.stockLow")}</option>
                <option value="habis">{t("product.manage.filter.stockOut")}</option>
              </select>
            </label>

            <div className="flex items-end">
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-white/5"
              >
                <HugeiconsIcon icon={Cancel01Icon} size={16} strokeWidth={1.8} />
                {t("product.manage.filter.reset")}
              </button>
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/40">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300">
                    {t("product.manage.table.sku")}
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300">
                    {t("product.manage.table.product")}
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300">
                    {t("product.manage.table.category")}
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300">
                    {t("product.manage.table.price")}
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300">
                    {t("product.manage.table.stock")}
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300">
                    {t("product.manage.table.status")}
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300">
                    {t("product.manage.table.action")}
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredProducts.map((item) => (
                  <tr
                    key={item.sku}
                    className="border-b border-gray-100 last:border-none dark:border-gray-800"
                  >
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-200">
                      {item.sku}
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-800 dark:text-white/90">
                      {item.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-200">
                      {t(item.categoryKey)}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-200">
                      {item.price}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-200">
                      {item.stock}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                          item.statusKey === "common.active"
                            ? "bg-mamvir-100 text-mamvir-800 dark:bg-mamvir-500/20 dark:text-mamvir-300"
                            : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                        }`}
                      >
                        {t(item.statusKey)}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex justify-end gap-1">
                        <button
                          type="button"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:border-mamvir-300 hover:text-mamvir-700 dark:border-gray-700 dark:text-gray-300"
                        >
                          <HugeiconsIcon
                            icon={PencilEdit01Icon}
                            size={16}
                            strokeWidth={1.8}
                          />
                        </button>
                        <button
                          type="button"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:border-red-300 hover:text-red-600 dark:border-gray-700 dark:text-gray-300"
                        >
                          <HugeiconsIcon
                            icon={Delete02Icon}
                            size={16}
                            strokeWidth={1.8}
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredProducts.length === 0 && (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-4 py-6 text-center text-sm text-gray-500 dark:text-gray-400"
                    >
                      {t("product.manage.empty")}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}
