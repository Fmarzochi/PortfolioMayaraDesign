import { MockProjectRepository } from '@/data/repositories/MockProjectRepository';
import { GetProjectsUseCase } from '@/core/useCases/GetProjectsUseCase';
import { HeroSection } from '@/features/home/HeroSection';
import { ValuePropsSection } from '@/features/home/ValuePropsSection';
import { FeaturedProjects } from '@/features/home/FeaturedProjects';
import { AboutSection } from '@/features/home/AboutSection';
import { ExperienceSection } from '@/features/home/ExperienceSection';
import { FAQSection } from '@/features/home/FAQSection';
import { CTASection } from '@/features/home/CTASection';

export default async function HomePage() {
  const repository = new MockProjectRepository();
  const getProjects = new GetProjectsUseCase(repository);
  const projects = await getProjects.execute();

  return (
    <>
      <HeroSection />
      <ValuePropsSection />
      <FeaturedProjects projects={projects} />
      <AboutSection />
      <ExperienceSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
