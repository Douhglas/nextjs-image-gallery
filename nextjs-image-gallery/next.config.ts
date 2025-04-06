import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    PEXELS_API_KEY: process.env.PEXELS_API_KEY, // Agregar la variable de entorno aquí
  },
};

export default nextConfig;