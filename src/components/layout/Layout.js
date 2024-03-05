import Footer from "../common/Footer";
import Header from "../common/Header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
