export const states = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espirito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso do Sul",
  "Mato Grosso",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];

export const products = [
  {
    id: 1,
    title: "Carinho de bebê",
    price: 530.0,
    image: "https://imagem/320x240",
    sold: true,
    questions: { quantity: 9, noAnswer: 5 },
  },
  {
    id: 2,
    title: "Pijaminha",
    price: 45.0,
    image: "https://imagem/320x240",
    sold: false,
    questions: { quantity: 0, noAnswer: 0 },
  },
  {
    id: 3,
    title: "Brinquedo para criança muito legal",
    price: 30.0,
    image: "https://imagem/320x240",
    sold: false,
    questions: { quantity: 6, noAnswer: 0 },
  },
  {
    id: 4,
    title: "Carinho de bebê",
    price: 840.0,
    image: "https://imagem/320x240",
    sold: false,
    questions: { quantity: 7, noAnswer: 1 },
  },
  {
    id: 5,
    title: "Sandália",
    price: 27.0,
    image: "https://imagem/320x240",
    sold: true,
    questions: { quantity: 0, noAnswer: 0 },
  },
  {
    id: 6,
    title: "Body tam P",
    price: 35.0,
    image: "https://imagem/320x240",
    sold: false,
    questions: { quantity: 5, noAnswer: 0 },
  },
];

export const user = {
  id: 5555,
  cpf: "12345678900",
  username: "marlene.ford",
  email: "marlene.ford@mail.com",
  name: "Marlene Ford",
  phone: "(61) 99999-9999",
  product: "api/products/by_parent/5555", //Alterar response api para "products"
  image: "http...", //Incluir campo na api
  city: "São Paulo", //Incluir informação no response da api.
  state: "São Paulo", //Incluir informação no response da api.
};
