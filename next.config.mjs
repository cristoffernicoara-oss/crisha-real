/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/despre-noi", destination: "/om-oss", permanent: true },
      { source: "/contact", destination: "/kontakt", permanent: true },
      { source: "/cariere", destination: "/karriar", permanent: true },
      { source: "/servicii", destination: "/tjanster", permanent: true },
      { source: "/servicii/:path*", destination: "/tjanster/:path*", permanent: true },
      { source: "/studii-de-caz", destination: "/fallstudier", permanent: true },
      { source: "/studii-de-caz/:slug*", destination: "/fallstudier/:slug*", permanent: true },
      { source: "/blog", destination: "/blogg", permanent: true },
      { source: "/blog/:slug*", destination: "/blogg/:slug*", permanent: true },
      { source: "/tjanster/web-design", destination: "/tjanster/webbdesign", permanent: true },
      {
        source: "/fallstudier/fitcoach-web-design",
        destination: "/fallstudier/casa-nostra-web-design",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
