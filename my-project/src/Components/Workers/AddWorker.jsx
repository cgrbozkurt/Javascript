import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "./ErrorModal";

const AddWorker = (props) => {
  const [enteredWorkerName, setenteredWorkerName] = useState("");
  const [enteredWage, setenteredWage] = useState("");
  const [error , setError]=useState()

  const minimumWage = 5000;

  const addWorkerHandler = (e) => {
    e.preventDefault();
    if (
      enteredWorkerName.trim().length === 0 
    ) {
     setError({
title: "İsim Alanı Zorunludur",
message:"Lütfen bir isim giriniz "
     })
      return;
    }
    if(enteredWage < minimumWage ){
      setError({
        title:"Maaş Alanı Zorunludur",
        message:`Lütfen ${minimumWage} değerinden büyük bir sayı giriniz`
      })
      return;
     }
    


    setenteredWage("");
    setenteredWorkerName("");
    props.setWorkers((prevState)=>[
      {
        id: Math.floor(Math.random()*1000),
        name:enteredWorkerName,
        wage:enteredWage
      },
      ...prevState,
    ])
    console.log(enteredWorkerName, enteredWage);

  };

const errorHandler=()=>{
setError(null)
}
 
  return (
    <div>
{error && <ErrorModal onConfirm={errorHandler} error={error} ></ErrorModal>}

<Card className="mt-10">
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
    </div>
  );
};

export default AddWorker;
