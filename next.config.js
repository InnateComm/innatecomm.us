/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () {
    return [
      {
        source: '/chat',
        destination: 'https://discord.gg/44HdXvA4wX',
        permanent: true
      },
      {
        source: '/coc',
        destination: 'https://github.com/InnateComm/.github/blob/main/CODE_OF_CONDUCT.md',
        permanent: true
      },
    ]
  },
}

module.exports = nextConfig
