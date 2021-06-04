const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    disable: false,

    // delete two lines above to enable PWA in production deployment
    // add your own icons to public/manifest.json
    // to re-generate manifest.json, you can visit https://tomitm.github.io/appmanifest/
    dest: "public",
    register: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  target: "serverless",
});
