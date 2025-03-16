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
