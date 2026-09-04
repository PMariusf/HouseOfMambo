import Image from "next/image";

const navigation = [
    { label: "Classes", href: "#classes" },
    { label: "Events", href: "#events" },
    { label: "The club", href: "#club" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

const highlights = [
    {
        number: "01",
        title: "Mambo On2",
        subtitle: "Classic Palladium cadence",
        description: "New York precision fused with European architectural discipline for dedicated dancers.",
    },
    {
        number: "02",
        title: "Masters",
        subtitle: "International faculty",
        description: "Resident choreographers from Havana, Milan, and New York hosting seasonal cohorts.",
    },
    {
        number: "03",
        title: "Private club",
        subtitle: "Lounge & socials",
        description: "Curated space and rum cellar with velvet booth reservations after academy hours.",
    },
];

const offerings = [
    {
        schedule: "Thu · Sat",
        icon: "♛",
        title: "Salsa nights",
        subtitle: "High-energy live social",
        description: "Electrifying social dancing driven by live percussionists, European guest vinyl DJs, bespoke mezcal pairings, and Bergen's sharpest social dancers.",
        action: "Explore nights",
        meta: "21:00 — 03:00",
    },
    {
        schedule: "Tues · Sun",
        icon: "♟",
        title: "Bachata masterclass",
        subtitle: "Sensual & traditional cohorts",
        description: "Intensive technique syllabus covering sensual body isolation, counter-balance mechanics, authentic Dominican syncopation, and musicality analysis.",
        action: "View schedule",
        meta: "All tiers",
    },
    {
        schedule: "Midnight transformation",
        icon: "♜",
        title: "Club Mambo",
        subtitle: "Private booths & table only",
        description: "After midnight, the main floor retreats to an ultra-exclusive members salon. Rare vintage rums, bottle presentation, and curated Latin-house soundscapes.",
        action: "VIP booking",
        meta: "Reservations req.",
    },
];

const timetable = [
    { time: "18:30", title: "Mambo On2 foundations", detail: "Lead & Follow Architectural Fundamentals", place: "Studio A (Sprung Oak)", status: "Reserved" },
    { time: "20:00", title: "Pachanga & shines lab", detail: "Foot Syncopations & Micro-Rhythms", place: "Studio A (Sprung Oak)", status: "3 spots" },
    { time: "21:30", title: "Private social club aperture", detail: "DJ Carlos Montalvo · Havana Vinyl Set", place: "The Grand Salon", status: "Members" },
];

const membership = [
    "Unlimited masterclass cohorts (On2 Technique, Pachanga, Afro-Body Isolation)",
    "Direct entry for member + guest to all weekend Club Mambo social salons",
    "Priority booking for private banquettes and climate-controlled private lockers",
    "Exclusive invitations to European international guest artist intensives",
];

const footerGroups = [
    { title: "Curriculum", items: ["Mambo On2 Syllabus", "Sensual Bachata", "Pachanga & Footwork", "Private Coaching"] },
    { title: "Hours & access", items: ["Studio: Tue–Sun 17:00 — 22:00", "Social Salon: Thu–Sat 21:00 — 03:00", "After-Hours Lounge: By Keycard", "Ole Bulls Plass 5, 5012 Bergen"] },
    { title: "Sound & channels", items: ["Spotify Master Playlists", "SoundCloud Floor Recordings", "Instagram @HouseOfMamboBergen"] },
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
    return (
        <div>
            <p className="section-eyebrow">{eyebrow}</p>
            <h2 className="section-title">{title}</h2>
        </div>
    );
}

export default function Home() {
    return (
        <main id="home" className="min-h-screen overflow-x-hidden bg-background">
            <header className="sticky top-0 z-50 border-b border-white/8 bg-background/95 backdrop-blur-md">
                <div className="site-container flex h-[5.25rem] items-center justify-between">
                    <a href="#home" className="group shrink-0" aria-label="House of Mambo home">
                        <Image src="/images/house-of-mambo-logo.png" alt="House of Mambo Bergen" width={600} height={408} priority className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.025] m:h-14" />
                    </a>

                    <nav className="hidden items-center gap-8 l:flex" aria-label="Main navigation">
                        {navigation.map((item) => <a key={item.label} href={item.href} className="nav-link">{item.label}</a>)}
                    </nav>

                    <div className="hidden items-center gap-4 l:flex">
                        <a href="#reserve" className="btn-primary btn-small">Reserve table</a>
                        <span className="grid size-8 place-items-center rounded-full bg-gold-main text-xs text-background" aria-hidden="true">♟</span>
                    </div>

                    <details className="mobile-menu relative l:hidden">
                        <summary className="grid size-11 cursor-pointer list-none place-items-center border border-white/10 bg-surface text-gold-main [&::-webkit-details-marker]:hidden">
                            <span className="sr-only">Open navigation</span>
                            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true"><span className="h-px w-full bg-current" /><span className="h-px w-full bg-current" /><span className="h-px w-full bg-current" /></span>
                        </summary>
                        <nav className="absolute right-0 top-14 z-50 flex w-64 flex-col border border-white/10 bg-surface p-2 shadow-2xl" aria-label="Mobile navigation">
                            {navigation.map((item) => <a key={item.label} href={item.href} className="border-b border-white/6 px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-text-main/75 last:border-0 hover:bg-white/5 hover:text-gold-main">{item.label}</a>)}
                            <a href="#reserve" className="btn-primary mt-2 text-center">Reserve table</a>
                        </nav>
                    </details>
                </div>
            </header>

            <section className="relative isolate">
                <div className="hero-glow" aria-hidden="true" />
                <div className="site-container py-7 m:py-10 l:py-12">
                    <div className="mb-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/8 pb-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-text-main/40">
                        <span className="text-gold-bronze">◆ Exclusive dance club & studio · Bergen, Norway</span>
                        <span>5012 Bergen · Latitude 60.3913° N</span>
                    </div>

                    <div className="mb-10 flex flex-col justify-between gap-5 l:flex-row l:items-end">
                        <div>
                            <h1 className="title-primary text-[clamp(3.4rem,7vw,5.8rem)] leading-[0.86] tracking-[0.065em]">House of Mambo</h1>
                            <p className="title-secondary mt-4 text-base m:text-xl">Bergen</p>
                        </div>
                        <p className="micro-label pb-1 text-right text-gold-champagne/55">Sanctuary of nocturnal rhythm</p>
                    </div>

                    <div className="grid gap-5 l:grid-cols-[1.3fr_0.88fr_0.88fr] l:items-start">
                        <div className="flex min-h-full flex-col justify-between gap-8 pr-0 l:pr-3">
                            <div>
                                <span className="mb-6 block h-px w-12 bg-gold-main" />
                                <p className="max-w-md text-base leading-7 text-text-main/72">Where the raw kinetic pulse of Afro-Cuban salsa converges with the nocturnal opulence of Bergen&apos;s most guarded inner circle. Master the On2 cadence by day. Claim the lounge by night.</p>
                                <div className="mt-7 grid max-w-md gap-3 sm:grid-cols-2">
                                    <a href="#classes" className="btn-primary text-center">Explore classes</a>
                                    <a href="#reserve" className="btn-secondary text-center">Reserve VIP table</a>
                                </div>
                            </div>

                            <dl className="grid max-w-md grid-cols-[0.8fr_1.3fr] gap-x-6 gap-y-3 border border-white/6 bg-surface/70 p-5">
                                <dt className="micro-label">Curation</dt><dd className="micro-value">On2 / Timba / Mambo</dd>
                                <dt className="micro-label">Admission</dt><dd className="micro-value">Audition & private guestlist</dd>
                                <dt className="micro-label">Atmosphere</dt><dd className="micro-value">Sprung oak · low lux amber</dd>
                            </dl>
                        </div>

                        <figure className="group overflow-hidden border border-white/8 bg-surface shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
                            <div className="relative aspect-[4/5] overflow-hidden bg-black">
                                <Image src="/mambo.dance.png" alt="Salsa dancers inside the House of Mambo club" fill loading="eager" fetchPriority="high" sizes="(max-width: 1023px) 100vw, 30vw" className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" aria-hidden="true" />
                                <span className="absolute left-4 top-4 border border-gold-main/35 bg-black/75 px-3 py-2 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-gold-champagne backdrop-blur-sm">The sanctuary</span>
                            </div>
                            <figcaption className="min-h-40 border-t border-white/8 p-5"><h3 className="card-title">Kinetic discipline</h3><p className="mt-3 text-sm leading-6 text-text-main/55">World-class instruction curated for refined footwork, organic Afro-Cuban body movement, and intricate partner dynamics.</p></figcaption>
                        </figure>

                        <figure className="group overflow-hidden border border-white/8 bg-surface shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
                            <div className="relative aspect-[4/5] overflow-hidden bg-black">
                                <Image src="/Image+Shadow.png" alt="House of Mambo acoustic dance floor and lounge" fill sizes="(max-width: 1023px) 100vw, 30vw" className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20" aria-hidden="true" />
                                <span className="absolute left-4 top-4 border border-gold-main/35 bg-black/75 px-3 py-2 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-gold-champagne backdrop-blur-sm">Acoustic floor</span>
                            </div>
                            <figcaption className="min-h-40 border-t border-white/8 p-5"><h3 className="card-title">Engineered resonance</h3><p className="mt-3 text-sm leading-6 text-text-main/55">Custom sprung multi-tier timber flooring tuned to protect joints and amplify live conga and timbal reverberations.</p></figcaption>
                        </figure>
                    </div>

                    <div className="mt-9 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border border-white/8 bg-surface/65 px-4 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-text-main/45">
                        <span className="text-gold-bronze">● Floor audio feed now playing:</span><span className="text-gold-champagne">Tito Puente — Ran Kan Kan (Mambo VIP Club Edit)</span><span>BPM: 104</span><span>Deck: Master ◆ Lossless Hi-Fi</span>
                    </div>

                    <div id="classes" className="mt-6 grid gap-4 m:grid-cols-3">
                        {highlights.map((item) => (
                            <article key={item.number} className="border border-white/7 bg-surface/70 p-5">
                                <h3 className="font-bebas text-2xl tracking-[0.075em] text-gold-main">{item.number} {item.title}</h3>
                                <p className="micro-label mt-1 text-gold-champagne/60">{item.subtitle}</p>
                                <p className="mt-3 text-sm leading-6 text-text-main/45">{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="events" className="site-container section-space">
                <div className="mb-10 flex flex-col justify-between gap-5 border-t border-white/8 pt-8 l:flex-row l:items-end">
                    <SectionHeading eyebrow="Curated nights & academy" title="Signature offerings" />
                    <p className="max-w-md text-sm leading-6 text-text-main/50 l:text-right">A dual identity: uncompromising artistic training before dusk, decadent social immersion as midnight approaches.</p>
                </div>

                <div className="grid gap-5 m:grid-cols-3">
                    {offerings.map((item) => (
                        <article key={item.title} className="flex min-h-[22rem] flex-col border border-white/7 bg-surface/70 p-6">
                            <div className="flex items-center justify-between"><span className="border border-gold-bronze/25 bg-black/30 px-2.5 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-gold-champagne/75">{item.schedule}</span><span className="text-gold-champagne/75" aria-hidden="true">{item.icon}</span></div>
                            <h3 className="card-title mt-8 text-3xl">{item.title}</h3>
                            <p className="micro-label mt-2 text-gold-champagne/60">{item.subtitle}</p>
                            <p className="mt-4 text-sm leading-6 text-text-main/55">{item.description}</p>
                            <div className="mt-auto flex items-center justify-between border-t border-white/8 pt-5"><a href="#reserve" className="micro-label text-gold-main transition-colors hover:text-gold-champagne">{item.action} →</a><span className="text-[0.6rem] uppercase tracking-[0.14em] text-text-main/30">{item.meta}</span></div>
                        </article>
                    ))}
                </div>

                <div className="mt-12 border border-white/8 bg-surface/80 p-5 m:p-7">
                    <div className="flex flex-col justify-between gap-3 border-b border-white/8 pb-5 m:flex-row m:items-end">
                        <div><p className="micro-label">Current cycle · Week 42</p><h3 className="font-bebas text-2xl tracking-[0.06em] text-text-main">The studio timetable</h3></div>
                        <p className="micro-label text-gold-champagne/65">● Open enrollment · Waitlist only</p>
                    </div>
                    <div>
                        {timetable.map((item) => (
                            <div key={item.time} className="grid gap-3 border-b border-white/8 py-5 last:border-0 m:grid-cols-[5rem_1fr_auto_auto] m:items-center">
                                <time className="font-bebas text-2xl tracking-[0.04em] text-gold-main">{item.time}</time>
                                <div><h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-text-main/80">{item.title}</h4><p className="mt-1 text-xs text-text-main/38">{item.detail}</p></div>
                                <span className="text-[0.6rem] uppercase tracking-[0.14em] text-text-main/40">{item.place}</span>
                                <span className="justify-self-start border border-gold-bronze/30 px-2 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-gold-champagne m:justify-self-end">{item.status}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="club" className="border-y border-white/7 bg-[#0d0d0d]">
                <div className="site-container section-space">
                    <div className="grid gap-10 l:grid-cols-[1fr_1fr] l:gap-8">
                        <div>
                            <SectionHeading eyebrow="Spatial architecture" title="The Bergen sanctuary" />
                            <p className="mt-6 max-w-xl text-base leading-7 text-text-main/58">Situated in the historic heart of Bergen at Ole Bulls Plass, House of Mambo was conceived as an acoustic sanctuary for uncompromising dancers. Every detail—from the bespoke sub-floor cushioning to the custom low-lux brass lighting—is designed to heighten kinetic intuition.</p>
                            <figure className="relative mt-7 aspect-[16/10] overflow-hidden border border-white/8 bg-black">
                                <Image src="/mambo.dance.png" alt="The House of Mambo grand ballroom and lounge" fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover object-[center_58%]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/10" aria-hidden="true" />
                                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                                    <div><p className="micro-label text-gold-champagne/70">Grand ballroom & lounge</p><p className="font-bebas text-xl tracking-[0.08em] text-text-main">Ole Bulls Plass 5, 5012 Bergen</p></div>
                                    <p className="font-bebas text-2xl tracking-[0.04em] text-gold-main">180 guests</p>
                                </figcaption>
                            </figure>
                            <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                <div className="border border-white/7 bg-surface/55 p-5"><p className="micro-label">Floor spec</p><h3 className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-text-main/75">Multi-tier sprung oak</h3><p className="mt-2 text-xs leading-5 text-text-main/40">Absorbs 48% vertical kinetic impact.</p></div>
                                <div className="border border-white/7 bg-surface/55 p-5"><p className="micro-label">Acoustic tuning</p><h3 className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-text-main/75">Void acoustics matrix</h3><p className="mt-2 text-xs leading-5 text-text-main/40">Bespoke phase-aligned horn system.</p></div>
                            </div>
                        </div>

                        <div className="space-y-5">
                            <article id="reserve" className="border border-white/8 bg-[#252525] p-6 m:p-8">
                                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                                    <div><h3 className="font-bebas text-2xl tracking-[0.06em] text-gold-main">♙ Patron membership</h3><p className="micro-label mt-1 text-gold-champagne/55">Private society · by referral</p></div>
                                    <p className="font-bebas text-3xl tracking-[0.04em] text-gold-main">NOK 1.850<span className="text-base text-text-main/50">/mo</span></p>
                                </div>
                                <ul className="mt-7 space-y-4">
                                    {membership.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-text-main/65"><span className="mt-1 text-gold-main" aria-hidden="true">◉</span><span>{item}</span></li>)}
                                </ul>
                                <a href="mailto:membership@houseofmambo.no" className="btn-primary mt-8 block text-center">Apply for membership</a>
                            </article>

                            <article className="border border-white/8 bg-surface/70 p-6">
                                <div className="flex items-center justify-between"><p className="micro-label">International residency</p><p className="text-[0.6rem] uppercase tracking-[0.16em] text-text-main/30">Q4 2026</p></div>
                                <div className="mt-5 flex items-center justify-between border-b border-white/8 pb-4"><div><h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-text-main/75">Marco & Sara (Madrid)</h4><p className="mt-1 text-xs text-text-main/38">Sensual Mastery Weekend · Nov 14–16</p></div><span className="micro-label text-gold-main">Booked</span></div>
                                <div className="mt-4 flex items-center justify-between"><div><h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-text-main/75">Eddie Torres Jr. (New York)</h4><p className="mt-1 text-xs text-text-main/38">Palladium Legacy Intensive · Dec 05–07</p></div><span className="micro-label text-gold-main">Priority</span></div>
                            </article>

                            <blockquote className="border border-white/8 bg-surface/70 p-7 text-base italic leading-7 text-text-main/72">
                                <span className="mb-2 block font-serif text-3xl not-italic text-gold-main/45">“</span>
                                Dance is the hidden language of the soul. In the Nordic dusk, rhythm becomes our sanctuary.
                                <footer className="mt-5 flex items-center justify-between not-italic"><cite className="micro-label">— Ole Bulls Plass, Bergen</cite><span className="font-bebas text-2xl tracking-[0.18em] text-gold-main">HOM</span></footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="site-container section-space pb-10">
                <div className="grid gap-6 border border-white/8 bg-[#252525] p-6 m:p-8 l:grid-cols-[1.15fr_0.85fr] l:items-center">
                    <div><p className="micro-label">The private dispatch</p><h2 className="font-bebas text-3xl tracking-[0.055em] text-text-main">Receive secret guestlist announcements</h2><p className="mt-2 text-sm leading-6 text-text-main/48">Weekly invitations, password-protected after-hours access, and advance masterclass bookings directly to your inbox.</p></div>
                    <form className="flex flex-col gap-3 sm:flex-row" action="#contact">
                        <label htmlFor="email" className="sr-only">Email address</label>
                        <input id="email" name="email" type="email" required placeholder="Enter your email address" className="min-h-12 flex-1 border border-white/10 bg-background px-4 text-sm text-text-main outline-none placeholder:text-text-main/25 focus:border-gold-main/60" />
                        <button type="submit" className="btn-primary min-h-12 shrink-0">Join list</button>
                    </form>
                </div>

                <footer id="about" className="pt-14">
                    <div className="grid gap-10 border-b border-white/8 pb-12 m:grid-cols-2 l:grid-cols-[0.8fr_1fr_1.15fr_1.15fr]">
                        <div><p className="font-bebas text-5xl tracking-[0.18em] text-gold-main">HOM</p><p className="micro-label mt-4 text-gold-champagne/50">House of Mambo Bergen</p><p className="mt-5 max-w-[15rem] text-xs leading-5 text-text-main/38">Nocturnal rhythm. Elite Latin instruction. Private society in Western Norway.</p></div>
                        {footerGroups.map((group) => <div key={group.title}><h3 className="micro-label text-gold-main">{group.title}</h3><ul className="mt-4 space-y-2">{group.items.map((item) => <li key={item} className="text-xs leading-5 text-text-main/45">{item}</li>)}</ul></div>)}
                    </div>
                    <div className="flex flex-col justify-between gap-4 py-7 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-text-main/25 m:flex-row">
                        <p>© 2026 House of Mambo Bergen AS. All rights reserved.</p>
                        <div className="flex flex-wrap gap-5"><a href="#contact" className="hover:text-gold-champagne">Privacy policy</a><a href="#contact" className="hover:text-gold-champagne">Guest code</a><a href="mailto:press@houseofmambo.no" className="hover:text-gold-champagne">Press inquiries</a></div>
                    </div>
                    <div className="flex flex-col justify-between gap-3 border-t border-white/8 pt-7 text-text-main/35 m:flex-row m:items-end">
                        <div><p className="font-bebas text-xl tracking-[0.04em] text-gold-main">House of Mambo</p><p className="mt-1 text-[0.58rem] tracking-[0.15em]">Bergen, Norway · Latin Sanctuary & Private Social Club</p></div>
                        <p className="text-[0.58rem] uppercase tracking-[0.16em]">© 2026 House of Mambo Bergen. All rights reserved.</p>
                    </div>
                </footer>
            </section>
        </main>
    );
}
