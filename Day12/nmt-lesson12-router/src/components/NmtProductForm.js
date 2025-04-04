import React, { useState } from 'react'

const NmtProductForm = ({ onAddProduct }) => {
    const [NmtID, setNmtID] = useState('')
    const [NmtName, setNmtName] = useState('') 
    const [NmtPrice, setNmtPrice] = useState('')
    const [NmtQuantity, setNmtQuantity] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const newProduct = { NmtID, NmtName, NmtPrice: parseFloat(NmtPrice), NmtQuantity: parseInt(NmtQuantity) }
        onAddProduct(newProduct)
    }

    return (
        <div>
            <h1>Thêm sản phẩm</h1>
            <form onSubmit={handleSubmit}>
                <p>Mã sản phẩm: </p>
                <input type="text" value={NmtID} onChange={(e) => setNmtID(e.target.value)} />
                <p>Tên sản phẩm: </p>
                <input type="text" value={NmtName} onChange={(e) => setNmtName(e.target.value)} /> {/* Updated */}
                <p>Đơn giá: </p>
                <input type="number" value={NmtPrice} onChange={(e) => setNmtPrice(e.target.value)} />
                <p>Số lượng: </p>
                <input type="number" value={NmtQuantity} onChange={(e) => setNmtQuantity(e.target.value)} />
                <br />
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default NmtProductForm
