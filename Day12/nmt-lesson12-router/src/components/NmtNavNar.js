import React from 'react'
import { Link } from 'react-router-dom'

export default function NmtNavNar() {
    return (
        <div>
            <ul>
                <Link to='/'>Trang chủ |</Link>
                <Link to='/gioi-thieu'>Giới thiệu |</Link>
                <Link to='/san-pham'>Sản phẩm |</Link>
                <Link to='/tin-tuc'>Tin tức |</Link>
                <Link to='/lien-he'>Liên hệ |</Link>
                <Link to='/list-product'>Danh sách sản phẩm |</Link>
                <Link to='/create-product'>Thêm sản phẩm |</Link>
            </ul>
        </div>
    )
}