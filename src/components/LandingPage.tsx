import { useState } from "react";
import {
  Phone, MapPin, MessageCircle, GraduationCap, Trophy, Users, BookOpen,
  ShieldCheck, Sparkles, Play, ChevronDown, CheckCircle2, Star, Calendar,
  FlaskConical, Microscope, Award, ArrowRight, Atom, Beaker, Rocket,
} from "lucide-react";
import { AutoCarousel } from "./AutoCarousel";
import s1 from "@/assets/slides/DSC_6547.jpg.asset.json";
import s2 from "@/assets/slides/DSC_6722.jpg.asset.json";
import s3 from "@/assets/slides/DSC_6615.jpg.asset.json";
import s4 from "@/assets/slides/DSC_6570.jpg.asset.json";
import s5 from "@/assets/slides/DSC_6675.jpg.asset.json";
import s6 from "@/assets/slides/DSC_6593.jpg.asset.json";
import s7 from "@/assets/slides/DSC_6518.jpg.asset.json";
import s8 from "@/assets/slides/DSC_6521.jpg.asset.json";
import s9 from "@/assets/slides/DSC_6726.jpg.asset.json";
import s10 from "@/assets/slides/DSC_6495.jpg.asset.json";
import heroBuilding from "@/assets/hero-building.png.asset.json";
import schoolLogo from "@/assets/logo.jpg.asset.json";

const slides = [
  { url: s1.url, caption: "Grand Finale 2026 — Where every child shines on stage" },
  { url: s2.url, caption: "Cultural performances that build confidence & creativity" },
  { url: s3.url, caption: "Honouring excellence — Awards of Appreciation" },
  { url: s4.url, caption: "Celebrating our dedicated educators & parent community" },
  { url: s5.url, caption: "A culture of gratitude and tradition" },
  { url: s6.url, caption: "Leadership voices that guide our journey" },
  { url: s7.url, caption: "Inspiring assemblies & morning prayer" },
  { url: s8.url, caption: "An engaged, curious & joyful student family" },
  { url: s9.url, caption: "Hands-on creativity in our pre-primary classrooms" },
  { url: s10.url, caption: "Founding family — a legacy of quality education" },
];

const heroBg = heroBuilding.url;
const WHATSAPP_NUMBER = "919413686264";

function sendToWhatsApp(message: string) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}


export function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <section id="gallery" className="bg-navy">
        <AutoCarousel slides={slides} interval={2000} />
      </section>
      <Why />
      <Tour />
      <Achievements />
      <Process />
      <Testimonials />
      <LeadForm />
      <FAQ />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 md:px-6 mt-3">
        <div className="glass-light rounded-full px-4 md:px-6 py-2.5 flex items-center justify-between shadow-elegant">
          <a href="#top" className="flex items-center gap-2.5">
            <div className="relative size-11 rounded-full overflow-hidden ring-2 ring-sky/30 shadow-glow animate-pulse-glow">
              <img src={schoolLogo.url} alt="Science Academy logo" className="w-full h-full object-cover" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-navy text-sm md:text-base">Science Academy</div>
              <div className="text-[10px] md:text-[11px] text-muted-foreground -mt-0.5">Sr. Secondary School</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-navy/80">
            <a href="#why" className="hover:text-sky transition">Why Us</a>
            <a href="#tour" className="hover:text-sky transition">Campus</a>
            <a href="#process" className="hover:text-sky transition">Admission</a>
            <a href="#faq" className="hover:text-sky transition">FAQ</a>
          </nav>
          <a href="#apply" className="rounded-full bg-gradient-gold text-navy font-semibold text-xs md:text-sm px-4 md:px-5 py-2 shadow-gold hover:scale-[1.03] transition">
            Apply Now
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-navy pt-24 pb-16">
      {/* school building background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Science Academy campus" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/75 to-sky/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
      </div>
      {/* glowing orbs */}
      <div className="absolute -top-32 -left-20 size-[420px] rounded-full bg-sky/30 blur-3xl animate-float-slow" />
      <div className="absolute top-40 -right-20 size-[420px] rounded-full bg-gold/20 blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />

      {/* floating science icons */}
      <Atom className="absolute top-28 left-[8%] size-10 text-sky/40 animate-spin-slow hidden md:block" />
      <Beaker className="absolute bottom-24 left-[12%] size-9 text-gold/50 animate-float-y hidden md:block" />
      <Rocket className="absolute top-1/3 right-[6%] size-10 text-sky/40 animate-float-y hidden md:block" style={{ animationDelay: "1.5s" }} />
      <Sparkles className="absolute bottom-32 right-[14%] size-8 text-gold/60 animate-float-x hidden md:block" />
      <FlaskConical className="absolute top-1/2 left-[4%] size-8 text-white/30 animate-float-slow hidden lg:block" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10 items-center w-full">
        <div className="lg:col-span-7 text-white animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-white/90 text-xs font-medium mb-6">
            <Sparkles className="size-3.5 text-gold" /> Admissions Open · Session 2026-27
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-balance">
            Where curious minds become{" "}
            <span className="bg-gradient-to-r from-gold via-yellow-200 to-gold bg-clip-text text-transparent">tomorrow's leaders.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl text-balance">
            A premium, co-educational English medium school in Kishangarh-Renwal nurturing academic excellence, character, and creativity from Pre-Primary to Senior Secondary.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#apply" className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold text-navy font-semibold px-7 py-3.5 shadow-gold hover:scale-[1.03] transition">
              Book a Campus Visit <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
            </a>
            <a href="#tour" className="inline-flex items-center gap-2 rounded-full glass text-white font-medium px-6 py-3.5 hover:bg-white/20 transition">
              <Play className="size-4" /> Watch Virtual Tour
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/80">
            {[
              { icon: ShieldCheck, label: "RBSE Affiliated" },
              { icon: Users, label: "1000+ Happy Families" },
              { icon: Trophy, label: "Top Results in District" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="size-4 text-gold" /> {label}
              </div>
            ))}
          </div>
        </div>

        {/* floating quick-inquiry card */}
        <div className="lg:col-span-5">
          <div className="glass rounded-3xl p-6 md:p-7 shadow-elegant">
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <Calendar className="size-4 text-gold" /> Quick Admission Inquiry
            </div>
            <h3 className="text-white text-2xl font-bold mt-2">Reserve your child's seat</h3>
            <p className="text-white/70 text-sm mt-1">Our counsellor will call back within 1 working hour.</p>
            <form
              className="mt-5 space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                const f = e.currentTarget as HTMLFormElement;
                const name = (f.elements.namedItem("name") as HTMLInputElement)?.value || "";
                const mobile = (f.elements.namedItem("mobile") as HTMLInputElement)?.value || "";
                const klass = (f.elements.namedItem("klass") as HTMLSelectElement)?.value || "";
                sendToWhatsApp(
                  `*New Callback Request — Science Academy*\n\nParent: ${name}\nMobile: ${mobile}\nClass: ${klass}\n\nPlease contact me regarding admission.`
                );
                f.reset();
              }}
            >
              <input name="name" required placeholder="Parent's name" className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-gold" />
              <input name="mobile" required type="tel" placeholder="Mobile number" className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-gold" />
              <select name="klass" defaultValue="" className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white outline-none focus:border-gold">
                <option value="" className="text-navy">Class seeking admission</option>
                <option className="text-navy">Pre-Primary (Nursery–KG)</option>
                <option className="text-navy">Primary (1–5)</option>
                <option className="text-navy">Middle (6–8)</option>
                <option className="text-navy">Secondary (9–10)</option>
                <option className="text-navy">Sr. Secondary (11–12)</option>
              </select>
              <button className="w-full rounded-xl bg-gradient-gold text-navy font-semibold py-3.5 shadow-gold hover:brightness-105 transition animate-pulse-glow">
                Request a Callback
              </button>
            </form>
            <div className="mt-4 flex items-center gap-2 text-white/70 text-xs">
              <ShieldCheck className="size-3.5 text-gold" /> Your details stay private. No spam.
            </div>
          </div>
        </div>
      </div>

      <ChevronDown className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 animate-bounce size-6" />
    </section>
  );
}

function Stats() {
  const items = [
    { v: "20+", l: "Years of Excellence" },
    { v: "1000+", l: "Students Enrolled" },
    { v: "60+", l: "Qualified Educators" },
    { v: "98%", l: "Board Pass Rate" },
  ];
  return (
    <section className="py-14 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((i) => (
          <div key={i.l} className="text-center bg-white rounded-2xl p-6 shadow-sm border">
            <div className="text-3xl md:text-4xl font-extrabold bg-gradient-hero bg-clip-text text-transparent">{i.v}</div>
            <div className="text-xs md:text-sm text-muted-foreground mt-1 font-medium">{i.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Why() {
  const f = [
    { icon: BookOpen, t: "Holistic Curriculum", d: "A balanced blend of academics, arts, sports & values rooted in NEP 2020." },
    { icon: Microscope, t: "Modern Labs", d: "Science, Computer & Maths labs that turn curiosity into discovery." },
    { icon: Users, t: "Mentor-style Faculty", d: "Low student-teacher ratio with personal attention for every child." },
    { icon: ShieldCheck, t: "Safe & Secure Campus", d: "CCTV monitored, GPS buses and trained female attendants." },
    { icon: Trophy, t: "Sports & Activities", d: "Yoga, dance, music, karate and inter-school competitions." },
    { icon: Award, t: "Proven Results", d: "Consistent top performers in RBSE board examinations." },
  ];
  return (
    <section id="why" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead eyebrow="Why Science Academy" title="An education parents trust, children love." />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {f.map((x) => (
            <div key={x.t} className="group relative rounded-2xl border bg-card p-7 hover:shadow-elegant transition overflow-hidden">
              <div className="absolute -right-10 -top-10 size-32 rounded-full bg-sky/10 group-hover:bg-sky/20 transition" />
              <div className="relative size-12 rounded-xl bg-gradient-sky text-white grid place-items-center shadow-glow">
                <x.icon className="size-5" />
              </div>
              <h3 className="relative mt-5 text-lg font-bold text-navy">{x.t}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tour() {
  return (
    <section id="tour" className="py-20 bg-navy text-white relative overflow-hidden">
      <div className="absolute -top-32 right-0 size-[500px] rounded-full bg-sky/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHead light eyebrow="Virtual Campus Tour" title="Step inside our world of learning." />
          <p className="mt-5 text-white/75 text-lg">
            From sunlit classrooms and well-equipped labs to vibrant playgrounds and a serene library — see why Science Academy feels like a second home.
          </p>
          <ul className="mt-6 space-y-3">
            {["Smart classrooms with digital boards", "Library with 5000+ books", "Indoor & outdoor sports facilities", "Hygienic cafeteria & purified water"].map((x) => (
              <li key={x} className="flex items-start gap-3"><CheckCircle2 className="size-5 text-gold mt-0.5" /> <span className="text-white/85">{x}</span></li>
            ))}
          </ul>
          <a href="#apply" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold text-navy font-semibold px-6 py-3 shadow-gold hover:scale-[1.03] transition">
            Schedule On-Campus Visit <ArrowRight className="size-4" />
          </a>
        </div>
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-elegant group cursor-pointer">
          <img src={slides[6].url} alt="Campus tour" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
          <button className="absolute inset-0 grid place-items-center">
            <span className="size-20 rounded-full bg-gradient-gold grid place-items-center shadow-gold group-hover:scale-110 transition">
              <Play className="size-7 text-navy ml-1" />
            </span>
          </button>
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <div className="text-xs uppercase tracking-widest text-gold">Watch · 2 min</div>
            <div className="text-xl font-bold">A day at Science Academy</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  const items = [
    { img: slides[2].url, name: "Grand Finale 2026", note: "Science Stream — 96.4%" },
    { img: slides[3].url, name: "Best Cultural Troupe 2026", note: "Inter-School Festival, Jaipur" },
    { img: slides[1].url, name: "State Dance Championship", note: "Gold Medal — Junior Group" },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead eyebrow="Student Achievements" title="Proud moments that inspire us every day." />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.name} className="group rounded-2xl overflow-hidden border bg-card hover:shadow-elegant transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={i.img} alt={i.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-gold"><Trophy className="size-4" /><span className="text-xs font-semibold uppercase tracking-wider">Achievement</span></div>
                <h3 className="mt-2 font-bold text-navy">{i.name}</h3>
                <p className="text-sm text-muted-foreground">{i.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { t: "Inquire Online", d: "Fill the quick admission form or call our helpline." },
    { t: "Campus Visit", d: "Meet our principal, tour the campus, ask anything." },
    { t: "Interaction", d: "Friendly interaction with the child & parents." },
    { t: "Confirm Seat", d: "Complete documentation & secure the admission." },
  ];
  return (
    <section id="process" className="py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead eyebrow="Admission Process" title="Simple. Transparent. Stress-free." />
        <div className="mt-12 grid md:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div key={s.t} className="relative rounded-2xl bg-card border p-6 hover:shadow-elegant transition">
              <div className="absolute -top-4 left-6 size-9 rounded-xl bg-gradient-hero text-white font-bold grid place-items-center shadow-glow">{i + 1}</div>
              <h3 className="mt-3 font-bold text-navy">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const tt = [
    { n: "Rakesh Sharma", r: "Parent of Aarav, Class V", q: "The teachers know my child personally. He has grown in confidence beyond what we ever expected." },
    { n: "Sunita Devi", r: "Parent of Mahi, Class IX", q: "Excellent academics with strong values. The cultural events and discipline are world-class." },
    { n: "Mohan Lal", r: "Parent of Teena, Class XII", q: "From results to overall personality — Science Academy has shaped my daughter beautifully." },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead eyebrow="Parent Testimonials" title="Loved by parents across Kishangarh-Renwal." />
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {tt.map((t) => (
            <div key={t.n} className="rounded-2xl bg-card border p-7 hover:shadow-elegant transition">
              <div className="flex gap-1 text-gold">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}</div>
              <p className="mt-4 text-foreground/85 leading-relaxed">"{t.q}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="size-11 rounded-full bg-gradient-hero text-white grid place-items-center font-bold">{t.n[0]}</div>
                <div>
                  <div className="font-semibold text-navy text-sm">{t.n}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadForm() {
  const [sent, setSent] = useState(false);
  return (
    <section id="apply" className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      <div className="absolute -top-32 -left-20 size-[500px] rounded-full bg-sky/30 blur-3xl" />
      <div className="absolute -bottom-32 -right-20 size-[500px] rounded-full bg-gold/20 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-white/90 text-xs font-medium mb-5">
            <GraduationCap className="size-3.5 text-gold" /> Limited Seats Available
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-balance">Secure your child's bright future today.</h2>
          <p className="mt-5 text-white/80 text-lg">Get full fee structure, prospectus and a personal counselling session — absolutely free.</p>
          <div className="mt-8 space-y-3 text-white/85">
            <div className="flex items-center gap-3"><MapPin className="size-5 text-gold shrink-0" /> Near Kisan Shiv Temple, Kishangarh-Renwal</div>
            <div className="flex items-center gap-3"><Phone className="size-5 text-gold shrink-0" /> Office: <a href="tel:9413686264" className="hover:text-gold">9413686264</a></div>
            <div className="flex items-center gap-3"><Phone className="size-5 text-gold shrink-0" /> Admissions: <a href="tel:9929366543" className="hover:text-gold">9929366543</a>, <a href="tel:9799699307" className="hover:text-gold">9799699307</a></div>
          </div>
        </div>
        <div className="glass rounded-3xl p-7 md:p-9 shadow-elegant">
          {sent ? (
            <div className="text-center py-10">
              <CheckCircle2 className="size-14 text-gold mx-auto" />
              <h3 className="mt-4 text-2xl font-bold">Thank you!</h3>
              <p className="mt-2 text-white/80">Our admission counsellor will call you very soon.</p>
            </div>
          ) : (
            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                const f = e.currentTarget as HTMLFormElement;
                const get = (n: string) =>
                  (f.elements.namedItem(n) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null)?.value || "";
                const msg = `*New Admission Application — Science Academy*\n\nParent: ${get("parent")}\nStudent: ${get("student")}\nMobile: ${get("mobile")}\nEmail: ${get("email") || "—"}\nClass: ${get("klass")}\nMessage: ${get("message") || "—"}`;
                sendToWhatsApp(msg);
                setSent(true);
              }}
            >
              <h3 className="text-2xl font-bold mb-2">Apply for Admission</h3>
              <input name="parent" required placeholder="Parent's full name" className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-gold" />
              <input name="student" required placeholder="Student's name" className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-gold" />
              <div className="grid grid-cols-2 gap-3">
                <input name="mobile" required type="tel" placeholder="Mobile" className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-gold" />
                <input name="email" type="email" placeholder="Email (optional)" className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-gold" />
              </div>
              <select name="klass" defaultValue="" className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white outline-none focus:border-gold">
                <option value="" className="text-navy">Class seeking admission</option>
                {["Nursery", "LKG", "UKG", "Class 1-5", "Class 6-8", "Class 9-10", "Class 11-12"].map((c) => (
                  <option key={c} className="text-navy">{c}</option>
                ))}
              </select>
              <textarea name="message" placeholder="Message (optional)" rows={3} className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-gold" />
              <button className="w-full rounded-xl bg-gradient-gold text-navy font-semibold py-3.5 shadow-gold hover:brightness-105 transition animate-pulse-glow">
                Submit Application
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-2xl bg-card overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
        <span className="font-semibold text-navy">{q}</span>
        <ChevronDown className={`size-5 text-sky transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{a}</div>}
    </div>
  );
}

function FAQ() {
  const faqs = [
    { q: "What is the age criteria for Nursery admission?", a: "Child must be 3+ years as on 31st March of the academic year." },
    { q: "Which curriculum do you follow?", a: "We follow the RBSE curriculum with NEP 2020 aligned pedagogy and modern teaching methods." },
    { q: "Do you provide school transport?", a: "Yes, GPS-enabled buses with female attendants cover all major routes around Kishangarh-Renwal." },
    { q: "What documents are required for admission?", a: "Birth certificate, last school TC (if any), Aadhaar of child & parents, and 4 passport photos." },
    { q: "Is there an entrance test?", a: "For classes 1 and above, there is a simple friendly interaction & basic assessment — no pressure on the child." },
  ];
  return (
    <section id="faq" className="py-20 bg-secondary">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHead eyebrow="Frequently Asked Questions" title="Everything you need to know." />
        <div className="mt-10 space-y-3">{faqs.map((f) => <FAQItem key={f.q} {...f} />)}</div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy text-white/80 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="size-12 rounded-full overflow-hidden ring-2 ring-sky/30 shadow-glow"><img src={schoolLogo.url} alt="Science Academy logo" className="w-full h-full object-cover" /></div>
            <div>
              <div className="font-display font-bold text-white">Science Academy</div>
              <div className="text-xs text-white/60">Senior Secondary School · A Quality Education Center</div>
            </div>
          </div>
          <p className="mt-4 text-sm max-w-md">Nurturing academic excellence, character and creativity since two decades — co-educational English medium school in Kishangarh-Renwal.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2"><MapPin className="size-4 text-gold shrink-0 mt-0.5" /> Near Kisan Shiv Temple, Kishangarh-Renwal</li>
            <li className="flex gap-2"><Phone className="size-4 text-gold shrink-0 mt-0.5" /> Office: 9413686264</li>
            <li className="flex gap-2"><Phone className="size-4 text-gold shrink-0 mt-0.5" /> Admissions: 9929366543, 9799699307</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#why" className="hover:text-gold">Why Us</a></li>
            <li><a href="#tour" className="hover:text-gold">Virtual Tour</a></li>
            <li><a href="#process" className="hover:text-gold">Admission Process</a></li>
            <li><a href="#apply" className="hover:text-gold">Apply Now</a></li>
            <li><a href="#faq" className="hover:text-gold">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50 px-6 max-w-7xl mx-auto">
        <div>© {new Date().getFullYear()} Science Academy Senior Secondary School. All rights reserved.</div>
        <div className="flex items-center gap-1.5">
          Managed by{" "}
          <a
            href="https://www.instagram.com/creoclique"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold bg-gradient-to-r from-sky via-white to-gold bg-clip-text text-transparent hover:opacity-90 animate-shine"
          >
            CreocliQue
          </a>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/919929366543?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20admission%20at%20Science%20Academy."
      target="_blank" rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40" />
      <span className="relative flex items-center gap-2 bg-green-500 text-white pl-3 pr-4 py-3 rounded-full shadow-elegant hover:scale-105 transition">
        <MessageCircle className="size-5" />
        <span className="text-sm font-semibold hidden md:inline">Chat on WhatsApp</span>
      </span>
    </a>
  );
}

function SectionHead({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <div className="max-w-2xl">
      <div className={`text-xs font-bold tracking-[0.2em] uppercase ${light ? "text-gold" : "text-sky"}`}>{eyebrow}</div>
      <h2 className={`mt-3 text-3xl md:text-5xl font-extrabold text-balance ${light ? "text-white" : "text-navy"}`}>{title}</h2>
    </div>
  );
}
