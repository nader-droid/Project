export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface LeadFormData {
  address: string;
  propertyType: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
}

export enum ViewMode {
  CLIENT = 'CLIENT',
  PITCH = 'PITCH'
}