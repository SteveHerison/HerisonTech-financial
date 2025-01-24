import { Bills } from "./Bills";
import { DiningOut } from "./DiningOut";
import { Entertainment } from "./Entertainment";
import { PersonalCare } from "./PersonalCare";

export default function OrcamentoCard() {
  return (
    <section className="flex flex-col pb-3 gap-3 mb-14 ">
      <Entertainment />
      <Bills />
      <DiningOut />
      <PersonalCare />
    </section>
  );
}
