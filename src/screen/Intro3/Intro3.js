import React from 'react'
import style from './Intro3.module.css'

function Intro3() {
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
                        <strong>ĐỊNH NGHĨA BÀI TOÁN</strong>
                    </h1>
                    <hr></hr>
                    <p className={style.paragraph}>
                        <span className={style.pr} style={{ fontWeight: "bold" }}>Ngày nay, với sự phát triển mạnh mẽ của công nghệ thông tin nói chung và Internet nói riêng, việc trao đổi thông tin trở nên nhanh chóng và dễ dàng. Do đó, một vấn đề phát sinh là thông tin có thể bị trộm cắp, có thể là sai lệch, có thể giả mạo.</span>
                    </p>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh} src='https://usth.edu.vn/wp-content/uploads/2022/05/nganh-an-toan-thong-tin-usth-tuyen-sinh_1.jpg'></img>
                    </p>
                    <p className={style.gc}><i>An toàn thông tin là một trong những vấn đề hàng đầu của thời đại Công nghệ số</i></p>
                    <h5 style={{ fontWeight: "bold" }}>Đặt vấn đề</h5>
                    <p className={style.paragraph}>Để giải quyết tình hình trên, an toàn thông tin được đặt ra cấp thiết. Các nhà khoa học đã phát minh ra những hệ mật mã nhằm che dấu thông tin, làm rõ chúng để tránh sự giòm ngó của những kẻ cổ tình phá hoại như các hệ mật: RSA, Elgamal... Mặc dù cũng rất an toàn, nhưng có độ dài khoá lớn nên trong một số lĩnh vực không thể ứng dụng được.</p>
                    <h5 style={{ fontWeight: "bold" }}>Định nghĩa bài toán</h5>
                    <p className={style.paragraph}>Chính vì vậy, người ta đã phát minh một hệ mật, đó là hệ mật trên đường cong elliptic, được đánh giá là hệ mật có độ bảo mật an toàn cao và hiệu quả hơn nhiều so với hệ mật công khai khác. Trong tương lai gần, hệ mật trên đường cong elliptic sẽ được sử dụng phổ biến và thay thế những hệ mật trước nó. Một trong những ứng dụng, ECDSA, sẽ được đề cập chi tiết.</p>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh} src='/ECC.jpg'></img>
                    </p>
                    <p className={style.gc}><i>Elliptic Curve Cryptography</i></p>
                    <p className={style.paragraph}>Các định nghĩa, ứng dụng chi tiết của Đường cong Elliptic & Hệ mật ECC - ECDSA sẽ được trình bày chi tiết trong các bài viết tiếp.</p>
                    
                </div>
 
            </div>
        </>
    )
}
export default Intro3