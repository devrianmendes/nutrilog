import { Decimal } from "@prisma/client/runtime/library";

export type ChildrenProps = {
  children: React.ReactNode;
};

export type CreateUsersProps = {
  email: string;
  completeName: string;
  password: string;
};

export type LoginUserProps = {
  email: string;
  password: string;
};

export type UserProps = {
  id: string;
  email: string;
  completeName: string;
  password: string;
  banner?: string;
  role: string;
};

export type UserSessionProps = {
  id: string;
  email: string;
  completeName: string;
  banner?: string | null;
  role: string;
};

export type UserFormatterProps = {
  completeName: string;
  password: string;
  confirmPassword: string;
  gender: string;
  birth: string;
  goal: string;
  activity: string;
  weight: string | number;
  height: string | number;
  userState: string;
  userCity: string;
  terms: boolean;
};

export type UserDataProps = {
  id: string;
  email: string;
  completeName: string;
  // password: string;
  // confirmPassword: string;
  gender: string;
  birth: string | Date;
  goal: string;
  activityLevel: string;
  weight: number | Decimal;
  height: number | Decimal;
  state: string;
  city: string;
  role: string;
};


