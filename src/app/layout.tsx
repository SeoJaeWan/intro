import StyledComponentsRegistry from '@/style/lib/registry';
import Theme from '@/style/lib/theme';
import localFont from 'next/font/local';
import type { Metadata } from 'next';
import Layout from '@/components/atoms/common/layout';
import Header from '@/components/atoms/common/header';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

const notoMono = localFont({
  src: './fonts/RobotoMono-VariableFont_wght.ttf',
  display: 'swap',
  weight: '45 920',
  variable: '--font-mono',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} ${notoMono.variable}`}>
        <StyledComponentsRegistry>
          <Theme>
            <Header />
            <Layout>{children}</Layout>
          </Theme>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
