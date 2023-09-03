import Button from "../UI/Button";
import Card from "../UI/Card";

const ErrorModal = (props) => {
const [onConfirm, error]=props;
const [title,message]=error

  return (
    <div className="ErrorModal ">
      <div className="backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0"
      onClick={onConfirm}
      ></div>
      <Card className="w-[36rem] p-0 z-20">
        <header className="bg-red-700 text-white p-4 rounded-t-xl ">
          <h2 className="text-center text-xl text-white ">
           {title}
          </h2>
        </header>
        <section className="p-4">{message}</section>
        <footer className="p-4">
          <Button onClick={onConfirm}>Tamam</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
