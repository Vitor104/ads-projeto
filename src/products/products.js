import React, {useState} from "react";
import Styles from "./products.module.css";
import { productsList } from "./productsList";
//import computer from "./imagens/computer.jpg";


function Products() {

  const [products, setProducts] = useState(productsList);
  const handleRemover = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  } 


  return (
    <div className={Styles.container}>
        <h1 className={Styles.title}>Produtos Disponíveis</h1>
        
        <table className={Styles.productsTable}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Imagem</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Preço (R$)</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody> 
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td><img className={Styles.productImage} src={product.image} alt={product.name} /></td> 
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.price.toFixed(2)}</td> 
                        <td><button className={Styles.removeButton} onClick={() => handleRemover(product.id)}>Remover</button></td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
  )
}

export default Products;