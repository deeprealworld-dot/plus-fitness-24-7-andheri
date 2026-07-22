import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Membership } from "@/components/membership"
import { Trainers } from "@/components/trainers"
import { Testimonials } from "@/components/testimonials"
import { Gallery } from "@/components/gallery"
import { Faq } from "@/components/faq"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"
import { MessageCircle, Phone } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Membership />
        <Trainers />
        <Testimonials />
        <Gallery />
        <Faq />
        <Contact />
        <section className="border-y border-border bg-card/40 py-20" aria-labelledby="location-heading">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Visit the club</span>
              <h2 id="location-heading" className="mt-3 font-heading text-4xl font-bold uppercase sm:text-5xl">Right where Andheri trains</h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">12A, Chandak Unicorn, Dattaji Salve Marg, Off Veera Desai Road, Jeevan Nagar, Andheri West, Mumbai 400053.</p>
              <a className="mt-6 inline-flex rounded bg-primary px-6 py-3 font-heading font-bold uppercase text-primary-foreground" href="https://www.google.com/maps/search/?api=1&query=Plus+Fitness+24%2F7+Andheri" target="_blank" rel="noreferrer">Get directions</a>
            </div>
            <iframe className="h-96 w-full rounded-xl border border-border" title="Map showing Plus Fitness 24/7 Andheri" src="https://www.google.com/maps?q=Plus+Fitness+24%2F7+Andheri&output=embed" loading="lazy" />
          </div>
        </section>
      </main>
      <SiteFooter />
      <div className="fixed bottom-5 right-5 z-50 flex gap-2">
        <a className="flex size-12 items-center justify-center rounded-full bg-green-500 text-white shadow-xl" href="https://wa.me/919082092919?text=Hi%20Plus%20Fitness%20Andheri%2C%20I%27d%20like%20to%20know%20about%20membership." target="_blank" rel="noreferrer" aria-label="Chat with Plus Fitness Andheri on WhatsApp"><MessageCircle className="size-5" /></a>
        <a className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl" href="tel:+919082092919" aria-label="Call Plus Fitness Andheri"><Phone className="size-5" /></a>
      </div>
    </div>
  )
}
