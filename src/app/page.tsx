import Image from "next/image";

const navigation = [
    { label: "Classes", href: "#classes" },
    { label: "Events", href: "#events" },
    { label: "The club", href: "#club" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

const highlights = [
    { number: "01", title: "Mambo On2", description: "Classic Palladium cadence" },
    { number: "02", title: "Masters", description: "International faculty" },
    { number: "03", title: "Private club", description: "Lounge and socials" },
];

export default function Home() {
    return (
        <main className="min-h-screen overflow-x-hidden bg-background">
            <header className="border-b border-white/8 bg-background/95">
                <div className="mx-auto flex min-h-24 max-w-7xl items-center justify-between px-5 m:px-8 l:px-12">
                    <a href="#home" className="group shrink-0" aria-label="House of Mambo home">
                        <Image
                            src="/images/house-of-mambo-logo.png"
                            alt="House of Mambo Bergen"
                            width={600}
                            height={408}
                            priority
                            className="h-auto w-24 object-contain transition-transform duration-300 group-hover:scale-[1.03] m:w-28 l:w-32"
                        />
                    </a>

                    <nav className="hidden items-center gap-7 l:flex" aria-label="Main navigation">
                        {navigation.map((item) => (
                            <a key={item.label} href={item.href} className="nav-link">
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden items-center gap-3 l:flex">
                        <a href="#reserve" className="btn-primary btn-small">Reserve table</a>
                        <span className="grid size-9 place-items-center rounded-full border border-gold-main/40 text-sm text-gold-main" aria-hidden="true">♫</span>
                    </div>

                    <details className="mobile-menu relative l:hidden">
                        <summary className="grid size-11 cursor-pointer list-none place-items-center border border-white/10 bg-surface text-gold-main [&::-webkit-details-marker]:hidden">
                            <span className="sr-only">Open navigation</span>
                            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
                                <span className="h-px w-full bg-current" />
                                <span className="h-px w-full bg-current" />
                                <span className="h-px w-full bg-current" />
                            </span>
                        </summary>
                        <nav className="absolute right-0 top-14 z-50 flex w-60 flex-col border border-white/10 bg-surface p-2 shadow-2xl" aria-label="Mobile navigation">
                            {navigation.map((item) => (
                                <a key={item.label} href={item.href} className="border-b border-white/6 px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-text-main/75 last:border-0 hover:bg-white/5 hover:text-gold-main">
                                    {item.label}
                                </a>
                            ))}
                            <a href="#reserve" className="btn-primary mt-2 text-center">Reserve table</a>
                        </nav>
                    </details>
                </div>
            </header>

            <section id="home" className="relative isolate border-b border-white/8">
                <div className="hero-glow" aria-hidden="true" />

                <div className="mx-auto max-w-7xl px-5 py-8 m:px-8 m:py-12 l:px-12 l:py-16">
                    <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-y border-white/8 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-text-main/45">
                        <span className="text-gold-champagne">Exclusive dance club &amp; studio · Bergen, Norway</span>
                        <span>5012 Bergen · Latitude 60.3913° N</span>
                    </div>

                    <div className="grid items-center gap-10 l:grid-cols-[1.05fr_0.95fr] l:gap-16">
                        <div className="max-w-2xl">
                            <span className="mb-5 block h-px w-14 bg-gold-main" />
                            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold-champagne">Sanctuary of nocturnal rhythm</p>
                            <h1 className="title-primary text-[clamp(3.75rem,10vw,7.75rem)] leading-[0.84] tracking-[0.075em]">House of Mambo</h1>
                            <p className="title-secondary mt-3 text-base m:text-lg">Bergen</p>

                            <p className="mt-7 max-w-xl text-base leading-7 text-text-main/72 m:text-lg m:leading-8">
                                Where the raw kinetic pulse of Afro-Cuban salsa meets the nocturnal opulence of Bergen&apos;s premier night life. Elevate your movement. Own the night.
                            </p>

                            <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:max-w-xl">
                                <a href="#classes" className="btn-primary text-center">Explore classes</a>
                                <a href="#reserve" className="btn-secondary text-center">Reserve VIP table</a>
                            </div>

                            <dl className="mt-9 grid grid-cols-3 border-y border-white/8 py-5">
                                <div className="border-r border-white/8 pr-3">
                                    <dt className="micro-label">Curation</dt>
                                    <dd className="mt-2 text-sm text-text-main/80">Immersive atmosphere</dd>
                                </div>
                                <div className="border-r border-white/8 px-3">
                                    <dt className="micro-label">Identity</dt>
                                    <dd className="mt-2 text-sm text-text-main/80">Mambo &amp; culture</dd>
                                </div>
                                <div className="pl-3">
                                    <dt className="micro-label">Sound</dt>
                                    <dd className="mt-2 text-sm text-text-main/80">Low-lit warmth</dd>
                                </div>
                            </dl>
                        </div>

                        <div className="relative mx-auto w-full max-w-xl">
                            <div className="absolute -inset-3 border border-gold-main/15" />
                            <div className="relative overflow-hidden border border-white/10 bg-black shadow-[0_32px_80px_rgba(0,0,0,0.55)]">
                                <div className="absolute left-4 top-4 z-10 border border-gold-main/40 bg-black/75 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-gold-champagne backdrop-blur-sm">The official mark</div>
                                <Image src="/hOm.jpg" alt="House of Mambo Bergen logo featuring classic dance shoes" width={1097} height={1097} priority className="aspect-square h-auto w-full object-cover" />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/75 to-transparent px-5 pb-5 pt-16">
                                    <p className="font-bebas text-2xl tracking-[0.08em] text-gold-main">Rhythm · movement · connection</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="classes" className="mt-12 grid border border-white/8 bg-surface/70 m:grid-cols-3 l:mt-16">
                        {highlights.map((item, index) => (
                            <article key={item.number} className={`p-5 m:p-6 ${index < highlights.length - 1 ? "border-b border-white/8 m:border-b-0 m:border-r" : ""}`}>
                                <p className="font-bebas text-2xl tracking-[0.08em] text-gold-main">{item.number} {item.title}</p>
                                <p className="mt-2 text-sm leading-6 text-text-main/55">{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
