let categoria = "eletronicos";
let subcategoria = "tv";

switch (categoria) {
  case "eletronicos":
    switch (subcategoria) {
      case "celular":
        console.log("Produto: Celular");
        break;

      case "notebook":
        console.log("Produto: Notebook");
        break;

      case "tv":
        console.log("Produto: Televisão");
        break;

      default:
        console.log("Subcategoria de eletrônicos inválida");
    }
    break;

  case "roupas":
    switch (subcategoria) {
      case "camisa":
        console.log("Produto: Camisa");
        break;

      case "calca":
        console.log("Produto: Calça");
        break;

      default:
        console.log("Subcategoria de roupas inválida");
    }
    break;

  default:
    console.log("Categoria inválida");
}