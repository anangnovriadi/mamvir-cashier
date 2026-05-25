import { HugeiconsIcon } from "@hugeicons/react";
import {
  Add01Icon,
  PackageIcon,
  Tag01Icon,
} from "@hugeicons/core-free-icons";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import { useLanguage } from "../../context/LanguageContext";

type CategoryItem = {
  id: number;
  nameKey: "category.food" | "category.drink" | "category.snack" | "category.promo";
  code: string;
  productCount: number;
};

const categories: CategoryItem[] = [
  { id: 1, nameKey: "category.food", code: "CAT-MKN", productCount: 45 },
  { id: 2, nameKey: "category.drink", code: "CAT-MNM", productCount: 30 },
  { id: 3, nameKey: "category.snack", code: "CAT-SNK", productCount: 18 },
  { id: 4, nameKey: "category.promo", code: "CAT-PRM", productCount: 9 },
];

export default function KategoriProduk() {
  const { t } = useLanguage();

  return (
    <>
      <PageMeta
        title={t("product.category.meta.title")}
        description={t("product.category.meta.description")}
      />

      <PageBreadcrumb pageTitle={t("product.category.pageTitle")} />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] xl:col-span-1">
          <h3 className="text-base font-semibold text-gray-800 dark:text-white/90">
            {t("product.category.addTitle")}
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {t("product.category.addDesc")}
          </p>

          <div className="mt-4 space-y-4">
            <label className="block">
              <span className="mb-1 block text-sm text-gray-600 dark:text-gray-300">
                {t("product.category.name")}
              </span>
              <input
                type="text"
                placeholder={t("product.category.namePlaceholder")}
                className="h-10 w-full rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-800 outline-none focus:border-mamvir-500 dark:border-gray-700 dark:text-white/90"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm text-gray-600 dark:text-gray-300">
                {t("product.category.code")}
              </span>
              <input
                type="text"
                placeholder={t("product.category.codePlaceholder")}
                className="h-10 w-full rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-800 outline-none focus:border-mamvir-500 dark:border-gray-700 dark:text-white/90"
              />
            </label>

            <button
              type="button"
              className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-mamvir-500 px-4 text-sm font-medium text-mamvir-950 hover:bg-mamvir-600"
            >
              <HugeiconsIcon icon={Add01Icon} size={18} strokeWidth={1.8} />
              {t("product.category.save")}
            </button>
          </div>
        </section>

        <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] xl:col-span-2">
          <h3 className="text-base font-semibold text-gray-800 dark:text-white/90">
            {t("product.category.list")}
          </h3>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {categories.map((category) => (
              <article
                key={category.id}
                className="rounded-xl border border-gray-200 p-4 dark:border-gray-700"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-mamvir-100 text-mamvir-700 dark:bg-mamvir-500/20 dark:text-mamvir-300">
                    <HugeiconsIcon icon={Tag01Icon} size={18} strokeWidth={1.8} />
                  </div>
                  <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                    {category.code}
                  </span>
                </div>

                <h4 className="mt-3 text-sm font-semibold text-gray-800 dark:text-white/90">
                  {t(category.nameKey)}
                </h4>

                <p className="mt-1 inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                  <HugeiconsIcon icon={PackageIcon} size={14} strokeWidth={1.8} />
                  {category.productCount} {t("product.category.productCount")}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
