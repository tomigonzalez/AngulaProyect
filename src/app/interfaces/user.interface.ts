export default interface User {
  id?: string;
  usuario: string;
  email: string;
  password: string;
  rol: any;
}

export default interface Cocktail {
  id?: string;
  nombre: string;
  descripcion: string;
  ingredientes: string;
  preparacion: string;
  img: string;
}
