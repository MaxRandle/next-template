import "@styles/global.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div className="pt-10 pb-20 flex flex-col">{children}</div>
      </body>
    </html>
  );
}
