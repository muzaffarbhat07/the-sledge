import NewsFeed from "./components/NewsFeed";

export default function Home() {
  return (
    <section className="w-full flex min-h-screen flex-col items-center gap-10">
      <h1 className="text-center mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl">
        Discover & Read
        <br className="xl:hidden" />
        <span className="text-green-500">Sarcastic Cricket News</span>
      </h1>
      <NewsFeed />
    </section>
  );
}
