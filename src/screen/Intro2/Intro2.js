import React from 'react'
import style from './Intro2.module.css'

function Intro2() {
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
                        <strong>MỤC TIÊU BÀI TOÁN</strong>
                    </h1>
                    <hr></hr>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh} src='https://i.ytimg.com/vi/A2KNrgiWquU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLARRr-_PCpC85KYFZLFeFFeek8p2w'></img>
                    </p>
                    <p className={style.gc}><i>Ví dụ về Đường cong Elliptic</i></p>
                    <h5 style={{ fontWeight: "bold" }}>Mô tả chung</h5>
                    <p className={style.paragraph}>Như đã nói, ta tìm hiểu sơ bộ về đường cong Elliptic. Đồng thời, tạo đường cong Elliptic đơn giản bằng ngôn ngữ lập trình tùy chọn.</p>
                    <h5 style={{ fontWeight: "bold" }}>Mô tả chi tiết</h5>
                    <p className={style.paragraph}>Các nhiệm vụ chính:</p>
                    <p className={style.paragraph}>• Tổng quan về đường cong Elliptic;</p>
                    <p className={style.paragraph}>• Cộng các điểm trên đường cong Elliptic (Phép cộng);</p>
                    <p className={style.paragraph}>• Nhân vô hướng các điểm trên đường cong Elliptic (Nhân vô hướng);</p>
                    <p className={style.paragraph}>• Xây dựng đường cong Eliptic bằng ngôn ngữ lập trình tùy chọn (Python).</p>
                </div>
    
            </div>
        </>
    )
}
export default Intro2