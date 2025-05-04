import React from 'react'
import style from './ECDSA2.module.css'

function ECDSA2() {
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
                        <strong>Hệ thống chữ ký số ECDSA</strong>
                    </h1>
                    <hr></hr>
                    <p className={style.paragraph}>
                        <p className={style.pr} style={{ fontWeight: "bold" }}>Trong thời đại số hóa, việc đảm bảo bảo mật thông tin và tính toàn vẹn dữ liệu trở nên quan trọng hơn bao giờ hết. Với sự gia tăng của các giao dịch trực tuyến và trao đổi dữ liệu qua mạng, các hệ thống bảo mật cần phải vững chắc, linh hoạt và hiệu quả. Trong bối cảnh đó, hệ mật mã dựa trên đường cong elliptic (ECC) và ứng dụng của nó trong chữ ký số (ECDSA) đóng vai trò thiết yếu trong việc bảo vệ thông tin trên không gian mạng. </p>
                        <p className={style.pr} style={{ fontWeight: "bold" }}>Bài toán được đặt ra là nghiên cứu, phân tích và triển khai một hệ thống chữ ký số sử dụng ECDSA, một thuật toán dựa trên đường cong elliptic. Mục tiêu chính là tạo ra một giải pháp bảo mật mạnh mẽ, dựa trên sự kết hợp của toán học và công nghệ thông tin, để đảm bảo tính xác thực và toàn vẹn của dữ liệu trong các ứng dụng thực tế như trao đổi tài liệu, giao dịch trực tuyến, và bảo mật thông tin trên không gian mạng. </p>
                    </p>

                    <h5 style={{ fontWeight: "bold" }}>I - Những thách thức gặp phải</h5>
                    <p className={style.paragraph}>Bài toán đặt ra những thách thức cụ thể trong việc hiểu và triển khai thuật toán ECDSA:</p>
                    <p className={style.paragraph}>– Sự hiểu biết sâu sắc về toán học: Đường cong elliptic là một khái niệm toán học phức tạp, đòi hỏi sự hiểu biết chắc chắn về lý thuyết số và hình học.</p>
                    <p className={style.paragraph}>– Triển khai kỹ thuật: Cần phải hiện thực hóa lý thuyết bằng cách triển khai chính xác thuật toán trong môi trường lập trình, đòi hỏi kỹ năng lập trình mạnh mẽ và hiểu biết về bảo mật máy tính.</p>
                    <p className={style.paragraph}>– Tối ưu và bảo mật: Thuật toán cần được tối ưu để đảm bảo hiệu suất cao, đồng thời không làm giảm bảo mật.</p>
                    
                    <h5 style={{ fontWeight: "bold" }}>II - Tổng quan về các công nghệ sử dụng</h5>
                    <h6 style={{ fontWeight: "bold" }}>1. Ngôn ngữ lập trình Python</h6>
                    <p className={style.paragraph}>Ngôn ngữ Python được sử dụng nhiều trong lĩnh vực phát triển ứng dụng, bao gồm những ví dụ sau:</p>
                    <p className={style.paragraph}>- Phát triển web phía máy chủ;</p>
                    <p className={style.paragraph}>- Tự động hóa bằng các tập lệnh Python;</p>
                    <p className={style.paragraph}>- Khoa học dữ liệu và máy học.</p>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh} src="https://www.fullstackpython.com/img/logos/py.png"></img>
                    </p>
                    <p className={style.gc}><i>Python - Được sử dụng nhiều trong lĩnh vực phát triển ứng dụng</i></p>

                    <h6 style={{ fontWeight: "bold" }}>2. Google Calaboratory (IDE)</h6>
                    <p className={style.paragraph}>Colaboratory (Google Colab) là một sản phẩm từ Google Research dựa trên Jupyter Notebook cho phép chạy các dòng code Python thông qua trình duyệt, đặc biệt phù hợp với Data Analysis, ML và giáo dục. Google Colab không cần yêu cầu cài đặt hay cấu hình máy tính, mọi thứ có thể chạy thông qua trình duyệt, người nghiên cứu có thể sử dụng tài nguyên máy tính từ CPU tốc độ cao và cả GPUs và cả TPUs đều được cung cấp đầy đủ.</p>
                    <p className={style.paragraph}>Colab cung cấp nhiều loại GPU và thay đổi theo thời gian. Vì là dịch vụ miễn phí, nên Colab sẽ có những thứ tự ưu tiên trong việc sử dụng tài nguyên hệ thống, cũng như giới hạn thời gian sử dụng, thời gian sử dụng tối đa tới 12 giờ. </p>
        
                    <p className={style.paragraph2}>
                        <img className={style.anhmh2} src='/ECDSA_Main (1).png'></img>
                    </p>
                    <p className={style.gc}><i>2. Google Calaboratory (IDE)</i></p>

                    <h5 style={{ fontWeight: "bold" }}>III - Hệ thống chữ ký số ECDSA cho đoạn Text: Triển khai và Thử nghiệm</h5>
                    <p className={style.paragraph}>Link tài liệu và Video hệ thống xem <a  href="https://drive.google.com/drive/u/0/folders/13pfnOQmt8q7bgbbIwpDV5H7ky-ChLf_S" style={{ fontWeight: "bold", color: "blue" }}>tại đây</a>.</p>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh2} src='/ECDSA_Main (2).png'></img>
                        <img className={style.anhmh2} src='/ECDSA_Main (3).png'></img>
                        <img className={style.anhmh2} src='/ECDSA_Main (4).png'></img>
                    </p>
                    <p className={style.gc}><i>Hệ thống chữ ký số ECDSA cho đoạn Text: Triển khai và Thử nghiệm</i></p>

                    <h5 style={{ fontWeight: "bold" }}>IV - Hệ thống chữ ký số ECDSA cho văn bản (File PDF): Triển khai và Thử nghiệm</h5>
                    <p className={style.paragraph}>Link tài liệu và Video hệ thống xem <a  href="https://drive.google.com/drive/u/0/folders/13pfnOQmt8q7bgbbIwpDV5H7ky-ChLf_S" style={{ fontWeight: "bold", color: "blue" }}>tại đây</a>.</p>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh2} src='/ECDSA_Main (5).png'></img>
                        <img className={style.anhmh2} src='/ECDSA_Main (6).png'></img>
                        <img className={style.anhmh2} src='/ECDSA_Main (7).png'></img>
                    </p>
                    <p className={style.gc}><i>Hệ thống chữ ký số ECDSA cho văn bản (File PDF): Triển khai và Thử nghiệm</i></p>

                    <h5 style={{ fontWeight: "bold" }}>V - Kết quả và phân tích kết quả</h5>
                    <h6 style={{ fontWeight: "bold" }}>1. Tạo giá trị khóa</h6>
                    <p className={style.paragraph}>Giá trị của khóa riêng tư và khóa công khai được hiển thị dưới dạng hệ thập lục phân. Khóa riêng tư (`private key`) để tạo chữ ký, khóa công khai (`public key`) để xác minh chữ ký.</p>
                    <h6 style={{ fontWeight: "bold" }}>2. Tạo chữ ký số</h6>
                    <p className={style.paragraph}>Chỉ người sở hữu khóa riêng tư mới có thể tạo ra chữ ký, và chữ ký đó liên kết một cách độc nhất với thông điệp này.</p>
                    <h6 style={{ fontWeight: "bold" }}>3. Xác minh chữ ký</h6>
                    <p className={style.paragraph}>Khi xác minh chữ ký, sử dụng khóa công khai và cùng một thông điệp. Kết quả `true` cho thấy rằng chữ ký được xác minh thành công, tức là chữ ký đó quả thực được tạo từ thông điệp bằng khóa riêng tư tương ứng với khóa công khai được sử dụng.</p>
                    <h6 style={{ fontWeight: "bold" }}>4. Ý nghĩa và tính bảo mật</h6>
                    <p className={style.paragraph}>Kết quả thực nghiệm cho thấy hệ thống chữ ký số ecdsa hoạt động đúng đắn, đảm bảo tính xác thực và toàn vẹn của thông điệp. Điều này quan trọng trong việc bảo vệ thông tin và ngăn chặn sự giả mạo hoặc thay đổi thông điệp.</p>
                    <p className={style.paragraph}>Sự tương ứng giữa chữ ký số và cả khóa riêng tư lẫn thông điệp cung cấp một lớp bảo mật mạnh mẽ, đảm bảo rằng chỉ người sở hữu khóa riêng tư mới có thể ký và rằng chữ ký chỉ có thể được xác minh bởi người sở hữu khóa công khai tương ứng.</p>


                </div>
 
            </div>
        </>
    )
}
export default ECDSA2