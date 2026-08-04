export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden "
    >
      <img
        src="/hero.png"
        alt="DECIDE — hero visual"
        className="absolute inset-0 w-full h-full object-cover select-none"
        draggable="false"

      />

      <div className="absolute bottom-12 md:right-12 z-10 animate-fade-in mx-6 md:mx-0">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-cream">
          Mark Cyrus Serrano
        </h1>
        <h3 className="text-xl md:text-3xl font-bold tracking-tight text-cream">
          Computer Science
        </h3>
      </div>
    </section>
  )
}
