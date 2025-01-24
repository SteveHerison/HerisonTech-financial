import PublicarList from "./PublicarList";

export const Publi = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 p-2  h-full overflow-y-auto ">
      <PublicarList />
      <PublicarList />
      <PublicarList />
      <PublicarList />
      <PublicarList />
      <PublicarList />
      <PublicarList />
    </section>
  );
};
