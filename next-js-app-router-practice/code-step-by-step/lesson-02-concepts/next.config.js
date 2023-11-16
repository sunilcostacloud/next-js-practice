/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["media.geeksforgeeks.org"]
    },
    redirects: async () => {
        return [
            {
                source: '/redirect-using-next-config',
                destination: "/",
                permanent: false
            },
            {
                source: '/redirect-using-next-config/:userId',
                destination: "/",
                permanent: false
            },
            {
                source: '/page-not-exist',
                destination: "/",
                permanent: false
            },
        ]
    }
}

module.exports = nextConfig
