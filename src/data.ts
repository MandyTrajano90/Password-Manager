export type InputType = {
  name:string,
  login:string,
  senha:string,
  url:string,
  id?: number,
};

export const objInput: InputType = {
  name: '',
  login: '',
  senha: '',
  url: '',
};

export function verifyInputs(param: InputType): boolean {
  const { name, login, senha } = param;
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,16}$/;

  const verifyName = /^\w/g.test(name);
  const verifyLogin = /^\w/g.test(login);
  const verifyPassword = regex.test(senha);
  const Infos = [verifyName, verifyLogin, verifyPassword];
  const verifyInfos = Infos
    .every((info) => info === true);
  return verifyInfos;
}
