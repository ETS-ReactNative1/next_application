module.exports = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: false, // false if this is temporary because of a maintanance, true it means that is permanent
      },
      {
        source: "/old-blog/:id", // we can map parameters like :id for the destination as well
        destination: "/new-blog/:id",
        permanent: true,
      },
    ];
  },
};
