export interface Project {
  id: string;
  titulo: string;
  descricao: string;
  tecnologias: string[];
  imagemUrl?: string;
  linkProjeto?: string;
  destaque?: boolean;
}
