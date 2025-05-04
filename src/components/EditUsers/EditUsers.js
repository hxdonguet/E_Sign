import React from 'react'
import style from './EditUsers.module.css'
function EditUsers() {
    return (
        <div className={style.modal}>
            <div className={style.overlay}>
                <div className={style.modal_content}>
                    <form className={style.modal_form} >
                        <div className={style.title_form} style={{ textAlign: "center" }}>Cập nhật thông tin</div>
                        <div className={style.formgroup}>
                            <label style={{ fontWeight: "bold" }}>Tên người dùng:</label>
                            <input className={style.ip} type='text' placeholder='Nhập tên người dùng...'></input>
                        </div>
                        <div className={style.formgroup}>
                            <label style={{ fontWeight: "bold" }}>Mật khẩu mới:</label>
                            <input className={style.ip} type='password' placeholder='Nhập mật khẩu mới...'></input>
                        </div>
                        <div className={style.formgroup}>
                            <label style={{ fontWeight: "bold" }}>Địa chỉ Email mới:</label>
                            <input className={style.ip} type='password' placeholder='Nhập Email mới...'></input>
                        </div>
                        <div className={style.field_edit}>
                            <button type='submit' className={style.btn_close_edit}>
                                <a href='/Users'>Hủy</a></button>
                            <button type='submit' className={style.btn_update_edit}>
                                <a href='/Users'>Cập nhật</a></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditUsers