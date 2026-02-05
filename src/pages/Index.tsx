import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { CoursesSection } from "@/components/home/CoursesSection";
import { FreeMiniCourses } from "@/components/home/FreeMiniCourses";
import { RewardsSection } from "@/components/home/RewardsSection";
import { ExamSection } from "@/components/home/ExamSection";
import { NewsSection } from "@/components/home/NewsSection";
import { ContactSection } from "@/components/home/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CoursesSection />
        <FreeMiniCourses />
        <RewardsSection />
        <ExamSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
