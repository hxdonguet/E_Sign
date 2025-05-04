import React from 'react'
import { Link } from 'react-router-dom'
import style from './Login.module.css'
function Login() {
    return (
        <div className={style.signinbox}>
            <section>
                <div className={style.logoholder}>
                    <img src='/logo.png'></img>
                </div>
                <form className={style.dangform}>
                    <hr></hr>
                    <div className={style.formtdn}>
                        <label>Tên đăng nhập:</label>
                        <input className={style.inpcontrol} type='text' placeholder='Username, Phone Number or Email'></input>
                    </div>
                    <hr></hr>
                    <div className={style.formtdn}>
                        <label>Mật khẩu:</label>
                        <input className={style.inpcontrol} type='password' placeholder='Password'></input>
                    </div>
                    <hr></hr>
                    <div className={style.formtdn}>
                        <Link to='/Dashboard'><button className={style.submitdn}>Đăng nhập</button></Link>
                    </div>
                    <div className={style.formtdn}>
                        <p className={style.pdn}>Chưa có tài khoản?
                            <a href='/register' className={style.adn}>  Đăng kí</a>
                        </p>
                    </div>
                    <hr></hr>
                </form>
                <hr></hr>
                <p className={style.camket}>Khi đăng nhập, tôi đồng ý với các Điều khoản và Chính sách bảo mật của E-Sign.</p>
            </section>
        </div>
    )
}

export default Login