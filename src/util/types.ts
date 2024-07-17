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
}

export type ChildrenProps = {
  children: React.ReactNode;
};
