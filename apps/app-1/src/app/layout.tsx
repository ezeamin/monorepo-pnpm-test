const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <html lang='es' suppressHydrationWarning>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
