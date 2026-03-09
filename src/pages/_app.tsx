import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";

import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div
      className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} font-sans`}
    >
      <Component {...pageProps} />
    </div>
  );
};

export default api.withTRPC(MyApp);
