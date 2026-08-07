function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.02 2C6.5 2 2.03 6.48 2.03 12c0 1.87.51 3.63 1.4 5.14L2 22l4.99-1.31A9.95 9.95 0 0 0 12.02 22C17.53 22 22 17.52 22 12S17.53 2 12.02 2Zm0 18.1c-1.66 0-3.2-.46-4.52-1.24l-.32-.19-3.03.79.81-2.95-.21-.31A8.08 8.08 0 0 1 3.9 12c0-4.48 3.65-8.12 8.12-8.12S20.14 7.52 20.14 12s-3.65 8.1-8.12 8.1Z" />
    </svg>
  )
}

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/911234567890?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20admissions%20at%20MithilaDwaar%20School"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed z-40 bottom-36 right-4 lg:bottom-8 lg:right-24 bg-[#25D366] hover:bg-[#20bd5a] text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-110"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  )
}
