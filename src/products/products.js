import React, {useState} from "react";
import Styles from "./products.module.css";
import { productsList } from "./productsList";
import Button from 'react-bootstrap/Button';
import { useLocation } from "react-router-dom";


import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';


function Products() {

  const [products, setProducts] = useState(productsList);
  const [open, setOpen] = useState(false);
  const handleRemover = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  } 

  let location = useLocation();
  let nome = location.state?.user;



  return (
    <div className={Styles.container}>
        <nav className={Styles.navbar}> 
            <h1 className={Styles.navText}>ADS - PROJETO</h1>
        </nav>
        <p className={Styles.title}>Olá, {nome}!</p>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className={Styles.button}
      >
        Ver produtos disponíveis
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
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
        </Collapse>
      </div>





    {/*


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
*/}
    </div>
  )
}

export default Products;