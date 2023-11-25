/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundSize: {
                'auto': 'auto',
                'cover': 'cover',
                'contain': 'contain',
                '50%': '50%',
                '16': '4rem',
            },
            width: {
                'customSize': "500px",
                

            },
            borderWidth: {
                '1px': '1px'
            },
            margin: {
                'customMargin': '1px'
            },
            backgroundImage: {
                'karouselImage': "url('/images/rectangle 9.svg')",
                'equipmentImage': "url('/images/rectangle 10.svg')",
                'programImage': "url('/images/rectangle 11.svg')",
                'gradient': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

                'cisco': "url('/images/cisco.svg')",
                'citrix': "url('/images/citrix.svg')",
                'fortinet': "url('/images/fortinet.svg')",
                'grandstream': "url('/images/grandstream.svg')",
                'hp': "url('/images/hp.svg')",
                'IBM': "url('/images/IBM.svg')",
                'lifeison': "url('/images/lifeison.svg')",
                'microsoft': "url('/images/Microsoft.svg')",
                'netapp': "url('/images/NetApp.svg')",
                'newlett': "url('/images/NewLett.svg')",
                'veeam': "url('/images/veeam.svg')",
                'vmware': "url('/images/vmware.svg')",
                'first': "url('/images/Rectangle 9.svg')",
                'second': "url('/images/Rectangle 10.svg')",
                'third': "url('/images/Rectangle 11.svg')",

            },
        },
    },
    plugins: [],
}
