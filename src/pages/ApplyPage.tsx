import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import Footer from '../components/Footer';

export default function ApplyPage() {
  const [step, setStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => setStep((s) => Math.min(2, s + 1));
  const handleBack = () => setStep((s) => Math.max(0, s - 1));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <section className="container-page py-32 md:py-40">
          <div className="card max-w-2xl mx-auto p-9 text-center section-glass-strong">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-400 text-white">
              <Check size={28} strokeWidth={2.4} />
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold text-white">Enrollment received.</h2>
            <p className="mx-auto mt-3 max-w-md text-white/55">Thank you. A confirmation is on its way to your email, and our team will be in touch about the next step.</p>
            <Link to="/" className="liquid-glass inline-flex rounded-full px-7 py-3 text-sm font-semibold text-white bg-brand-400/20 hover:bg-brand-400/30 transition-all duration-300 mt-7">Back to home</Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <section className="container-page py-32 md:py-40 relative z-10">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <span className="tag mx-auto reveal">Admissions open</span>
            <h1 className="display-hero mt-6 font-bold text-white reveal">Enroll in the Founder Program.</h1>
            <p className="mt-4 text-white/55 reveal">Takes about five minutes. Your progress is saved on this device as you go.</p>
          </div>

          {/* Progress */}
          <ol className="mt-10 grid grid-cols-3 gap-2" aria-hidden="true">
            {['Your details', 'Background', 'Review'].map((label, i) => (
              <li key={label} className="flex flex-col gap-2">
                <span className={`h-1 rounded-full transition-colors ${i <= step ? 'bg-brand-400' : 'bg-white/10'}`}></span>
                <span className={`text-[0.7rem] font-semibold uppercase tracking-[0.08em] ${i <= step ? 'text-white' : 'text-white/40'}`}>{label}</span>
              </li>
            ))}
          </ol>

          <form className="card mt-8 p-6 md:p-9 section-glass-strong" onSubmit={handleSubmit}>
            {step === 0 && (
              <fieldset className="step">
                <legend className="font-display text-xl font-bold text-white">Your details</legend>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm sm:col-span-2">
                    <span className="font-medium text-white">Full name</span>
                    <input className="mt-2 w-full rounded-xl border border-white/10 bg-surface/50 px-4 py-3 text-white outline-none transition-colors focus:border-brand-400 placeholder:text-white/40" required />
                  </label>
                  <label className="block text-sm">
                    <span className="font-medium text-white">Email</span>
                    <input type="email" className="mt-2 w-full rounded-xl border border-white/10 bg-surface/50 px-4 py-3 text-white outline-none transition-colors focus:border-brand-400 placeholder:text-white/40" required />
                  </label>
                  <label className="block text-sm">
                    <span className="font-medium text-white">Mobile number</span>
                    <span className="mt-2 flex items-stretch">
                      <span className="inline-flex items-center rounded-l-xl border border-r-0 border-white/10 bg-surface/50 px-3 text-white/50">+91</span>
                      <input type="tel" className="w-full rounded-r-xl border border-white/10 bg-surface/50 px-4 py-3 text-white outline-none transition-colors focus:border-brand-400" required placeholder="10 digit number" />
                    </span>
                  </label>
                  <label className="block text-sm">
                    <span className="font-medium text-white">Date of birth</span>
                    <input type="date" className="mt-2 w-full rounded-xl border border-white/10 bg-surface/50 px-4 py-3 text-white outline-none transition-colors focus:border-brand-400 placeholder:text-white/40" required />
                  </label>
                  <label className="block text-sm">
                    <span className="font-medium text-white">Gender</span>
                    <select className="mt-2 w-full rounded-xl border border-white/10 bg-surface/50 px-4 py-3 text-white outline-none transition-colors focus:border-brand-400 placeholder:text-white/40" required>
                      <option value="" disabled>Select</option>
                      <option>Female</option>
                      <option>Male</option>
                    </select>
                  </label>
                  <label className="block text-sm">
                    <span className="font-medium text-white">City</span>
                    <input className="mt-2 w-full rounded-xl border border-white/10 bg-surface/50 px-4 py-3 text-white outline-none transition-colors focus:border-brand-400 placeholder:text-white/40" required />
                  </label>
                  <label className="block text-sm">
                    <span className="font-medium text-white">State</span>
                    <input className="mt-2 w-full rounded-xl border border-white/10 bg-surface/50 px-4 py-3 text-white outline-none transition-colors focus:border-brand-400 placeholder:text-white/40" required />
                  </label>
                </div>
              </fieldset>
            )}

            {step === 1 && (
              <fieldset className="step">
                <legend className="font-display text-xl font-bold text-white">Background and ambition</legend>
                <div className="mt-6 grid gap-5">
                  <label className="block text-sm">
                    <span className="font-medium text-white">Highest qualification</span>
                    <select className="mt-2 w-full rounded-xl border border-white/10 bg-surface/50 px-4 py-3 text-white outline-none transition-colors focus:border-brand-400 placeholder:text-white/40" required>
                      <option value="" disabled>Select</option>
                      <option>Class 12</option>
                      <option>Diploma</option>
                      <option>Bachelor’s degree</option>
                      <option>Master’s degree</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label className="block text-sm">
                    <span className="font-medium text-white">What do you want to build?</span>
                    <textarea className="mt-2 w-full rounded-xl border border-white/10 bg-surface/50 px-4 py-3 text-white outline-none transition-colors focus:border-brand-400 placeholder:text-white/40" rows={4} required placeholder="An idea, a company, a problem you care about. A few sentences is plenty."></textarea>
                  </label>
                  <label className="block text-sm">
                    <span className="font-medium text-white">How did you hear about Luit?</span>
                    <input className="mt-2 w-full rounded-xl border border-white/10 bg-surface/50 px-4 py-3 text-white outline-none transition-colors focus:border-brand-400 placeholder:text-white/40" placeholder="Optional" />
                  </label>
                </div>
              </fieldset>
            )}

            {step === 2 && (
              <fieldset className="step">
                <legend className="font-display text-xl font-bold text-white">Review and submit</legend>
                <dl className="mt-6 divide-y divide-white/10 rounded-xl border border-white/10 p-4">
                  <p className="text-white/50 text-sm text-center py-4">Please review your details before submitting.</p>
                </dl>
                <label className="mt-6 flex items-start gap-3 text-sm text-white/50">
                  <input type="checkbox" required className="mt-1 h-4 w-4 accent-brand-400" />
                  <span>I confirm the information above is correct and agree to be contacted about my enrollment.</span>
                </label>
              </fieldset>
            )}

            {/* NAV */}
            <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
              <button
                type="button"
                onClick={handleBack}
                className={`btn btn-ghost ${step === 0 ? 'invisible' : ''} text-white/70 hover:text-white`}
              >
                Back
              </button>
              
              {step < 2 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="liquid-glass rounded-full px-7 py-3 text-sm font-semibold text-white bg-brand-400/20 hover:bg-brand-400/30 transition-all duration-300"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  className="liquid-glass rounded-full px-7 py-3 text-sm font-semibold text-white bg-brand-400 hover:bg-brand-500 transition-all duration-300"
                >
                  Submit enrollment
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
