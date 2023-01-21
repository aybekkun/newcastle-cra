import Slider from "../components/PublicComponents/SliderSlick";
import PopularSection from "../components/PublicComponents/Sections/PopularSection";
import WhySection from "../components/PublicComponents/Sections/WhySection";
import TopSection from "../components/PublicComponents/Sections/TopSection";
import AdvantagesSection from "../components/PublicComponents/Sections/AdvantagesSection";
import AppSection from "../components/PublicComponents/Sections/AppSection";
import PencilSection from "../components/PublicComponents/Sections/PencilSection";
import StudentsSection from "../components/PublicComponents/Sections/StudentsSection";
import PrepareSection from "../components/PublicComponents/Sections/PrepareSection";
import CertificateSection from "../components/PublicComponents/Sections/CertificateSection";

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
