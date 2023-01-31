import AdvantagesSection from "../components/PublicComponents/Sections/AdvantagesSection";
import AppSection from "../components/PublicComponents/Sections/AppSection";
import CertificateSection from "../components/PublicComponents/Sections/CertificateSection";
import PencilSection from "../components/PublicComponents/Sections/PencilSection";
import PopularSection from "../components/PublicComponents/Sections/PopularSection";
import PrepareSection from "../components/PublicComponents/Sections/PrepareSection";
import StudentsSection from "../components/PublicComponents/Sections/StudentsSection";
import TopSection from "../components/PublicComponents/Sections/TopSection";
import WhySection from "../components/PublicComponents/Sections/WhySection";

const HomePage = () => {
  return (
    <>
      <TopSection />
      <PopularSection />
      <WhySection />
      <CertificateSection />
      <AdvantagesSection />
      <PrepareSection />
      <StudentsSection />
      <AppSection />
      <PencilSection />
    </>
  );
};

export default HomePage;
