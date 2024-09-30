import React from "react";


function Product(){
    // const products = ["Asus", "Acer", "Lenovo"];
    const products = [
        {id : "AS001", nama : "ROG", harga : "15.499.000", deskripsi: "High End Performance of Asus", urlFoto: require("./rog.jpg")},
        {id : "L002", nama : "Legion", harga : "11.250.000", deskripsi: "High End Performance of Lenovo", urlFoto: require("./legion.jpg")},
        {id : "A003", nama : "Predator", harga : "15.000.000", deskripsi: "High End Performance of Acer", urlFoto: require("./predator.png")}
    ]
    // const displayProducts = products.map((product) => (
    //     <div key={product}>{product}</div>   
    // ));
    // return <div>{displayProducts}</div>;

    return (
        <table border="1" width="75%">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Deskripsi</th>
                    <th>Foto</th>
                </tr>
            </thead>
            <tbody>
                {products.length > 0 && products.map((product) => {
                    return (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.nama}</td>
                        <td>{product.harga}</td>
                        <td>{product.deskripsi}</td>
                        <td><img src={product.urlFoto} width="100"/></td>
                    </tr>
                    );
                })}
            </tbody>
        </table>
    )

}

export default Product;