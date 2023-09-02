import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

const AddWorker = () => {
  const [enteredWorkerName, setenteredWorkerName] = useState("");
  const [enteredWage, setenteredWage] = useState("");

  const minimumWage = 5000;

  const addWorkerHandler = (e) => {
    e.preventDefault();
    if (
      enteredWorkerName.trim().length === 0 ||
      enteredWage.trim().length === 0
    ) {
      console.log("değer giriniz")
      return;
    }
    if(enteredWage < minimumWage ){
      console.log("Geçerli maaş girin");
      return;
     }
    

    setenteredWage("");
    setenteredWorkerName("");
    console.log(enteredWorkerName, enteredWage);

  }

 
  return (
    <Card addClass="mt-10">
      <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
        <label htmlFor="name" className="font-medium ">
          Çalışan İsmi
        </label>
        <input
          onChange={(e) => setenteredWorkerName(e.target.value)}
          value={enteredWorkerName}
          type="text"
          name=""
          className="max-w-[40rem] w-full mx-auto border p-2 "
          placeholder="Çalışan İsmi Giriniz!"
          id="name"
        />
        <label htmlFor="wage" className="font-medium">
          Maaş Miktarı
        </label>
        <input
          onChange={(e) => setenteredWage(e.target.value)}
          value={enteredWage}
          type="number"
          name=""
          className="max-w-[40rem] w-full mx-auto border p-2 "
          placeholder="Maaş Miktarı Giriniz!"
          id="wage"
        />
        <Button type="submit" className="mt-2">
          Ekle
        </Button>
      </form>
    </Card>
  );
};

export default AddWorker;
