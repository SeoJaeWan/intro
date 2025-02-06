import StyledComponentsRegistry from '@/style/lib/registry';
import Theme from '@/style/lib/theme';
import localFont from 'next/font/local';

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
            {/* <Header /> */}
            {/* <Layout> */}
            {children}
            {/* </Layout> */}
          </Theme>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
