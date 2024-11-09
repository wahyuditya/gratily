import Navbar from "../../components/navbar";
import AddEntry from "./addEntry";
import Entries from "./entries";

export default function Home() {
  return (
    <>
      <Navbar />
      <AddEntry />
      <div className="entries relative h-screen">
        <Entries />
      </div>
    </>
  );
}
