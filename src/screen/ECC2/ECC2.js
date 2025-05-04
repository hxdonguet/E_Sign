import React from 'react'
import style from './ECC2.module.css'

function ECC2() {
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
                        <strong>Sơ đồ trao đổi khóa ECDH</strong>
                    </h1>
                    <hr></hr>
                    <p className={style.paragraph}>
                        <span className={style.pr} style={{ fontWeight: "bold" }}>Alice và Bob muốn thống nhất một khóa chung mà họ có thể sử dụng cho việc trao đổi dữ liệu thông qua một sơ đồ mã đối xứng. Alice và Bob thống nhất một đường cong elliptic E trên trường hữu hạn Fq sao cho bài toán logarithm rời rạc là khó trong E(Fq). Thông tin duy nhất mà Eve thấy chỉ là đường cong E, trưởng hữu hạn Fq và các điểm G, aG và bG. </span>
                    </p>

                    <p className={style.paragraph2}>
                        <img className={style.anhmh} src='/Picture15.gif'></img>
                    </p>
                    <h5 style={{ fontWeight: "bold" }}>I - Tham số ECC</h5>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh} src='/ECDH (1).png'></img>
                    </p>
                    <p className={style.gc}><i>Các tham số của hệ mật ECC</i></p>

                    <h5 style={{ fontWeight: "bold" }}>II - Sơ đồ trao đổi khóa ECDH</h5>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh} src='/ECDH (2).png'></img>
                        <img className={style.anhmh} src='/ECDH (3).png'></img>
                    </p>
                    <p className={style.gc}><i>Sơ đồ trao đổi khóa ECDH</i></p>

                    <h5 style={{ fontWeight: "bold" }}>III - Đánh giá bảo mật</h5>
                    <p className={style.paragraph}>•	Eve nhìn thấy được G, aG và bG (Do đã công khai).</p>
                    <p className={style.paragraph}>•	Tuy nhiên, Eve không biết được P là gì, muốn biết thì phải tính P = abG.</p>
                    <p className={style.paragraph}>•	Vấn đề là Eve cũng không biết a (Private key - Alice) và b (Private key - Bob). </p>
                    <p className={style.paragraph}>•	Để biết, Eve buộc phải giải HAI bài toán logarit rời rạc: Đã có điểm G, lúc này: a = log_G⁡〖A=log_G⁡〖(aG)〗 〗; b = log_G⁡〖B=log_G⁡〖(bG)〗 〗.</p>
                    <p className={style.paragraph}>•	Sau khi tính xong a, b, phải tính thêm P nữa. Khó khăn của tính toán được dẫn từ hai bài toán được tin là khó.</p>
                    <p className={style.paragraph}>•	Hai bài toán này KHÔNG THỂ giải được trong thời gian đa thức.</p>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh} src='/ECDH (4).png'></img>
                    </p>
                    <p className={style.gc}><i>Sự ràng buộc của hai bài toán: CDH & DDH</i></p>

                </div>
 
            </div>
        </>
    )
}
export default ECC2