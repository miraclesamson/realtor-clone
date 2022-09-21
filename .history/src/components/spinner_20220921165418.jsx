import spinner from "./assets/svg/Spinner";

export default function spinner() {
  return (
    <div>
      <div>
        <img src={spinner} alt="loading" className="h-24" />
      </div>
    </div>
  );
}
