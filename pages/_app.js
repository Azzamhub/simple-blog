import '../styles/globals.css';
import Image from 'next/image';
export default function App({ Component, pageProps }) {
    return <>
      <Image className='header-image'
      src='/images/beaver-head.jpg' height={150} width={230}
      alt='beaver-head'
      />
    <Component  {...pageProps} />
    </>;
  }