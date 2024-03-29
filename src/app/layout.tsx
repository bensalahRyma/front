import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { inter, lexendDeca } from "@/app/fonts";
import HydrogenLayout from "@/layouts/hydrogen/layout";
import GlobalDrawer from "@/app/shared/drawer-views/container";
import GlobalModal from "@/app/shared/modal-views/container";
import  cn from "@/utils/class-names";
import "@/app/globals.css";
import NextProgress from "@/components/next-progress";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "alyssa.esentinel",
  description: "Write your app description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      // 💡 Prevent next-themes hydration warning
      suppressHydrationWarning
    >
      <body
        // 💡 Prevent hydration warnings caused by third-party extensions, such as Grammarly.
        suppressHydrationWarning
        className={cn(inter.variable, lexendDeca.variable, "font-inter")}
      >
        {/* <ThemeProvider>
          <HydrogenLayout>{children}</HydrogenLayout>
          <GlobalDrawer />
          <GlobalModal />
        </ThemeProvider> */}
          <ThemeProvider>
            <NextProgress />
            {children}
            <Toaster />
            <GlobalDrawer />
            <GlobalModal />
          </ThemeProvider>
      </body>
    </html>
  );
}
