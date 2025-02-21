import { Publi } from "@/app/pages/Publicar";

export default function Publicar() {
  return (
    <section className="flex flex-col overflow-y-hidden h-full px-10 pt-8 pb-2 gap-y-4 containers">
      <div className="flex justify-between">
        <h2 className="text-2xl text-slate-50 font-semibold">Post</h2>
        <button className="bg-slate-50 rounded-xl p-2 hover:bg-green-700 hover:text-slate-50 font-semibold">
          ADD +
        </button>
      </div>
      <Publi />
    </section>
  );
}
