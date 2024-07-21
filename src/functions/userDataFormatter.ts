type UserFormatterProps = {
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

export default function UserDataFormatter(user: UserFormatterProps) {
  user.birth = new Date(user.birth!).toISOString();
  user.height = +user.height! / 100;
  user.weight = +user.weight!;

  return user;
}
