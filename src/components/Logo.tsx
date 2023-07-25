import Image from "next/image";
import wordwiseLogo from "../app/wordwise.png";

export function Logo() {
  return (
    <div className="flex justify-between items-center mb-4">
      <Image src={wordwiseLogo} width={200} alt="logo" />
    </div>
  );
}
