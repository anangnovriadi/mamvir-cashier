import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import { useLanguage } from "../../context/LanguageContext";

type InventoryRow = {
  sku: string;
  product: string;
  warehouse: string;
  stock: number;
  minStock: number;
};

const inventoryRows: InventoryRow[] = [
  {
    sku: "PRD-001",
    product: "Nasi Goreng Spesial",
    warehouse: "inventory.mainWarehouse",
    stock: 34,
    minStock: 15,
  },
  {
    sku: "PRD-002",
    product: "Mie Ayam Komplit",
    warehouse: "inventory.mainWarehouse",
    stock: 12,
    minStock: 15,
  },
  {
    sku: "PRD-003",
    product: "Jus Alpukat",
    warehouse: "inventory.coldWarehouse",
    stock: 8,
    minStock: 10,
  },
  {
    sku: "PRD-004",
    product: "Es Teh",
    warehouse: "inventory.coldWarehouse",
    stock: 40,
    minStock: 20,
  },
];

export default function InventoriProduk() {
  const { t } = useLanguage();

  return (
    <>
      <PageMeta
        title={t("product.inventory.meta.title")}
        description={t("product.inventory.meta.description")}
      />

      <PageBreadcrumb pageTitle={t("product.inventory.pageTitle")} />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
          <p className="text-sm text-gray-500 dark:text-gray-400">{t("product.inventory.totalSku")}</p>
          <h3 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            123
          </h3>
        </article>
        <article className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
          <p className="text-sm text-gray-500 dark:text-gray-400">{t("product.inventory.lowStock")}</p>
          <h3 className="mt-2 text-2xl font-semibold text-mamvir-700 dark:text-mamvir-400">
            27
          </h3>
        </article>
        <article className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
          <p className="text-sm text-gray-500 dark:text-gray-400">{t("product.inventory.needRestockToday")}</p>
          <h3 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            9
          </h3>
        </article>
      </div>

      <section className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/40">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300">
                  SKU
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300">
                  {t("product.manage.table.product")}
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300">
                  {t("product.inventory.table.location")}
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300">
                  {t("product.manage.table.stock")}
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300">
                  {t("product.inventory.table.minimum")}
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300">
                  {t("product.manage.table.status")}
                </th>
              </tr>
            </thead>
            <tbody>
              {inventoryRows.map((item) => {
                const lowStock = item.stock < item.minStock;

                return (
                  <tr
                    key={item.sku}
                    className="border-b border-gray-100 last:border-none dark:border-gray-800"
                  >
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-200">
                      {item.sku}
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-800 dark:text-white/90">
                      {item.product}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-200">
                      {t(item.warehouse)}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-200">
                      {item.stock}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-200">
                      {item.minStock}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                          lowStock
                            ? "bg-mamvir-100 text-mamvir-800 dark:bg-mamvir-500/20 dark:text-mamvir-300"
                            : "bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400"
                        }`}
                      >
                        {lowStock
                          ? t("product.inventory.status.restock")
                          : t("product.inventory.status.safe")}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
