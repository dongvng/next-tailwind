import dynamic from 'next/dynamic';

export const Map = dynamic(
  () => import('./leaflet-map'),
  { ssr: false } // prevents server-side render
);
