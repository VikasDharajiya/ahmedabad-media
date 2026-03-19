export type Role = 'Admin' | 'User' | 'Owner' | 'Editor';

export interface TeamMember {
  id: number;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  role: Role;
}

// export interface TeamForm {
//   userName: string;
//   email: string;
//   contactNumber: string;
//   birthDate?: string;
//   role: Role;
//   password: string;
//   address?: string;
//   country: string;
//   state: string;
//   city: string;
//   zipCode?: string;
//   description?: string;
// }
