class Product {
    constructor(name, price, quantity, description) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
      this.description = description;
    }
  
    static products = [
      new Product("TV", 50000, 10, "High definition TV"),
      new Product("Smartphone", 35000, 20, "Latest smartphone model"),
      new Product("Laptop", 60000, 15, "High performance laptop"),
      new Product("Tablet", 25000, 8, "Portable tablet device"),
      new Product("Headphones", 8000, 25, "Noise cancelling headphones"),
      new Product("Camera", 45000, 5, "Professional camera for photography"),
      new Product("Printer", 15000, 12, "High quality printer"),
      new Product("Projector", 80000, 3, "High definition projector"),
      new Product("Monitor", 35000, 7, "High resolution computer monitor"),
      new Product("Keyboard", 3000, 30, "Wired computer keyboard"),
    ];
  
    static search(query) {
      const operators = ["<", "=", ">", "<=", ">="];
      operators.forEach((operator) => {
        const index = query.indexOf(operator);
        if (index !== -1) {
          query = query.slice(0, index + operator.length) + "-" + query.slice(index + operator.length);
        }
      });
  
      const filters = query.split("&");
  
      return Product.products.filter((product) => {
        let include = true;
  
        filters.forEach((filter) => {
          const [property, operator, ...value] = filter.split("-");
          const productValue = String(product[property]).toLowerCase();
          const filterValue = value.join("").toLowerCase();
  
          switch (operator) {
            case "contains":
              include = include && productValue.includes(filterValue);
              break;
            case "starts":
              include = include && productValue.startsWith(filterValue);
              break;
            case "ends":
              include = include && productValue.endsWith(filterValue);
              break;
            case ">":
              include = include && product[property] > Number(filterValue);
              break;
            case ">=":
              include = include && product[property] >= Number(filterValue);
              break;
            case "<":
              include = include && product[property] < Number(filterValue);
              break;
            case "<=":
              include = include && product[property] <= Number(filterValue);
              break;
            case "=":
              include = include && productValue === filterValue;
              break;
            default:
              break;
          }
        });
  
        return include;
      });
    }
  }
  
  console.log(Product.search("name-contains-p&price->3000&quantity->=1"));
  