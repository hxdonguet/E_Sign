import React from 'react'
import style from './PackageForm.module.css'

function PackageForm({ close }) {
    return (
        <div className={style.modal}>
            <div className={style.overlay}>
                <div className={style.modal_content}>
                    <form className={style.modal_form} >
                        <div className={style.title_form}>...</div>
                        <div className={style.user_details}>
                            <div className={style.form}>
                                <label htmlFor={style.field}>1</label>
                                <input style={{border: "1px solid #00002b"}} name='account' type='text'/>
                            </div>
                            <div className={style.form}>
                                <label htmlFor={style.field}>2</label>
                                <input style={{border: "1px solid #00002b"}} name='account' type='text'/>
                            </div>
                            <div className={style.form}>
                                <label htmlFor={style.field}>3</label>
                                <input style={{border: "1px solid #00002b"}} name='account' type='text'/>
                            </div>
                            <div className={style.form}>
                                <label htmlFor={style.field}>4Receiving Address</label>
                                <input style={{border: "1px solid #00002b"}} name='account' type='text'/>
                            </div>
                        </div>
                        <div className={style.field}>
                            <button type='submit' className={`${style.btn_close} ${style.btn}`} onClick={() => close(false)}>
                                Hủy</button>
                                <button type='submit' className={`${style.btn_create} ${style.btn}`}>
                                Tạo
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PackageForm