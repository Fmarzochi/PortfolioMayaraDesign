export interface CaseStudy {
  problema: {
    usuario: string;
    negocio: string;
  };
  solucao: {
    estrategiaMarca: string;
  };
  processo: {
    descricao?: string;
    etapas: string[];
  };
  conclusao: {
    insight: string;
    designInterface?: string;
    designInterfacePrioridades?: string[];
    learnings: string[];
  };
}

export interface Project {
  id: string;
  slug: string;
  titulo: string;
  descricao: string;
  tecnologias: string[];
  categoria?: string;
  imagemUrl?: string;
  linkProjeto?: string;
  destaque?: boolean;
  cor?: string;
  cliente?: string;
  meuPapel?: string;
  servicos?: string;
  tipo?: string;
  case?: CaseStudy;
}
