import React from 'react'
import style from './Guide.module.css'

function Guide() {
    return (
        <>
            <div className={style.subbanner}>
                <img src="/plugin.png"></img>
                <div className={style.title}>
                    <div className={style.contain}>
                        <span className={style.tieude}>Giới thiệu về hệ thống chứng thực chữ ký số</span>
                    </div>
                </div>
            </div>
            <div className={style.containanother}>
                <div className={style.service}>
                    <h1 className={style.tieudedv}>
                        <strong>Hướng dẫn sử dụng hệ thống chứng thực chữ ký số</strong>
                    </h1>
                    <hr></hr>
                    <p className={style.paragraph}>
                        <p className={style.pr} style={{ fontWeight: "bold" }}></p>
                    </p>
                    <p className={style.paragraph2}>
                        <img></img>
                    </p>
                    <p className={style.gc}><i></i></p>
                    <p className={style.paragraph}></p>
                </div>
 
            </div>
        </>
    )
}
export default Guide