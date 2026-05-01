import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MockProjectRepository } from '@/data/repositories/MockProjectRepository';
import { CaseContent } from '@/features/projects/CaseContent';

const repo = new MockProjectRepository();

export async function generateStaticParams() {
  const projects = await repo.findAll();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await repo.findBySlug(slug);
  if (!project) return { title: 'Projeto não encontrado' };
  return {
    title: `${project.titulo} — Case Study`,
    description: project.descricao,
  };
}

export default async function ProjetoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [project, allProjects] = await Promise.all([
    repo.findBySlug(slug),
    repo.findAll(),
  ]);

  if (!project) notFound();

  const related = allProjects
    .filter((p) => p.id !== project.id && p.destaque)
    .slice(0, 3);

  return <CaseContent project={project} relatedProjects={related} />;
}
