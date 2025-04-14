export interface NavigationType {
  id: string;
  label: string;
  links?: {
    id: string;
    label: string;
  }[];
}

export interface SocialType {
  name: string;
  icon: { b: string; w: string };
}

export interface CarType {
  id: number;
  name: string;
  image: string;
  background: string;
  title: string;
  text: string;
  information: string;
}
