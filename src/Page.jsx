import Navbar from "./layout/Navbar";
import Hero from "./layout/Hero";
import TaskBoard from "./components/task/TaskBoard";
import Footer from "./layout/Footer";

const Page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TaskBoard />
      <Footer />
    </>
  );
};

export default Page;
