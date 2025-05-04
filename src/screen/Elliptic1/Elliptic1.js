import React from 'react'
import style from './Elliptic1.module.css'

function Elliptic1() {
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
                        <strong>Tổng quan về đường cong Elliptic</strong>
                    </h1>
                    <hr></hr>
                    <p className={style.paragraph}>
                        <span className={style.pr} style={{ fontWeight: "bold" }}>Trong mục này, ta đề cập đến đường cong Elliptic trên trường số thực. Đường cong Elliptic trên trường hữu hạn sẽ được để sau.</span>
                    </p>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh} src='/Elliptic1.1.png'></img>
                    </p>
                    <h5 style={{ fontWeight: "bold" }}>Định nghĩa</h5>
                    <p className={style.paragraph}>Đường cong elliptic cũng như đại số hình học - được nghiên cứu rộng rãi trong vòng 150 năm trở lại đây và đã đạt được một số kết quả lý thuyết có giá trị. Đường cong elliptic được phát hiện lần đầu tiên vào thế kỷ 17 dưới dạng công thức Diophantine:</p>
                    <p className={style.paragraph2}>
                        <img className={style.anhmhct} src='/Elliptic1.3.png'></img>
                    </p>
                    <p className={style.paragraph}>Đường cong Elliptic trên K là tập mọi x,y ∈ K thỏa mãn phương trình sau:</p>
                    <p className={style.paragraph2}>
                        <img className={style.anhmhct} src='/Elliptic1.4.png'></img>
                    </p>
                    <p className={style.paragraph}>Cùng với một điểm vô cực θ, trong đó phải thỏa mãn hai điều kiện:</p>
                    <p className={style.paragraph2}>
                        <img className={style.anhmhct2} src='/Elliptic1.5.png'></img>
                    </p>
                    <p className={style.paragraph}>Điều kiện 4a^3 + 27b^2 ≠ 0 đảm bảo rằng đường cong elliptic không có điểm kỳ dị (singular point), tức là đường cong là "trơn" và không có giao điểm tự thân.</p>
                    <h5 style={{ fontWeight: "bold" }}>Kí hiệu</h5>
                    <p className={style.paragraph}>Đường cong Elliptic trên trường K được ký hiệu E(K). Số lượng các điểm nguyên trên E ký hiệu là #E(K) , đơn giản là #E. Một đường cong Elliptic là tập hợp tất cả các điểm thỏa mãn công thức trên.</p>
                    <p className={style.paragraph2}>
                        <img className={style.anhmh} src='/Elliptic1.2.png'></img>
                    </p>
                    <p className={style.gc}><i>Minh họa về đường cong Eliptic y^2 = x^3 - 6x + 7 trên VS Code</i></p>
                    
                </div>
 
            </div>
        </>
    )
}
export default Elliptic1