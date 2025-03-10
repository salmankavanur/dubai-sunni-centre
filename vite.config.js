// import { defineConfig } from 'vite';
// import preact from '@preact/preset-vite';

// const config = defineConfig({
//   plugins: [preact()],
//   base: './',
// });

// export default config;
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

const config = defineConfig({
  plugins: [preact()],
  base: './',
  server: {
    port: 11347, // Set your custom port here
    allowedHosts: ['.digibayt.com'], // Add your allowed host here
  },
});

export default config;
