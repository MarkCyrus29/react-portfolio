export default function About() {
  return (
    <section id="about" className="relative py-28 ">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-cream/10 to-transparent" />

      <div className="mx-auto max-w-3xl px-6">
        <div className="reveal mb-12 text-center">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">
            Who I Am
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-cream">
            About Me
          </h2>
        </div>

        <div className="reveal space-y-5 text-center">
          <p className="text-lg text-cream/80 leading-relaxed">
            Hello! I'm Mark Cyrus Serrano, a front-end web developer based in
            the Philippines, currently a third-year Computer Science student at De La Salle Lipa.
          </p>
          <p className="text-base text-muted leading-relaxed">
            When I'm not creating websites, I'm usually deep in a{" "}
            <a
              href="https://open.spotify.com/user/31kx4bwllxqrm53ndqepe3kpzhre?si=32f88dd601eb4f7f"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-cream underline underline-offset-4 transition-colors"
            >
              Spotify
            </a>{" "}
            queue — seemed fitting for a site built around an album.
          </p>

          <p className="text-sm text-muted/60 pt-4 tracking-wide">
            Next.js · React · TypeScript · Tailwind CSS · Sanity CMS ·
            Supabase · Resend · HTML5 · CSS3 · Plesk
          </p>
        </div>
      </div>
    </section>
  )
}