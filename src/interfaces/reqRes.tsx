// Generated by https://quicktype.io
export interface ReqResListado {
  page:        number;
  per_page:    number;
  total:       number;
  total_pages: number;
  data:        Usuario[];
  support:     Soporte;
}

export interface Usuario {
  id:         number;
  email:      string;
  first_name: string;
  last_name:  string;
  avatar:     string;
}

export interface Soporte {
  url:  string;
  text: string;
}