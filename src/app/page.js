import Header from "@/components/Header";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <main className="">
      <Header/>
      <div className="flex">
      <Sidebar/>
      </div>
    </main>
  );
}
