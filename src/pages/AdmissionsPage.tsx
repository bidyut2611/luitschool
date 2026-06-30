import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';

const steps = [
  { num: 1, title: 'Start your enrollment', desc: 'Enroll online and verify your mobile number by OTP. The admission fee is ₹1,000. Your progress is saved as you go.' },
  { num: 2, title: 'Share your story', desc: 'Tell us about yourself, your background and what you want to build, plus a few documents.' },
  { num: 3, title: 'Interview', desc: 'Shortlisted candidates book an interview slot at a time that suits them and meet our panel.' },
  { num: 4, title: 'Get your offer', desc: 'Receive your decision by email, accept your seat and join the cohort.' },
];

const requirements = [
  'A valid mobile number (verified by OTP) and email address',
  'Class 10 and 12 marksheets, plus degree marksheets if you have them',
  'A government photo ID (Aadhaar, passport or voter ID)',
  'A short note on what you want to build',
];

export default function AdmissionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-glass-strong section-pad pt-32 md:pt-40 text-center shimmer">
        <div className="container-page">
          <span className="tag mx-auto reveal">Admissions</span>
          <h1 className="display-hero mx-auto mt-7 max-w-4xl font-bold text-white reveal">A simple path from idea to enrolment.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/55 reveal">
            Admissions are open for the next batch. You enroll online, the process is simple
            and fast, and the admission fee is ₹1,000. We look for ambition, not for marks.
          </p>
          <Link to="/apply" className="liquid-glass rounded-full px-7 py-3 text-sm font-semibold text-white bg-brand-400/20 hover:bg-brand-400/30 transition-all duration-300 inline-flex items-center gap-2 mt-8 reveal">Start your enrollment</Link>
        </div>
      </section>

      {/* Steps */}
      <section className="section-glass section-pad depth-grid">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.num} className={`reveal reveal-delay-${i + 1} card card-hover flex flex-col p-7`}>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-400 font-display text-base font-bold text-white">{step.num}</span>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-[0.93rem] leading-relaxed text-white/50">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements + Programs */}
      <section className="border-y border-white/[0.06] section-glass-strong section-pad shimmer">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <div className="reveal card p-8 md:p-10">
            <h2 className="font-display text-3xl font-bold text-white">What you'll need</h2>
            <ul className="mt-7 space-y-4">
              {requirements.map((req) => (
                <li key={req} className="flex gap-3 text-white/55">
                  <CheckCircle size={22} className="mt-0.5 shrink-0 text-brand-300" strokeWidth={2.2} />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal card p-8 md:p-10">
            <h2 className="font-display text-3xl font-bold text-white">Enroll in a program</h2>
            <ul className="mt-6 divide-y divide-white/[0.06]">
              <li>
                <Link to="/programs" className="group flex items-center justify-between gap-4 py-4">
                  <span>
                    <span className="block font-semibold text-white transition-colors group-hover:text-brand-300">The Founder Program</span>
                    <span className="text-sm text-white/50">6 weeks, full days</span>
                  </span>
                  <ArrowRight size={18} className="shrink-0 text-brand-300 transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
