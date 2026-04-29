import { Project } from '@/core/domain/Project';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

export async function fetchProjects(): Promise<Project[]> {
  const response = await fetch(`${API_BASE_URL}/projects`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Falha ao buscar projetos: ${response.statusText}`);
  }

  return response.json() as Promise<Project[]>;
}

export async function fetchProjectById(id: string): Promise<Project> {
  const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Projeto ${id} não encontrado: ${response.statusText}`);
  }

  return response.json() as Promise<Project>;
}
