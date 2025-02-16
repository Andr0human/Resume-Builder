import { create } from 'zustand';

const handleZoomIn = (get) => () => get().setZoom(get().zoom * 1.1);

const handleZoomOut = (get) => () => get().setZoom(get().zoom / 1.1);

const handleSetZoom = (set) => (zoom) =>
  set(() => {
    if (zoom > 1.5) return { zoom: 1.5 };
    if (zoom < 0.9) return { zoom: 0.9 };
    return { zoom: +zoom.toFixed(1) };
  });

const handleResetZoom = (set) => () => {
  set(() => {
    return { zoom: 1 };
  });
};

export const useZoom = create((set, get) => ({
  zoom: 1,
  setZoom: handleSetZoom(set),
  zoomIn: handleZoomIn(get),
  resetZoom: handleResetZoom(set),
  zoomOut: handleZoomOut(get),
}));
