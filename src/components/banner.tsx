export default function Banner() {
  return (
    <div
      className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 my-3"
      role="alert"
    >
      <p className="font-bold">Informational message</p>
      <p className="text-sm">There is no connection to OpenAi at the moment</p>
    </div>
  );
}
