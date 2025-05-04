import React from 'react'
import style from './InfoAdmin.module.css'
function InfoAdmin() {
    return (
        <div className={style.modal}>
            <div className={style.overlay}>
                <div className={style.modal_content}>
                    <form className={style.modal_form} >
                        <div className={style.title_form} style={{ textAlign: "center" }}>Cập nhật thông tin</div>
                        <div className={style.formgroup}>
                            <label style={{ fontWeight: "bold" }}>Email:</label>
                            <input className={style.ip} type='text' placeholder='Nhập Email...'></input>
                        </div>
                        <div className={style.formgroup}>
                            <label style={{ fontWeight: "bold" }}>Mật khẩu mới:</label>
                            <input className={style.ip} type='password' placeholder='Nhập mật khẩu mới...'></input>
                        </div>
                        <div className={style.formgroup}>
                            <label style={{ fontWeight: "bold" }}>Xác nhận mật khẩu mới:</label>
                            <input className={style.ip} type='password' placeholder='Xác nhận mật khẩu mới...'></input>
                        </div>
                        <div className={style.field_edit}>
                            <button type='submit' className={style.btn_close_edit}>
                                <a href='/Dashboard'>Hủy</a></button>
                            <button type='submit' className={style.btn_update_edit}>
                                <a href='/Dashboard'>Cập nhật</a></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default InfoAdmin