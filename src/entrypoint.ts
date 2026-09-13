// src/entrypoint.ts
import Alpine from 'alpinejs';

// Data store global yang bisa diakses lintas komponen Alpine
Alpine.store('ui', {
  mobileMenuOpen: false,
  videoModalOpen: false,
});

// Daftarkan Alpine ke window (opsional, untuk debugging)
// window.Alpine = Alpine;
// Alpine.start();