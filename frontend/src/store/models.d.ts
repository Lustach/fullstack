interface Profile {
  username: string;
  bio?: string;
  image?: null;
}
interface User {
  email:string;
  token: string;
  username: string;
  image?: null;
}
interface UserSubmit {
  email:string;
  password:string;
}

export {Profile,User,UserSubmit}
