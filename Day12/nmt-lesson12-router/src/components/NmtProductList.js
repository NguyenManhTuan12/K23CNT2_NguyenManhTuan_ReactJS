import React from 'react'

const NmtProductList = ({ products }) => {
    return (
        <div>
            <h1>Danh sách sản phẩm</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Mã sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Đơn giá</th>
                        <th>Số lượng</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.NmtID}>
                            <td>{product.NmtID}</td>
                            <td>{product.NmtName}</td>
                            <td>{product.NmtPrice} VND</td>
                            <td>{product.NmtQuantity} cái</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default NmtProductList
