import { config } from '@fortawesome/fontawesome-svg-core'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import '../styles/global.css';
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

export default function App({ Component, pageProps }) {
    return <>
        <Component {...pageProps} />
        <SpeedInsights />
        <Analytics />
    </>;
}