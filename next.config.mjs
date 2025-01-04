/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React Strict Mode for better development feedback
    reactStrictMode: true,
  
    // Set custom headers for caching static files
    async headers() {
      return [
        {
          // Apply headers to all routes (i.e., catch-all pattern for all paths)
          source: '/(.*)', 
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable', // Cache static assets for 1 year
            },
          ],
        },
      ]
    },
  
    // Image optimization (example if you're using images from external domains)
    // images: {
    //   domains: ['your-image-cdn.com'], // Add any external image domains here
    // },
  
    // Webpack customizations (optional)
    webpack(config) {
      // Custom webpack settings go here (if any)
      return config;
    },
  };
  
  export default nextConfig;
  