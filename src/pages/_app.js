import { ProviderAuth } from '@hooks/useAuth';
import MainLoyout from '@layout/MainLayout';
import '@styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProviderAuth>
        <MainLoyout>
          <Component {...pageProps} />
        </MainLoyout>
      </ProviderAuth>
    </>
  );
}

export default MyApp;
