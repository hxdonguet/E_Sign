import React from 'react'
import style from './ECC1.module.css'

function ECC1() {
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
                        <strong>Đường cong Elliptic trên trường hữu hạn - Các phương pháp giải ECDLP</strong>
                    </h1>
                    <hr></hr>
                    <p className={style.paragraph}>
                        <span className={style.pr} style={{ fontWeight: "bold" }}>Đường cong Elliptic được xây dựng trên các trường hữu hạn. Có hai trường hữu hạn thường được sử dụng: Trường hữu hạn Fq với q là số nguyên tố hoặc q là 2m (m là số nguyên). Tùy thuộc vào trường hữu hạn Fq, với mỗi bậc của q, tồn tại nhiều đường cong Elliptic. Do đó, với một trường hữu hạn cố định có q phần tử và q lớn, có nhiều sự lựa chọn nhóm đường cong Elliptic.</span>
                    </p>

                    <p className={style.paragraph2}>
                        <img className={style.anhmh} src='/Elliptic1.1.png'></img>
                    </p>
                    <h5 style={{ fontWeight: "bold" }}>I - Đường cong Elliptic trên trường số nguyên tố Fp</h5>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh2} src='/ECC1 (0).png'></img>
                    </p>

                    <p className={style.gc}><i>Định nghĩa EC trên trường Fp</i></p>
                    <h5 style={{ fontWeight: "bold" }}>II - Khái niệm: Nhóm con vòng & Định lí Hasse</h5>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh3} src='/ECC1 (1).png'></img>
                    </p>
                    <p className={style.gc}><i>Khái niệm: Nhóm con vòng & Định lí Hasse</i></p>

                    <h5 style={{ fontWeight: "bold" }}>III - Bài toán ECDLP (Logarit rời rạc)</h5>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh} src='/ECC1 (2).png'></img>
                        <img className={style.anhmh4} src='/ECC1 (3).png'></img>
                    </p>
                    <p className={style.gc}><i>Bài toán Logarit rời rạc</i></p>

                    <h5 style={{ fontWeight: "bold" }}>IV - Các phương pháp giải bài toán ECDLP</h5>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh3} src='/ECC1 (5).png'></img>
                    </p>
                    <p className={style.gc}><i>Phương pháp I - Bước lớn & Bước nhỏ</i></p>
                    <p className={style.paragraph2}>
                        <img className={style.anhm2} src='/ECC1 (6).png'></img>
                    </p>
                    <p className={style.gc}><i>Phương pháp II - Pholig_Hellman</i></p>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh3} src='/ECC1 (7).png'></img>
                    </p>
                    <p className={style.gc}><i>Phương pháp III - Tấn công cài đặt & Một số phương pháp khác</i></p>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh5} src='/ECC1 (8).png'></img>
                    </p>
                    <p className={style.gc}><i>Bảng tổng hợp các phương pháp giải ECDLP</i></p>

                    <h5 style={{ fontWeight: "bold" }}>V - Đường cong Elliptic trên trường F(2m)</h5>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh3} src='/ECC1 (4).png'></img>
                    </p>
                    <p className={style.gc}><i>Đường cong Elliptic trên trường F(2m)</i></p>
                    <p className={style.paragraph}>Trọng tâm là ECDSA, ta sẽ không đi sâu vào phần này.</p>

                </div>
 
            </div>
        </>
    )
}
export default ECC1