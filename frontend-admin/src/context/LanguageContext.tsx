import type React from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Locale = "id" | "en";

type LanguageContextType = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const translations: Record<Locale, Record<string, string>> = {
  id: {
    "nav.dashboard": "Dashboard",
    "nav.cashier": "Kasir",
    "nav.product": "Produk",
    "nav.product.manage": "Kelola Produk",
    "nav.product.category": "Kategori",
    "nav.product.inventory": "Inventori",
    "nav.sales": "Penjualan",
    "nav.sales.transaction": "Transaksi",
    "nav.sales.history": "Riwayat Penjualan",
    "nav.sales.return": "Retur Penjualan",
    "nav.report": "Laporan",
    "nav.report.sales": "Laporan Penjualan",
    "nav.report.stock": "Laporan Stok",
    "nav.report.profit": "Laporan Keuntungan",
    "nav.customer": "Pelanggan",
    "nav.settings": "Pengaturan",
    "nav.about": "Tentang Aplikasi",
    "nav.subscription": "Subscription",
    "sidebar.menu": "Menu",
    "sidebar.others": "Lainnya",
    "sidebar.support": "Support",

    "cashier.meta.title": "Kasir | Mamvir Cashier",
    "cashier.meta.description": "Halaman kasir dengan menu bawah seperti mobile",
    "cashier.help.alt": "Butuh Bantuan",
    "cashier.title": "Halaman Kasir",
    "cashier.subtitle": "Pilih menu bawah untuk proses pembayaran atau melihat info aplikasi.",
    "cashier.amount": "Nominal Dibayar",
    "cashier.selectProduct": "Pilih Produk",
    "cashier.search": "Cari produk...",
    "cashier.notFound": "Produk tidak ditemukan.",
    "cashier.payNow": "Bayar Sekarang",
    "cashier.infoTitle": "Info Aplikasi",
    "cashier.infoDescription": "Mamvir Cashier membantu proses transaksi kasir dengan cepat dan sederhana. Gunakan menu Bayar untuk input nominal pembayaran.",
    "cashier.tooltip.openDashboard": "buka dashboard",
    "cashier.tooltip.startPay": "mulai bayar",
    "cashier.tooltip.appInfo": "info aplikasi",
    "cashier.tab.pay": "Bayar",
    "cashier.tab.about": "Tentang",

    "product.manage.meta.title": "Kelola Produk | Mamvir Cashier",
    "product.manage.meta.description": "Halaman kelola data produk",
    "product.manage.pageTitle": "Kelola Produk",
    "product.manage.searchLabel": "Cari Produk",
    "product.manage.searchPlaceholder": "Nama produk / SKU",
    "product.manage.addButton": "Tambah Produk",
    "product.manage.filter.category": "Kategori",
    "product.manage.filter.status": "Status",
    "product.manage.filter.stock": "Kondisi Stok",
    "product.manage.filter.reset": "Reset Filter",
    "product.manage.filter.allCategory": "Semua Kategori",
    "product.manage.filter.allStatus": "Semua Status",
    "product.manage.filter.allStock": "Semua",
    "product.manage.filter.stockSafe": "Aman",
    "product.manage.filter.stockLow": "Menipis",
    "product.manage.filter.stockOut": "Habis",
    "product.manage.table.sku": "SKU",
    "product.manage.table.product": "Produk",
    "product.manage.table.category": "Kategori",
    "product.manage.table.price": "Harga",
    "product.manage.table.stock": "Stok",
    "product.manage.table.status": "Status",
    "product.manage.table.action": "Aksi",
    "product.manage.empty": "Tidak ada produk yang cocok dengan filter.",
    "common.active": "Aktif",
    "common.inactive": "Nonaktif",
    "category.food": "Makanan",
    "category.drink": "Minuman",
    "category.snack": "Snack",
    "category.promo": "Paket Promo",

    "product.category.meta.title": "Kategori Produk | Mamvir Cashier",
    "product.category.meta.description": "Halaman kategori produk",
    "product.category.pageTitle": "Kategori Produk",
    "product.category.addTitle": "Tambah Kategori",
    "product.category.addDesc": "Buat kategori baru untuk mengelompokkan produk.",
    "product.category.name": "Nama Kategori",
    "product.category.code": "Kode Kategori",
    "product.category.namePlaceholder": "Contoh: Makanan",
    "product.category.codePlaceholder": "Contoh: CAT-MKN",
    "product.category.save": "Simpan Kategori",
    "product.category.list": "Daftar Kategori",
    "product.category.productCount": "produk",

    "product.inventory.meta.title": "Inventori Produk | Mamvir Cashier",
    "product.inventory.meta.description": "Halaman monitoring inventori produk",
    "product.inventory.pageTitle": "Inventori Produk",
    "product.inventory.totalSku": "Total SKU",
    "product.inventory.lowStock": "Stok Menipis",
    "product.inventory.needRestockToday": "Perlu Restok Hari Ini",
    "product.inventory.table.location": "Lokasi",
    "product.inventory.table.minimum": "Minimum",
    "product.inventory.status.restock": "Perlu Restok",
    "product.inventory.status.safe": "Aman",
    "inventory.mainWarehouse": "Gudang Utama",
    "inventory.coldWarehouse": "Gudang Dingin",

    "dashboard.meta.title": "Dashboard | Mamvir Cashier",
    "dashboard.meta.description": "Halaman dashboard utama Mamvir Cashier",
    "dashboard.metrics.totalProduct": "Total Produk",
    "dashboard.metrics.totalCategory": "Total Kategori",
    "dashboard.metrics.paidToday": "Penjualan Sudah Bayar Hari Ini",
    "dashboard.metrics.unpaidToday": "Penjualan Belum Bayar Hari Ini",
    "dashboard.chart.salesByProduct": "Penjualan Berdasarkan Produk",
    "dashboard.chart.salesByProductDesc": "Jumlah produk terjual bulan ini",
    "dashboard.chart.sold": "Terjual",
    "dashboard.chart.soldSuffix": "terjual",
    "product.ayamBakar": "Ayam Bakar",
    "product.nasiGoreng": "Nasi Goreng",
    "product.mieGoreng": "Mie Goreng",
    "product.esTeh": "Es Teh",
    "product.jusAlpukat": "Jus Alpukat",
    "product.sotoAyam": "Soto Ayam",
    "product.rendang": "Rendang",
    "product.gadoGado": "Gado-Gado",
  },
  en: {
    "nav.dashboard": "Dashboard",
    "nav.cashier": "Cashier",
    "nav.product": "Products",
    "nav.product.manage": "Manage Products",
    "nav.product.category": "Categories",
    "nav.product.inventory": "Inventory",
    "nav.sales": "Sales",
    "nav.sales.transaction": "Transactions",
    "nav.sales.history": "Sales History",
    "nav.sales.return": "Sales Returns",
    "nav.report": "Reports",
    "nav.report.sales": "Sales Report",
    "nav.report.stock": "Stock Report",
    "nav.report.profit": "Profit Report",
    "nav.customer": "Customers",
    "nav.settings": "Settings",
    "nav.about": "About App",
    "nav.subscription": "Subscription",
    "sidebar.menu": "Menu",
    "sidebar.others": "Others",
    "sidebar.support": "Support",

    "cashier.meta.title": "Cashier | Mamvir Cashier",
    "cashier.meta.description": "Cashier page with mobile-style bottom navigation",
    "cashier.help.alt": "Need Help",
    "cashier.title": "Cashier Page",
    "cashier.subtitle": "Use the bottom menu to process payments or view app information.",
    "cashier.amount": "Paid Amount",
    "cashier.selectProduct": "Select Product",
    "cashier.search": "Search product...",
    "cashier.notFound": "No products found.",
    "cashier.payNow": "Pay Now",
    "cashier.infoTitle": "App Info",
    "cashier.infoDescription": "Mamvir Cashier helps process cashier transactions quickly and simply. Use the Pay menu to input payment amount.",
    "cashier.tooltip.openDashboard": "open dashboard",
    "cashier.tooltip.startPay": "start payment",
    "cashier.tooltip.appInfo": "app info",
    "cashier.tab.pay": "Pay",
    "cashier.tab.about": "About",

    "product.manage.meta.title": "Manage Products | Mamvir Cashier",
    "product.manage.meta.description": "Product management page",
    "product.manage.pageTitle": "Manage Products",
    "product.manage.searchLabel": "Search Products",
    "product.manage.searchPlaceholder": "Product name / SKU",
    "product.manage.addButton": "Add Product",
    "product.manage.filter.category": "Category",
    "product.manage.filter.status": "Status",
    "product.manage.filter.stock": "Stock Condition",
    "product.manage.filter.reset": "Reset Filters",
    "product.manage.filter.allCategory": "All Categories",
    "product.manage.filter.allStatus": "All Status",
    "product.manage.filter.allStock": "All",
    "product.manage.filter.stockSafe": "Safe",
    "product.manage.filter.stockLow": "Low",
    "product.manage.filter.stockOut": "Out",
    "product.manage.table.sku": "SKU",
    "product.manage.table.product": "Product",
    "product.manage.table.category": "Category",
    "product.manage.table.price": "Price",
    "product.manage.table.stock": "Stock",
    "product.manage.table.status": "Status",
    "product.manage.table.action": "Actions",
    "product.manage.empty": "No products match the filters.",
    "common.active": "Active",
    "common.inactive": "Inactive",
    "category.food": "Food",
    "category.drink": "Drink",
    "category.snack": "Snacks",
    "category.promo": "Promo Bundle",

    "product.category.meta.title": "Product Categories | Mamvir Cashier",
    "product.category.meta.description": "Product category page",
    "product.category.pageTitle": "Product Categories",
    "product.category.addTitle": "Add Category",
    "product.category.addDesc": "Create a new category to group products.",
    "product.category.name": "Category Name",
    "product.category.code": "Category Code",
    "product.category.namePlaceholder": "Example: Food",
    "product.category.codePlaceholder": "Example: CAT-FOD",
    "product.category.save": "Save Category",
    "product.category.list": "Category List",
    "product.category.productCount": "products",

    "product.inventory.meta.title": "Product Inventory | Mamvir Cashier",
    "product.inventory.meta.description": "Product inventory monitoring page",
    "product.inventory.pageTitle": "Product Inventory",
    "product.inventory.totalSku": "Total SKU",
    "product.inventory.lowStock": "Low Stock",
    "product.inventory.needRestockToday": "Need Restock Today",
    "product.inventory.table.location": "Location",
    "product.inventory.table.minimum": "Minimum",
    "product.inventory.status.restock": "Restock Needed",
    "product.inventory.status.safe": "Safe",
    "inventory.mainWarehouse": "Main Warehouse",
    "inventory.coldWarehouse": "Cold Warehouse",

    "dashboard.meta.title": "Dashboard | Mamvir Cashier",
    "dashboard.meta.description": "Main dashboard page for Mamvir Cashier",
    "dashboard.metrics.totalProduct": "Total Products",
    "dashboard.metrics.totalCategory": "Total Categories",
    "dashboard.metrics.paidToday": "Paid Sales Today",
    "dashboard.metrics.unpaidToday": "Unpaid Sales Today",
    "dashboard.chart.salesByProduct": "Sales by Product",
    "dashboard.chart.salesByProductDesc": "Number of products sold this month",
    "dashboard.chart.sold": "Sold",
    "dashboard.chart.soldSuffix": "sold",
    "product.ayamBakar": "Grilled Chicken",
    "product.nasiGoreng": "Fried Rice",
    "product.mieGoreng": "Fried Noodles",
    "product.esTeh": "Iced Tea",
    "product.jusAlpukat": "Avocado Juice",
    "product.sotoAyam": "Chicken Soto",
    "product.rendang": "Rendang",
    "product.gadoGado": "Gado-Gado",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [locale, setLocaleState] = useState<Locale>("id");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved === "id" || saved === "en") {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    localStorage.setItem("locale", next);
  };

  const toggleLanguage = () => {
    setLocale(locale === "id" ? "en" : "id");
  };

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLanguage,
      t: (key: string) => translations[locale][key] ?? key,
    }),
    [locale]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
