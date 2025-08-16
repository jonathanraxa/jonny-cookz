import MainHeader from '@/app/components/main-header/main-header';
import './globals.css';

export const metadata = {
  title: 'Jonny Cookz',
  description: 'Decent meals for when we are running out of options.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
