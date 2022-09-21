import spinner from "../assets/svg/spinner";

export default function Spinner() {
  return (
    <div>
      <div>
        <img src={spinner} alt="loading" className="h-24" />
      </div>
    </div>
  );
}