export default function FloatingWhatsAppButton() {
  return (
    <a
      href="https://web.whatsapp.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open WhatsApp"
      className="group fixed bottom-5 right-5 z-[70] flex h-14 w-14 items-center justify-center"
    >
      <span className="pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 translate-x-2 whitespace-nowrap rounded-full bg-gray-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-sm transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 dark:bg-gray-700 dark:text-gray-100">
        Butuh Bantuan?
      </span>
      <img
        src="/images/whatsapp-icon2.svg"
        alt="WhatsApp"
        className="
          h-10 w-10
          transition-transform duration-200 group-hover:scale-110
          drop-shadow-[0_2px_8px_rgba(0,0,0,0.12)]
        "
      />
    </a>
  );
}