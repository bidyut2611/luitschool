import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <>
      <section className="container-page grid gap-12 pb-24 pt-32 md:pt-40 lg:grid-cols-2">
        <div>
          <span className="tag reveal">Contact</span>
          <h1 className="display-hero mt-7 font-bold text-white reveal">Let's talk.</h1>
          <p className="mt-6 max-w-md text-lg text-white/55 reveal">
            Questions about the program, admissions or visiting campus? Reach out and our team
            responds quickly.
          </p>
          <dl className="mt-12 space-y-6">
            <div className="reveal card flex items-center justify-between gap-4 p-5">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-white/50">Admissions email</dt>
                <dd className="mt-1">
                  <a href="mailto:hello@luitschool.com" className="text-lg font-semibold text-brand-400 hover:underline">hello@luitschool.com</a>
                </dd>
              </div>
            </div>
            <div className="reveal card flex items-center justify-between gap-4 p-5">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-white/50">Phone and WhatsApp</dt>
                <dd className="mt-1">
                  <a href="https://wa.me/917086199464" className="text-lg font-semibold text-brand-400 hover:underline">+91 70861 99464</a>
                </dd>
              </div>
            </div>
            <div className="reveal card flex items-center justify-between gap-4 p-5">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-white/50">Campus</dt>
                <dd className="mt-1 text-lg font-semibold text-white">Luit School of Business, 1st Floor, Asian Place Complex, near Bora Service, Guwahati, Assam 781007</dd>
              </div>
            </div>
          </dl>
        </div>

        <div className="reveal card p-8 md:p-10 section-glass-strong">
          <h2 className="font-display text-2xl font-bold text-white">Send an enquiry</h2>
          <form className="mt-7 space-y-5" aria-label="Enquiry form" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="font-medium text-white">Full name</span>
                <input type="text" name="name" required className="mt-2 w-full rounded-xl border border-white/10 bg-surface/50 px-4 py-3 text-white outline-none transition-colors focus:border-brand-500 backdrop-blur-sm" />
              </label>
              <label className="block text-sm">
                <span className="font-medium text-white">Mobile number</span>
                <input type="tel" name="phone" required className="mt-2 w-full rounded-xl border border-white/10 bg-surface/50 px-4 py-3 text-white outline-none transition-colors focus:border-brand-500 backdrop-blur-sm" />
              </label>
            </div>
            <label className="block text-sm">
              <span className="font-medium text-white">Email</span>
              <input type="email" name="email" required className="mt-2 w-full rounded-xl border border-white/10 bg-surface/50 px-4 py-3 text-white outline-none transition-colors focus:border-brand-500 backdrop-blur-sm" />
            </label>
            <label className="block text-sm">
              <span className="font-medium text-white">What do you want to build?</span>
              <textarea name="message" rows={4} className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-surface/50 px-4 py-3 text-white outline-none transition-colors focus:border-brand-500 backdrop-blur-sm"></textarea>
            </label>
            <button type="submit" className="liquid-glass w-full rounded-xl px-7 py-3 text-sm font-semibold text-white bg-brand-400/20 hover:bg-brand-400/30 transition-all duration-300">
              Send enquiry
            </button>
            <p className="text-xs text-white/40 text-center">This opens your email app with the message ready to send. Prefer chat? Message us on WhatsApp.</p>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
