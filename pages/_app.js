import { RecoilRoot } from 'recoil'
import '../src/styles/tailwind.css'
import '../src/styles/main.css'

function MyApp({ Component, pageProps }) {
    return (
        <RecoilRoot>
            <Component {...pageProps} />
        </RecoilRoot>
    )
}

export default MyApp
