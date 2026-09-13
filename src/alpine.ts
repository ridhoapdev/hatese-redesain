declare const require: any;

import Alpine from 'alpinejs';
const collapse: any = require('@alpinejs/collapse');

declare global {
  interface Window {
    Alpine: typeof Alpine;
  }
}

Alpine.plugin(collapse);

Alpine.data('videoCarousel', () => ({
  videos: [],
  modalOpen: false,
  currentIndex: 0,

  init() {
    const el = document.getElementById('video-carousel-data');
    if (el && el.textContent) {
      try {
        this.videos = JSON.parse(el.textContent);
      } catch (e) {
        console.error('Gagal parse data video:', e);
        this.videos = [];
      }
    }
  },

  openModal(id: string) {
    const idx = this.videos.findIndex((v: any) => v.id === id);
    if (idx === -1) return;
    this.currentIndex = idx;
    this.modalOpen = true;
    document.body.style.overflow = 'hidden';
  },

  closeModal() {
    this.modalOpen = false;
    document.body.style.overflow = '';
  },

  next() {
    if (this.videos.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % this.videos.length;
  },

  prev() {
    if (this.videos.length === 0) return;
    this.currentIndex = (this.currentIndex - 1 + this.videos.length) % this.videos.length;
  },
}));

window.Alpine = Alpine;
Alpine.start();