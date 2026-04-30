export interface Project {
  id: string;
  titulo: string;
  descricao: string;
  tecnologias: string[];
  categoria?: string;
  imagemUrl?: string;
  linkProjeto?: string;
  destaque?: boolean;
  cor?: string;
}
