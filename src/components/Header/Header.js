import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';

function Header() {
  return (
    <div className={style.container}>
      <Link to='/'><img src='./logo.png' alt='' className={style.images} /></Link>
      <ul className={style.option}>
        <li className={style.dropdown}>
          <a href="/AnotherServices" className={style.link}>Dịch vụ</a>
          <ul className={style.dropdownContent}>
            <li><a href="/RequireToken" className={style.link}>Mở khóa Token</a></li>
            <li><a href="/CheckCTS" className={style.link}>CTS</a></li>
            <li><a href="/CapBuCTS" className={style.link}>Chứng thư số</a></li>
          </ul>
        </li>
        <li className={style.dropdown}>
          <a href="/News" className={style.link}>Kiến thức</a>
          <ul className={style.dropdownContent}>
            <li><a href="/Elliptic1" className={style.link}>Đường cong Elliptic</a></li>
            <li><a href="/ECC1" className={style.link}>Hệ mật ECC</a></li>
            <li><a href="ECDSA1" className={style.link}>Chữ ký số & ECDSA</a></li>
          </ul>
        </li>
        <li className={style.dropdown}>
          <a href="/About" className={style.link}>Giới thiệu</a>
          <ul className={style.dropdownContent}>
            <li><a href="/About" className={style.link}>Tổng quan hệ thống</a></li>
            <li><a href="/Guide" className={style.link}>Hướng dẫn sử dụng</a></li>
          </ul>
        </li>
        <li className={style.dropdown}>
          <a href="/Login" className={style.link}>Đăng nhập/Đăng kí</a>
          <ul className={style.dropdownContent}>
            <li><a href="/Login" className={style.link}>Người dùng</a></li>
            <li><a href="/Login" className={style.link}>Quản trị hệ thống</a></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Header;
