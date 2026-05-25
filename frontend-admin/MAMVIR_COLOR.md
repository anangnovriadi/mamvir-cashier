# MAMVIR Color Palette

Palet ini sudah diset global di Tailwind melalui token `--color-mamvir-*` pada [src/index.css](src/index.css).

## custom-mamvir

```ts
'custom-mamvir': {
  '50': '#fffdea',
  '100': '#fff8c5',
  '200': '#fff185',
  '300': '#ffe446',
  '400': '#ffd31b',
  '500': '#ffb703',
  '600': '#e28c00',
  '700': '#bb6202',
  '800': '#984b08',
  '900': '#7c3e0b',
  '950': '#481f00',
}
```

## Usage

Gunakan utility class Tailwind seperti:

```html
<div class="bg-mamvir-50 text-mamvir-900 border border-mamvir-200">
  Mamvir Surface
</div>

<button class="bg-mamvir-500 hover:bg-mamvir-600 text-mamvir-950">
  Action
</button>

<span class="text-mamvir-700">Label</span>
```

Untuk konfigurasi chart (mis. ApexCharts), gunakan CSS variable agar tetap satu sumber warna:

```ts
const options = {
  colors: ["var(--color-mamvir-500)", "var(--color-mamvir-300)"]
};
```