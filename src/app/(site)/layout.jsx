import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

export default function SiteLayout({ children }) {
    return (
      <>
        <Header />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </>
    );
  }