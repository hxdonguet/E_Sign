import React from 'react'
import style from './Intro1.module.css'

function Intro1() {
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
                        <strong>Giới thiệu đề tài</strong>
                    </h1>
                    <hr></hr>
                    <p className={style.paragraph}>
                        <span className={style.pr} style={{ fontWeight: "bold" }}>Trong thế giới kỹ thuật số ngày nay, an ninh mạng đã trở thành một trong những lĩnh vực quan trọng nhất trong công nghệ thông tin. Sự bảo mật của dữ liệu và thông tin cá nhân đang ngày càng trở nên cấp thiết, đặc biệt là trong bối cảnh các cuộc tấn công mạng và rò rỉ dữ liệu trở nên phổ biến. </span>
                    </p>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh} src='https://usth.edu.vn/wp-content/uploads/2022/05/nganh-an-toan-thong-tin-usth-tuyen-sinh_1.jpg'></img>
                    </p>
                    <p className={style.gc}><i>An toàn thông tin là một trong những vấn đề hàng đầu của thời đại Công nghệ số</i></p>
                    <h5 style={{ fontWeight: "bold" }}>Giới thiệu đề tài</h5>
                    <p className={style.paragraph}>Trong bối cảnh này, hệ mật mã là một công cụ không thể thiếu để đảm bảo tính bảo mật và toàn vẹn của dữ liệu. Hệ mật mã dựa trên Đường cong Elliptic (Elliptic Curve Cryptography - ECC) được biết đến với khả năng cung cấp độ an toàn cao trong khi sử dụng các khóa có kích thước nhỏ hơn so với các hệ mật mã truyền thống. Điều này làm cho ECC trở thành một lựa chọn lý tưởng cho các ứng dụng cần an ninh cao nhưng có hạn chế về tài nguyên hệ thống.</p>
                    <p className={style.paragraph}>Đề tài "Xây dựng hệ thống chữ ký số ECDSA" nhằm mục đích không chỉ nghiên cứu về mặt lý thuyết và toán học đằng sau ECC, mà còn tập trung vào việc khám phá và phân tích các ứng dụng thực tế của nó, một trong số đó là ECDSA (Elliptic Curve Digital Signature Algorithm) – Thuật toán sinh chữ ký số dựa trên đường cong Eliptic.</p>
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
export default Intro1