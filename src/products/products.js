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
        <table className={`table table-striped table-bordered table-dark rounded shadow-sm ${Styles.productTable}`}>
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
                        <td className={Styles.text}>{product.id}</td>
                        <td className={Styles.text}>{product.name}</td>
                        <td className={Styles.text}>{product.description}</td>
                        <td className={Styles.text}>{product.price}</td> 
                        <td className={Styles.text}><Button className={Styles.removeBtt} onClick={() => handleRemover(product.id)} variant="info">Remover</Button></td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
  )
}

export default Products;