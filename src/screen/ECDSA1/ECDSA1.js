import React from 'react'
import style from './ECDSA1.module.css'

function ECDSA1() {
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
                        <strong>Chữ ký số & Thuật toán ECDSA</strong>
                    </h1>
                    <hr></hr>
                    <p className={style.paragraph}>
                        <p className={style.pr} style={{ fontWeight: "bold" }}>Để chứng thực nguồn gốc hay hiệu lực của một tài liệu (Ví dụ: Đơn xin học, Giấy báo nhập học,...), lâu nay người ta dùng chữ ký “tay”, ghi vào phía dưới của mỗi tài liệu. Như vậy người ký phải trực tiếp “ký tay“ vào tài liệu.</p>
                        <p className={style.pr} style={{ fontWeight: "bold" }}>Ngày nay các tài liệu được số hóa, người ta cũng có nhu cầu chứng thực nguồn gốc hay hiệu lực của các tài liệu này. Rõ ràng không thể “ký tay“ vào tài liệu, vì chúng không được in ấn trên giấy. Tài liệu “số” (Hay tài liệu “điện tử”) là một xâu các bit (0 hay 1), xâu bít có thể rất dài (Nếu in trên giấy có thể hàng nghìn trang). “Chữ ký” để chứng thực một xâu bít tài liệu cũng không thể là một xâu bit nhỏ đặt phía dưới xâu bit tài liệu. Một “chữ ký” như vậy chắc chắn sẽ bị kẻ gian sao chép để đặt dưới một tài liệu khác bất hợp pháp. </p>
                    </p>

                    <h5 style={{ fontWeight: "bold" }}>I - Chữ ký số</h5>
                    <p className={style.paragraph}>Những năm 80 của thế kỷ 20, các nhà khoa học đã phát minh ra “chữ ký số” để chứng thực một “tài liệu số”. Đó chính là “bản mã” của xâu bít tài liệu. Người ta tạo ra “chữ ký số” (Chữ ký điện tử) trên “tài liệu số” giống như tạo ra “bản mã” của tài liệu với “khóa lập mã”. Như vậy “ký số” trên “tài liệu số” là “ký” trên từng bit tài liệu. Kẻ gian khó có thể giả mạo “chữ ký số” nếu nó không biết “khóa lập mã”. Để kiểm tra một “chữ ký số” thuộc về một “tài liệu số”, người ta giải mã “chữ ký số” bằng “khóa giải mã”, và so sánh với tài liệu gốc.</p>
                    <p className={style.paragraph}>“Ký số” thực hiện trên từng bit tài liệu, nên độ dài của “chữ ký số” ít nhất cũng bằng độ dài của tài liệu. Do đó thay vì ký trên tài liệu dài, người ta thường dùng “hàm băm” để tạo “đại diện” cho tài liệu, sau đó mới “Ký số” lên “đại diện” này.</p>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh} src='/CKS (4).png'></img>
                    </p>
                    <p className={style.gc}><i>So sánh chữ ký tay và chữ ký số</i></p>
                    <p className={style.paragraph}>Các đặc tính quan trọng của chữ ký số:</p>
                    <p className={style.paragraph}>•	Xác thực (Authentication): Đảm bảo chữ ký chỉ có thể được tạo bởi chủ sở hữu khóa bí mật.</p>
                    <p className={style.paragraph}>•	Toàn vẹn (Integrity): Bất kỳ thay đổi nào trong nội dung đều làm cho chữ ký không hợp lệ.</p>
                    <p className={style.paragraph}>•	Không thể chối bỏ (Non-repudiation): Người ký không thể phủ nhận việc đã ký thông điệp.</p>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh} src='/CKS (1).png'></img>
                    </p>
                    <p className={style.gc}><i>Chữ ký số</i></p>

                    <h5 style={{ fontWeight: "bold" }}>II - Sơ đồ chữ ký số</h5>
                    <p className={style.paragraph}>Người ta thường dùng hệ mã hóa khóa công khai để lập “Sơ đồ chữ ký số”. Ở đây khóa bí mật a dùng làm khóa “Ký”, khóa công khai b dùng làm khóa kiểm tra “Chữ ký”. Ngược lại với việc mã hóa, dùng khóa công khai b để lập mã, dùng khóa bí mật a để giải mã.</p>
                    <p className={style.paragraph}>Điều này là hoàn toàn tự nhiên, vì “Ký” cần giữ bí mật nên phải dùng khóa bí mật a để “Ký”. Còn “Chữ ký” là công khai cho mọi người biết, nên dùng khóa công khai b để kiểm tra.</p>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh} src='/CKS (2).png'></img>
                    </p>
                    <p className={style.gc}><i>Sơ đồ chữ ký số</i></p>

                    <h5 style={{ fontWeight: "bold" }}>III - Sơ đồ chữ ký số ECDSA</h5>
                    <p className={style.paragraph}>Năm 1999, ECDSA (The Elliptic Curve Digital Signature Algorithm) đã được phê duyệt thành tiêu chuẩn của ANSI (ANSI X9.62-1998 ECDSA, phiên bản mới nhất là X9.62-2005). Năm 2000, ECDSA cũng được IEEE và NIST phê duyệt thành tiêu chuẩn FIPS PUB 186-4 (DSS - Digital Signature Standard), phiên bản mới nhất ban hành 7 – 2013. </p>
                    <p className={style.paragraph}>ISO năm 2002 cũng ban hành tiêu chuẩn ISO/IEC 15946 – 2:2002 trong đó có phần dành riêng về ECDSA. Để thiết lập sơ đồ chữ ký ECDSA, cần xác định các tham số: Lựa chọn đường cong E trên trường hữu hạn Fq với đặc số p sao cho phù hợp và một điểm cơ sở G. </p>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh} src='/CKS (3).png'></img>
                    </p>
                    <p className={style.gc}><i>Sơ đồ chữ ký số ECDSA</i></p>

                </div>
 
            </div>
        </>
    )
}
export default ECDSA1