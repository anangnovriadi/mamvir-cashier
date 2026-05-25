import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  DashboardSquare02Icon,
  Payment02Icon,
  InformationSquareIcon,
  CreditCardIcon,
  Moon02Icon,
  Sun01Icon,
} from "@hugeicons/core-free-icons";
import PageMeta from "../components/common/PageMeta";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

type CashierTab = "bayar" | "info";
type ProductItem = {
  id: number;
  name: string;
  price: number;
};

const PRODUCTS: ProductItem[] = [
  { id: 1, name: "Nasi Goreng", price: 28000 },
  { id: 2, name: "Mie Ayam", price: 22000 },
  { id: 3, name: "Es Teh", price: 8000 },
  { id: 4, name: "Jus Alpukat", price: 18000 },
];

export default function Cashier() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<CashierTab>("bayar");
  const [productQuery, setProductQuery] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<Record<number, number>>(
    {
      1: 1,
      3: 1,
    }
  );
  const { toggleTheme } = useTheme();
  const { locale, toggleLanguage, t } = useLanguage();

  const amountNumber = useMemo(
    () =>
      PRODUCTS.reduce((total, product) => {
        const qty = selectedProducts[product.id] || 0;
        return total + product.price * qty;
      }, 0),
    [selectedProducts]
  );
  const amountFormatted = useMemo(
    () =>
      new Intl.NumberFormat(locale === "id" ? "id-ID" : "en-US", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
      }).format(amountNumber),
    [amountNumber, locale]
  );
  const isDashboardActive = location.pathname === "/";
  const filteredProducts = useMemo(
    () =>
      PRODUCTS.filter((product) =>
        product.name.toLowerCase().includes(productQuery.toLowerCase())
      ),
    [productQuery]
  );

  const toggleProduct = (id: number) => {
    setSelectedProducts((prev) => {
      if (prev[id]) {
        const { [id]: _removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: 1 };
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    const safeQty = Math.max(1, quantity || 1);
    setSelectedProducts((prev) => ({ ...prev, [id]: safeQty }));
  };

  return (
    <>
      <PageMeta
        title={t("cashier.meta.title")}
        description={t("cashier.meta.description")}
      />

      <div className="mx-auto max-w-3xl pb-32">
        <div className="mb-4 flex items-center justify-between border-x border-b border-gray-200 bg-white/95 px-5 py-4 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/95 dark:shadow-theme-sm md:px-6">
          <div>
            <img
              src="/images/logo/logo-mamvir.svg"
              alt="Logo Mamvir"
              className="h-8 w-auto dark:hidden"
            />
            <img
              src="/images/logo/logo-mamvir-white.svg"
              alt="Logo Mamvir"
              className="hidden h-8 w-auto dark:block"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-colors duration-200 ease-out hover:bg-gray-100/80 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800/70"
            >
              <HugeiconsIcon
                icon={Sun01Icon}
                className="hidden dark:block"
                size={20}
                strokeWidth={1.8}
              />
              <HugeiconsIcon
                icon={Moon02Icon}
                className="dark:hidden"
                size={20}
                strokeWidth={1.8}
              />
            </button>

            <button
              type="button"
              aria-label="Change Language"
              onClick={toggleLanguage}
              className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-white transition-colors duration-200 ease-out hover:bg-gray-100/80 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800/70"
            >
              <img
                src={
                  locale === "id"
                    ? "/images/indonesia.png"
                    : "/images/united-kingdom.png"
                }
                alt={locale === "id" ? "Indonesia" : "English"}
                className="h-5 w-5 rounded-full object-cover"
              />
            </button>

            <a
              href="https://web.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-white transition-colors duration-200 ease-out hover:bg-gray-100/80 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800/70"
            >
              <img
                src="/images/whatsapp-icon2.svg"
                alt={t("cashier.help.alt")}
                className="h-6 w-6 rounded-full object-cover"
              />
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white/90">
            {t("cashier.title")}
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {t("cashier.subtitle")}
          </p>
        </div>

        {activeTab === "bayar" ? (
          <div className="mt-4 rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
            <div className="">
              <div className="flex h-24 flex-col justify-between rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {t("cashier.amount")}
                </span>
                <p className="text-2xl font-bold text-gray-800 dark:text-white/90">
                  {amountFormatted}
                </p>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {t("cashier.selectProduct")}
              </h3>

              <input
                type="text"
                value={productQuery}
                onChange={(e) => setProductQuery(e.target.value)}
                placeholder={t("cashier.search")}
                className="mt-2 h-10 w-full rounded-lg border border-gray-300 bg-transparent px-3 text-sm text-gray-800 outline-hidden focus:border-mamvir-500 dark:border-gray-700 dark:text-white/90"
              />

              <div className="mt-3 space-y-2">
                {filteredProducts.map((product) => {
                  const isChecked = Boolean(selectedProducts[product.id]);
                  return (
                    <div
                      key={product.id}
                      className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-2.5 dark:border-gray-700 dark:bg-gray-900/40"
                    >
                      <label className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-gray-200">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleProduct(product.id)}
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <span>{product.name}</span>
                      </label>

                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          Rp {product.price.toLocaleString("id-ID")}
                        </span>
                        <input
                          type="number"
                          min="1"
                          step="1"
                          value={selectedProducts[product.id] || 1}
                          disabled={!isChecked}
                          onChange={(e) =>
                            updateQuantity(
                              product.id,
                              Number.parseInt(e.target.value, 10)
                            )
                          }
                          className="h-9 w-16 appearance-auto rounded-lg border border-gray-300 bg-white px-2 text-center text-sm text-gray-800 outline-hidden focus:border-mamvir-500 disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-inner-spin-button]:opacity-100 [&::-webkit-outer-spin-button]:opacity-100 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90"
                        />
                      </div>
                    </div>
                  );
                })}
                {filteredProducts.length === 0 && (
                  <div className="rounded-lg border border-dashed border-gray-300 p-3 text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
                    {t("cashier.notFound")}
                  </div>
                )}
              </div>
            </div>

            <button
              type="button"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-mamvir-500 p-2.5 text-sm font-medium text-mamvir-950 hover:bg-mamvir-600"
            >
              <HugeiconsIcon icon={CreditCardIcon} size={18} strokeWidth={1.8} />
              {t("cashier.payNow")}
            </button>
          </div>
        ) : (
          <div className="mt-4 rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white/90">
              {t("cashier.infoTitle")}
            </h2>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
              {t("cashier.infoDescription")}
            </p>
          </div>
        )}
      </div>

      <div className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-lg border border-gray-200 bg-white/95 p-3 shadow-theme-lg backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/95">
        <div className="grid grid-cols-3 items-end gap-1.5">
          <Link
            to="/"
            className="group relative flex w-full flex-col items-center rounded-lg py-1 text-gray-700 transition-colors hover:rounded-lg hover:bg-gray-100 dark:text-gray-300 dark:hover:rounded-lg dark:hover:bg-white/5"
          >
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-full border-4 border-white shadow-theme-md transition-colors dark:border-gray-900 ${
                isDashboardActive
                  ? "bg-mamvir-500 text-mamvir-950"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
              }`}
            >
              <HugeiconsIcon
                icon={DashboardSquare02Icon}
                size={20}
                strokeWidth={1.8}
              />
            </span>
            <span
              className={`mt-1 text-xs font-semibold capitalize ${
                isDashboardActive
                  ? "text-mamvir-700 dark:text-mamvir-400"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              {t("nav.dashboard")}
            </span>
            <span className="pointer-events-none absolute -top-10 rounded-lg bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-gray-100 dark:text-gray-900">
              {t("cashier.tooltip.openDashboard")}
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setActiveTab("bayar")}
            className="group relative flex w-full flex-col items-center rounded-lg py-1 text-gray-700 transition-colors hover:rounded-lg hover:bg-gray-100 dark:text-gray-300 dark:hover:rounded-lg dark:hover:bg-white/5"
          >
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-full border-4 border-white shadow-theme-md transition-colors dark:border-gray-900 ${
                activeTab === "bayar"
                  ? "bg-mamvir-500 text-mamvir-950"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
              }`}
            >
              <HugeiconsIcon icon={Payment02Icon} size={20} strokeWidth={1.8} />
            </span>
            <span
              className={`mt-1 text-xs font-semibold capitalize ${
                activeTab === "bayar"
                  ? "text-mamvir-700 dark:text-mamvir-400"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              {t("cashier.tab.pay")}
            </span>
            <span className="pointer-events-none absolute -top-10 rounded-lg bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-gray-100 dark:text-gray-900">
              {t("cashier.tooltip.startPay")}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("info")}
            className="group relative flex w-full flex-col items-center rounded-lg py-1 text-gray-700 transition-colors hover:rounded-lg hover:bg-gray-100 dark:text-gray-300 dark:hover:rounded-lg dark:hover:bg-white/5"
          >
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-full border-4 border-white shadow-theme-md transition-colors dark:border-gray-900 ${
                activeTab === "info"
                  ? "bg-mamvir-500 text-mamvir-950"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
              }`}
            >
              <HugeiconsIcon
                icon={InformationSquareIcon}
                size={20}
                strokeWidth={1.8}
              />
            </span>
            <span
              className={`mt-1 text-xs font-semibold capitalize ${
                activeTab === "info"
                  ? "text-mamvir-700 dark:text-mamvir-400"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              {t("cashier.tab.about")}
            </span>
            <span className="pointer-events-none absolute -top-10 rounded-lg bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-gray-100 dark:text-gray-900">
              {t("cashier.tooltip.appInfo")}
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
