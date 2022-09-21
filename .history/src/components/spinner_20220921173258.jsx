import spinner from "../assets/svg/spinner.svg";

export default function Spinner() {
  return (
    <div className="bg-black bg-opacity-50 flex items-center justify-center">
      <div>
        <img src={spinner} alt="loading" className="h-24" />
      </div>
    </div>
  );
}
