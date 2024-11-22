export type User = {
  name: string;
  email: string;
  age: number;
  gender: string;
};

export const initialUserState = {
  name: "",
  email: "",
  age: 0,
  gender: "Male",
};

export type EntryData = User[];

export const initialEntryData = [
  {
    name: "Mridul",
    email: "diffsyntax@gmail.com",
    age: 26,
    gender: "Male",
  },
];
