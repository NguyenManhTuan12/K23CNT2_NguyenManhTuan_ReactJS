import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NmtNavNar from './components/NmtNavNar'
import NmtHome from './components/NmtHome'
import NmtGioiThieu from './components/NmtGioiThieu'
import NmtSanPham from './components/NmtSanPham'
import NmtTinTuc from './components/NmtTinTuc'
import NmtLienHe from './components/NmtLienHe'
import NmtProductList from './components/NmtProductList'
import NmtProductForm from './components/NmtProductForm'
export default function NmtApp() {

  const initialProducts = [
    {NmtID: "P001", NmtName: "Sản phẩm 1", NmtPrice: 100000, NmtQuantity: 10},
    {NmtID: "P002", NmtName: "Sản phẩm 2", NmtPrice: 200000, NmtQuantity: 20},
    {NmtID: "P003", NmtName: "Sản phẩm 3", NmtPrice: 300000, NmtQuantity: 30},
  ]

  const [products, setProducts] = useState(initialProducts)

  // Hàm xử lý sự kiện thêm mới 
  const handleAddProduct = (product) => {
    console.log("handleAddProduct : ", product)

    setProducts(prev => {
      return [...prev, product]
    })
  }

  return (
    <div className='container border my-3'>
      <h1>Nguyễn Mạnh Tuấn  - K23CNT2 </h1>
      <hr />
      <Router>
        <NmtNavNar />
        <Routes>
          <Route path='/' element={<NmtHome />} />
          <Route path='/gioi-thieu' element={<NmtGioiThieu />} />
          <Route path='/san-pham' element={<NmtSanPham />} />
          <Route path='/tin-tuc' element={<NmtTinTuc />} />
          <Route path='/lien-he' element={<NmtLienHe />} />
          <Route path='/list-product' element={<NmtProductList products={products} />} />
          <Route path='/create-product' element={<NmtProductForm onAddProduct={handleAddProduct} />} />
        </Routes>
      </Router>
    </div>
  )
}
