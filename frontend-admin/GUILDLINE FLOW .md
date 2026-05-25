# GUILDLINE FLOW

## Aturan Bahasa (Wajib)

- Setiap kata/label di UI harus mendukung pergantian bahasa (i18n).
- Semua teks wajib diambil dari key terjemahan, bukan hardcoded string langsung di komponen.
- Pengecualian: kata `Dashboard` harus selalu tetap `Dashboard` di semua bahasa.

## Implementasi Standar

- Simpan teks di berkas terjemahan per bahasa (contoh: `id`, `en`).
- Gunakan key konsisten berbasis fitur (contoh: `cashier.payNow`, `product.manage.title`).
- Jangan menerjemahkan key, hanya value per bahasa yang berubah.
- Hindari string literal langsung di JSX/TSX kecuali kata `Dashboard`.

## Contoh Mapping

```json
{
  "id": {
    "nav.dashboard": "Dashboard",
    "nav.payment": "Bayar",
    "nav.about": "Tentang"
  },
  "en": {
    "nav.dashboard": "Dashboard",
    "nav.payment": "Pay",
    "nav.about": "About"
  }
}
```

## Checklist PR

- Semua teks baru sudah punya key i18n.
- Tidak ada hardcoded string baru di komponen.
- Label `Dashboard` tetap `Dashboard` pada semua locale.
