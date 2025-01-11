import Footer from "@/components/home/footer";
import Navbar from "@/components/home/navbar";
import Welcome from "@/components/home/welcome";

export default function Home() {
  return (
    <section
      id="homepage"
      className="flex flex-col min-h-screen bg-white dark:bg-zinc-950 selection:bg-black selection:text-white"
    >
      <Navbar />
      <div className="flex items-center justify-center flex-grow">
        <Welcome />
      </div>
      <Footer />
    </section>
  );
}
