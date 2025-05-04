import React from 'react'
import style from './ECC3.module.css'

function ECC3() {
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
                        <strong>Sơ đồ trao đổi khóa EC - Elgamal</strong>
                    </h1>
                    <hr></hr>
                    <p className={style.paragraph}>
                        <p className={style.pr} style={{ fontWeight: "bold" }}>Alice muốn gửi một văn bản (Bản rõ: PlainText) cho Bob. Bob chọn một đường cong Elliptic trên trường hữu hạn Fq sao cho bài toán logarit rời rạc là khó với E(Fq). </p>
                        <p className={style.pr} style={{ fontWeight: "bold" }}>Bob chọn một điểm sinh P trên E(Fq) (Thông thường được thỏa thuận để cấp của P là một số nguyên tố lớn). Bob chọn một khóa bí mật (Gọi là Khóa mật – d (Hoặc là s, tùy tài liệu)) và tính khóa công khai B = dP. </p>
                    </p>

                    <h5 style={{ fontWeight: "bold" }}>Sơ đồ trao đổi khóa EC - Elgamal</h5>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh} src='/EC_Elgamal.png'></img>
                    </p>
                    <p className={style.gc}><i>Sơ đồ trao đổi khóa EC - Elgamal</i></p>
                    <p className={style.paragraph}>Ta đã hoàn thành ECDH và EC_Elgamal. Phần tiếp theo sẽ trình bày về chữ ký số và ECDSA.</p>
                </div>
 
            </div>
        </>
    )
}
export default ECC3