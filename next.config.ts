// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "export",
//   images: {
//     unoptimized: true, // ✅ Yeh add kar
//     formats: ["image/avif", "image/webp"],
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//       },
//       {
//         protocol: "https",
//         hostname: "picsum.photos",
//       },
//     ],
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // ✅ Yeh line add ki hai?
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
};

export default nextConfig;
