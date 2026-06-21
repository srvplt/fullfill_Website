// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'always'
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Open Sans",
      cssVariable: "--font-open-sans",
      options: {
        variants: [
          {
            weight: 300,
            style: "normal",
            src: ["./src/assets/fonts/OpenSans-Light.ttf"]
          },
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/OpenSans-Regular.ttf"]
          },
          {
            weight: 500,
            style: "normal",
            src: ["./src/assets/fonts/OpenSans-Medium.ttf"]
          },
          {
            weight: 600,
            style: "normal",
            src: ["./src/assets/fonts/OpenSans-SemiBold.ttf"]
          },
          {
            weight: 700,
            style: "normal",
            src: ["./src/assets/fonts/OpenSans-Bold.ttf"]
          },
          {
            weight: 800,
            style: "normal",
            src: ["./src/assets/fonts/OpenSans-ExtraBold.ttf"]
          }
        ]
      }
    },
    {
      provider: fontProviders.local(),
      name: "Poppins",
      cssVariable: "--font-poppins",
      options: {
        variants: [
          {
            weight: 100,
            style: "normal",
            src: ["./src/assets/fonts/Poppins-Thin.ttf"]
          },
          {
            weight: 200,
            style: "normal",
            src: ["./src/assets/fonts/Poppins-ExtraLight.ttf"]
          },
          {
            weight: 300,
            style: "normal",
            src: ["./src/assets/fonts/Poppins-Light.ttf"]
          },
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/Poppins-Regular.ttf"]
          },
          {
            weight: 500,
            style: "normal",
            src: ["./src/assets/fonts/Poppins-Medium.ttf"]
          },
          {
            weight: 600,
            style: "normal",
            src: ["./src/assets/fonts/Poppins-SemiBold.ttf"]
          },
          {
            weight: 700,
            style: "normal",
            src: ["./src/assets/fonts/Poppins-Bold.ttf"]
          },
          {
            weight: 800,
            style: "normal",
            src: ["./src/assets/fonts/Poppins-ExtraBold.ttf"]
          },
          {
            weight: 900,
            style: "normal",
            src: ["./src/assets/fonts/Poppins-Black.ttf"]
          }
        ]
      }
    },
    {
      provider: fontProviders.local(),
      name: "Urbanist",
      cssVariable: "--font-urbanist",
      options: {
        variants: [
          {
            weight: 100,
            style: "normal",
            src: ["./src/assets/fonts/Urbanist-Thin.ttf"]
          },
          {
            weight: 200,
            style: "normal",
            src: ["./src/assets/fonts/Urbanist-ExtraLight.ttf"]
          },
          {
            weight: 300,
            style: "normal",
            src: ["./src/assets/fonts/Urbanist-Light.ttf"]
          },
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/Urbanist-Regular.ttf"]
          },
          {
            weight: 500,
            style: "normal",
            src: ["./src/assets/fonts/Urbanist-Medium.ttf"]
          },
          {
            weight: 600,
            style: "normal",
            src: ["./src/assets/fonts/Urbanist-SemiBold.ttf"]
          },
          {
            weight: 700,
            style: "normal",
            src: ["./src/assets/fonts/Urbanist-Bold.ttf"]
          },
          {
            weight: 800,
            style: "normal",
            src: ["./src/assets/fonts/Urbanist-ExtraBold.ttf"]
          },
          {
            weight: 900,
            style: "normal",
            src: ["./src/assets/fonts/Urbanist-Black.ttf"]
          }
        ]
      }
    }
  ]
});
