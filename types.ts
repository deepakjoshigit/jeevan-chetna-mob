export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface DonationAmount {
  value: number;
  label: string;
  desc: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category?: string;
}

export enum PaymentStatus {
  IDLE = 'IDLE',
  PROCESSING = 'PROCESSING',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE'
}