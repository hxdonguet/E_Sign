import React from 'react'
import style from './Elliptic2.module.css'

function Elliptic2() {
    return (
        <>
            <div className={style.subbanner}>
                <img src="/plugin.png"></img>
                <div className={style.title}>
                    <div className={style.contain}>
                        <span className={style.tieude}>Kiến thức về ECC & ECDSA</span>
                    </div>
                </div>
            </div>
            <div className={style.containanother}>
                <div className={style.service}>
                    <h1 className={style.tieudedv}>
                        <strong>Các phép toán trên đường cong Elliptic</strong>
                    </h1>
                    <hr></hr>
                    <p className={style.paragraph}>
                        <span className={style.pr} style={{ fontWeight: "bold" }}>Chú ý: Nội dung khá dài & Nhiều công thức toán học. Để tiết kiệm thời gian, các nội dung được thể hiện qua hình ảnh tương ứng.</span>
                    </p>
                    <h5 style={{ fontWeight: "bold" }}>Phép cộng</h5>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh} src='/Elliptic2 (1).png'></img>
                        <img className={style.anhmh2} src='/Elliptic2 (2).png'></img>
                        <img className={style.anhmh3} src='/Elliptic2 (3).png'></img>
                    </p>
                    <p className={style.gc}><i>Phép cộng & Luật cộng đầy đủ trên EC</i></p>
                    <h5 style={{ fontWeight: "bold" }}>Phép nhân vô hướng</h5>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh4} src='/Elliptic2 (4).png'></img>
                        <img className={style.anhmh5} src='/Elliptic2 (5).png'></img>
                        <img className={style.anhmh5} src='/Elliptic2 (6).png'></img>
                    </p>
                    <p className={style.gc}><i>Phép nhân vô hướng & Các phương pháp</i></p>
                </div>
 
            </div>
        </>
    )
}
export default Elliptic2