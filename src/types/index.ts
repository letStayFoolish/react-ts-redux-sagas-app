export type UserState = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type RootState = {
  users: Array<UserState>;
};
