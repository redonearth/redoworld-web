import Hero from './hero';

export default function HomePage() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-gray-600">
      <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
        <Hero />
      </div>
    </section>
  );
}
