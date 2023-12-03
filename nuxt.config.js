export default defineNuxtConfig({
    app: {
        head: {
            link: [
                {
                    id: 'theme-link',
                    rel: 'stylesheet',
                    href: baseUrl + 'themes/lara-light-pink/theme.css'
                }
            ]
        }
    }
});