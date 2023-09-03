import Button from "../UI/Button";
import Card from "../UI/Card";

const ErrorModal = () => {
  return (
    <div className="ErrorModal ">
      <div className="backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0"></div>
      <Card className="w-[36rem] p-0 z-20">
        <header className="bg-red-700 text-white p-4 rounded-t-xl ">
          <h2 className="text-center text-xl text-white ">
            İsim Alanı Zorunludur
          </h2>
        </header>
        <section className="p-4">Lütfen Bir İsim Giriniz !</section>
        <footer className="p-4">
          <Button>Tamam</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
