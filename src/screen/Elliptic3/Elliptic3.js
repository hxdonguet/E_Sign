import React from 'react'
import style from './Elliptic3.module.css'

function Elliptic3() {
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
                        <strong>Xây dựng và minh họa các phép toán trên đường cong Elliptic bằng Python</strong>
                    </h1>
                    <hr></hr>
                    <p className={style.paragraph}>
                        <span className={style.pr} style={{ fontWeight: "bold" }}>Các giải thích được trình bày như hình minh họa. Chú ý cài đặt thư viện matplotlib để vẽ đồ thị qua lệnh “pip install matplotlib”.</span>
                    </p>
                    <h5 style={{ fontWeight: "bold" }}>Giới thiệu về Python</h5>
                    <p className={style.paragraph}>Python là một ngôn ngữ lập trình được sử dụng rộng rãi trong các ứng dụng web, phát triển phần mềm, khoa học dữ liệu và máy học (ML). Các nhà phát triển sử dụng Python vì nó hiệu quả, dễ học và có thể chạy trên nhiều nền tảng khác nhau. Phần mềm Python được tải xuống miễn phí, tích hợp tốt với tất cả các loại hệ thống và tăng tốc độ phát triển.</p>
                    <p className={style.paragraph}>Những lợi ích của Python bao gồm:</p>
                    <p className={style.paragraph}>- Các nhà phát triển có thể dễ dàng đọc và hiểu một chương trình Python vì ngôn ngữ này có cú pháp cơ bản giống tiếng Anh. </p>
                    <p className={style.paragraph}>- Python giúp cải thiện năng suất làm việc của các nhà phát triển vì so với những ngôn ngữ khác, họ có thể sử dụng ít dòng mã hơn để viết một chương trình Python.</p>
                    <p className={style.paragraph}>- Python có một thư viện tiêu chuẩn lớn, chứa nhiều dòng mã có thể tái sử dụng cho hầu hết mọi tác vụ. Nhờ đó, các nhà phát triển sẽ không cần phải viết mã từ đầu.</p>
                    <p className={style.paragraph}>- Các nhà phát triển có thể dễ dàng sử dụng Python với các ngôn ngữ lập trình phổ biến khác như Java, C và C++.</p>
                    <p className={style.paragraph}>- Cộng đồng Python tích cực hoạt động bao gồm hàng triệu nhà phát triển nhiệt tình hỗ trợ trên toàn thế giới. </p>
                    <p className={style.paragraph}>- Trên Internet có rất nhiều tài nguyên hữu ích nếu bạn muốn học Python. Có thể dễ dàng tìm thấy video, chỉ dẫn, tài liệu và hướng dẫn dành cho nhà phát triển.</p>
                    <p className={style.paragraph}>- Python có thể được sử dụng trên nhiều hệ điều hành máy tính khác nhau, chẳng hạn như Windows, macOS, Linux và Unix.</p>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh} src='https://www.fullstackpython.com/img/logos/py.png'></img>
                    </p>
                    <p className={style.gc}><i>Ngôn ngữ lập trình Python</i></p>
                    <h5 style={{ fontWeight: "bold" }}>Xây dựng đường cong Elliptic & Kiểm tra điểm trên đường cong</h5>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh2} src='/Elliptic3.1.png'></img>
                        <img className={style.anhmh2} src='/Elliptic3.2.png'></img>
                    </p>
                    <p className={style.gc}><i>Xây dựng đường cong Elliptic</i></p>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh2} src='/Elliptic3.3.png'></img>
                        <img className={style.anhmh2} src='/Elliptic3.4.png'></img>
                    </p>
                    <p className={style.gc}><i>Kiểm tra điểm trên đường cong Elliptic</i></p>
                    <h5 style={{ fontWeight: "bold" }}>Phép cộng</h5>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh2} src='/Elliptic3.5.png'></img>
                        <img className={style.anhmh2} src='/Elliptic3.6.png'></img>
                        <img className={style.anhmh2} src='/Elliptic3.7.png'></img>
                    </p>
                    <p className={style.gc}><i>Phép cộng trên đường cong Elliptic</i></p>
                    <h5 style={{ fontWeight: "bold" }}>Phép nhân vô hướng và các phương pháp tính</h5>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh2} src='/Elliptic3.8.png'></img>
                    </p>
                    <p className={style.gc}><i>Phương pháp cộng thông thường</i></p>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh2} src='/Elliptic3.9.png'></img>
                        <img className={style.anhmh2} src='/Elliptic3.10.png'></img>
                    </p>
                    <p className={style.gc}><i>Phương pháp Double - And - Add</i></p>
                </div>
 
            </div>
        </>
    )
}
export default Elliptic3