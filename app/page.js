import Form from "@/components/Form";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <Form />
      </div>
      <Footer/>
    </>
  );
}
