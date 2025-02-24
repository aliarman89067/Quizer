import Sidebar from "@/components/create/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col container">
      <div className="flex items-start justify-center h-screen w-full relative overflow-hidden mt-5">
        <div className="flex items-start w-full gap-4 px-2">
          <Sidebar />
          {children}
        </div>
      </div>
    </div>
  );
}
