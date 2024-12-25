import Button from "@/components/button";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export default function FetchEntry() {
  const handleFetch = async () => {
    try {
      const db = getFirestore();

      const colRef = collection(db, "gratilyEntries");

      getDocs(colRef).then((snapshot) => {
        let data: any[] = [];
        snapshot.docs.forEach((doc) => {
          data.push(doc.data());
        });
        console.log(data);
      });
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <>
      <Button label="fetch data" onClick={handleFetch} />
    </>
  );
}
