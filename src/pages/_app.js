import '@/styles/globals.css'
import Alerts from 'components/Alerts'
import { ToastProvider } from 'context/ToastContext'

export default function App({ Component, pageProps }) {
  return (
    <ToastProvider>
      <Alerts />
      <Component {...pageProps} />
    </ToastProvider>
  )
}
