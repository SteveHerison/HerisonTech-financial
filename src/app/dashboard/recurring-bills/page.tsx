import Fatura from "@/app/pages/Fatura";

export default function Faturas() {
  return (
    <section className="flex flex-col h-full px-10 pt-8 pb-2  gap-y-4 containers overflow-y-auto lg:overflow-y-hidden ">
      <h2 className="text-2xl text-slate-50 font-semibold">Recurring Bills</h2>
      <Fatura />
    </section>
  );
}
