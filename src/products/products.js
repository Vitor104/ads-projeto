import React, {useState} from "react";
import Styles from "./products.module.css";
import { productsList } from "./productsList";
import Button from 'react-bootstrap/Button';


function Products() {

  const [products, setProducts] = useState(productsList);
  const handleRemover = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  } 


  return (
    <div className={Styles.container}>
        <h1 className={Styles.title}>Produtos Disponíveis</h1>
        <table className={Styles.productTable} class="table table-striped table-bordered table-dark rounded shadow-sm">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Preço (R$)</th>
                    <th></th>
                </tr>
            </thead>
            <tbody> 
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.price.toFixed(2)}</td> 
                        <td><Button className={Styles.removeBtt} onClick={() => handleRemover(product.id)} variant="info">Remover</Button></td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
  )
}

export default Products;