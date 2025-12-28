import Hero from "@/components/sections/hero-section"
import StatsSection from "@/components/sections/stats-section"
import MailingList from '../components/MailingList/index.jsx'

export default function Home() {
  return (      
    <main>
      <Hero />
      <StatsSection />
      <MailingList />
    </main>
  );
}
