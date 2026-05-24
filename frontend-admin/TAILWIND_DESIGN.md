# Tailwind CSS Style Guidelines

## Border Radius

### Default Radius

Gunakan `rounded-lg` sebagai standar utama untuk semua komponen UI.

Contoh komponen:

* Card
* Modal
* Alert
* Dropdown
* Input
* Button
* Table
* Tooltip
* Hover state
* Active state
* Popover
* Sidebar
* Navigation item

### Rules

✅ Gunakan:

```html
<div class="rounded-lg">
```

❌ Hindari:

```html
<div class="rounded-md">
<div class="rounded-xl">
```

### Exception

Jika component sudah menggunakan `rounded-full`, maka **tidak perlu diubah**.

Contoh:

```html
<button class="rounded-full">
```

---

# Input Guidelines

## Input Height

Semua input wajib menggunakan tinggi:

```html
h-10
```

Berlaku untuk:

* Input text
* Select
* Textarea (minimal height mengikuti kebutuhan)
* Datepicker
* Search input
* Combobox

Contoh:

```html
<input class="h-10 rounded-lg border px-3" />
```

---

# Button Guidelines

## Padding Button

Gunakan padding standar:

```html
p-2.5
```

Contoh:

```html
<button class="p-2.5 rounded-lg">
```

### Notes

Berlaku untuk:

* Primary button
* Secondary button
* Outline button
* Ghost button
* Icon button (jika memungkinkan)

---

# Table Pagination Guidelines

## Pagination Limit

Semua table wajib menggunakan:

```txt
10 items per page
```

### Rules

* Default limit: `10`
* Jangan menggunakan dynamic limit selector kecuali diperlukan
* Konsisten di seluruh halaman/dashboard

Contoh:

```ts
pageSize: 10
```

atau

```ts
initialState: {
  pagination: {
    pageSize: 10,
  },
}
```

---

# Hover & Active State

## Radius Consistency

Pastikan hover dan active state tetap mengikuti radius parent component.

Contoh:

```html
<button class="rounded-lg hover:bg-muted active:bg-muted/80">
```

---

# Recommended Base Classes

## Card

```html
<div class="rounded-lg border bg-background shadow-sm">
```

## Input

```html
<input class="h-10 rounded-lg border px-3" />
```

## Button

```html
<button class="p-2.5 rounded-lg">
```

## Modal

```html
<div class="rounded-lg bg-background p-6">
```

## Alert

```html
<div class="rounded-lg border p-4">
```

---

# Consistency Rules

* Gunakan spacing yang konsisten
* Hindari mixing radius (`rounded-md`, `rounded-xl`, dll)
* Prioritaskan reusable component
* Pastikan seluruh UI memiliki visual consistency
* Maintain clean & modern appearance

---

# Icon Guidelines

## Icon Library

Gunakan **HugeIcons** sebagai satu-satunya library icon di seluruh project.

Package:
* `@hugeicons/react` — untuk komponen React
* `@hugeicons/core-free-icons` — untuk daftar icon (free tier)

### Rules

✅ Gunakan:

```tsx
import { HugeiconsIcon } from "@hugeicons/react";
import { Package01Icon } from "@hugeicons/core-free-icons";

<HugeiconsIcon icon={Package01Icon} size={24} strokeWidth={1.8} />
```

❌ Hindari:

```tsx
// Jangan gunakan library icon lain
import { FiPackage } from "react-icons/fi";
import { PackageIcon } from "lucide-react";
import { MdOutlinePackage } from "react-icons/md";
```

### Standard Props

| Prop          | Nilai Default | Keterangan                    |
| ------------- | ------------- | ----------------------------- |
| `size`        | `24`          | Ukuran icon dalam px          |
| `strokeWidth` | `1.8`         | Ketebalan garis icon          |
| `className`   | sesuai context | Untuk warna via Tailwind      |

### Notes

* Sebelum menggunakan icon baru, verifikasi ketersediaannya di `/node_modules/@hugeicons/core-free-icons/dist/esm`
* Hapus import icon yang tidak terpakai untuk menghindari TypeScript error

---

# Summary

| Component        | Rule                 |
| ---------------- | -------------------- |
| Border Radius    | `rounded-lg`         |
| Exception        | `rounded-full` tetap |
| Input Height     | `h-10`               |
| Button Padding   | `p-2.5`              |
| Pagination Limit | `10 per page`        |
| Icon Library     | `HugeIcons`          |
