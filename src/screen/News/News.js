import React from 'react'
import style from './News.module.css'

function News() {
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
                        <strong>TRANG THÔNG TIN HỆ THỐNG E - SIGN</strong>
                    </h1>
                </div>
                <div className={style.toprow}>
                    <div className={style.col812}>
                        <div className={style.data}>
                            <div className={style.newsleft}>
                                <a className={style.tt} href=''>
                                    <img className={style.imgnews} src='https://sslinsights.com/wp-content/uploads/2024/07/what-is-ecdsa-encryption.webp'></img>
                                    <div className={style.titlenews}>
                                        <a className={style.titlenews} href='/Intro1'>Giứi thiệu đề tài</a>
                                    </div>
                                    <div className={style.desnew}>
                                         Đề tài "Xây dựng hệ thống chữ ký số ECDSA" nhằm mục đích không chỉ nghiên cứu về mặt lý thuyết và toán học đằng sau ECC, mà còn tập trung vào việc khám phá và phân tích các ứng dụng thực tế của nó, một trong số đó là ECDSA – Thuật toán sinh chữ ký số dựa trên đường cong Eliptic.
                                    </div>
                                    <div className={style.showname}>
                                        <div className={style.sub1}>
                                            <img className={style.imgsub1} src='https://ems.com.vn/img/icon/tags.png'></img>
                                            <span>Đường cong Elliptic</span>
                                        </div>
                                        <div className={style.sub2}>
                                            <img className={style.imgsub2} src='https://ems.com.vn/img/icon/calendar.png'></img>
                                            <span>07/05/2025</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={style.col412}>
                        <div className={style.newsright}>
                            <div className={style.titlenews}>Tin nổi bật</div>
                            <ul className={style.listnewsright}>
                                <li className={style.tomtat}>
                                    <a className={style.ndtin}>
                                        <div className={style.anhmh}>
                                            <img src='https://i.ytimg.com/vi/A2KNrgiWquU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLARRr-_PCpC85KYFZLFeFFeek8p2w'></img>
                                        </div>
                                        <div className={style.ct}>
                                            <a href='/Intro2' className={style.cnt}>Mục tiêu bài toán</a>
                                            <div className={style.subtitle}>
                                                <div className={style.subtilenews}>
                                                    <img className={style.anhmh2} src='https://ems.com.vn/img/icon/tags.png'></img>
                                                    <span>Đường cong Elliptic</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className={style.tomtat}>
                                    <a className={style.ndtin}>
                                        <div className={style.anhmh}>
                                            <img src='https://cf-assets.www.cloudflare.com/zkvhlag99gkb/7C9LODC0OpfZlr9E8kqrSP/4248aa3bd2bf09e9f2c5eb7073c8ccfe/image00.png'></img>
                                        </div>
                                        <div className={style.ct}>
                                            <a href='/Intro3' className={style.cnt}>Định nghĩa bài toán</a>
                                            <div className={style.subtitle}>
                                                <div className={style.subtilenews}>
                                                    <img className={style.anhmh2} src='https://ems.com.vn/img/icon/tags.png'></img>
                                                    <span>Đường cong Elliptic</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={style.listofnews}>
                    <div className={style.col12}>
                        <div className={style.chimuc}>
                            <div className={style.ndchimuc}>Đường cong Elliptic</div>
                            <div className={style.more}>
                                <a href='#'>Chuyển lên đầu trang</a>
                            </div>
                        </div>
                        <div className={style.roww}>
                            <div className={style.lg4md6}>
                                <div className={style.card}>
                                    <a href='/Elliptic1'>
                                        <img className={style.anhtin} src='https://www.vmware.com/media/blt8c9a8aaca0ffd4ac/bltf43dda427c8639e5/66d186618950de33cfc38385/elliptic-curve-cryptography-diagram.png'></img>
                                        <div className={style.ndtintuc}>
                                            <span className={style.titlelink}>
                                                Tổng quan về đường cong Elliptic
                                            </span>
                                            <p className={style.mota}>
                                                Giới thiệu chung: Định nghĩa, điều kiện và ví dụ minh họa về đường cong Elliptic.
                                            </p>
                                            <div className={style.chitiet}>
                                                <div className={style.chitietleft}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/calendar.png'></img>
                                                    <span className={style.spantin}>07/05/2025</span>
                                                </div>
                                                <div className={style.chitietright}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/tags.png'></img>
                                                    <span className={style.spantin}>Đường cong Elliptic</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className={style.lg4md6}>
                                <div className={style.card}>
                                    <a href='/Elliptic2'>
                                        <img className={style.anhtin} src='https://cdn.arstechnica.net/wp-content/uploads/2013/10/elliptic-curve-crypt-image02.gif'></img>
                                        <div className={style.ndtintuc}>
                                            <span className={style.titlelink}>
                                                Các phép toán trên đường cong
                                            </span>
                                            <p className={style.mota}>
                                                Phép cộng, phép nhân vô hướng và các phương pháp tính trên đường cong Elliptic.
                                            </p>
                                            <div className={style.chitiet}>
                                                <div className={style.chitietleft}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/calendar.png'></img>
                                                    <span className={style.spantin}>07/05/2025</span>
                                                </div>
                                                <div className={style.chitietright}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/tags.png'></img>
                                                    <span className={style.spantin}>Đường cong Elliptic</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className={style.lg4md6}>
                                <div className={style.card}>
                                    <a href='/Elliptic3'>
                                        <img className={style.anhtin} src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/EllipticCurveCatalog.svg/500px-EllipticCurveCatalog.svg.png'></img>
                                        <div className={style.ndtintuc}>
                                            <span className={style.titlelink}>
                                                Xây dựng và minh họa các phép toán
                                            </span>
                                            <p className={style.mota}>
                                                Xây dựng đường cong Elliptic và minh họa các phép toán bằng ngôn ngữ lập trình Python.
                                            </p>
                                            <div className={style.chitiet}>
                                                <div className={style.chitietleft}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/calendar.png'></img>
                                                    <span className={style.spantin}>07/05/2025</span>
                                                </div>
                                                <div className={style.chitietright}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/tags.png'></img>
                                                    <span className={style.spantin}>Đường cong Elliptic</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.listofnews}>
                    <div className={style.col12}>
                        <div className={style.chimuc}>
                            <div className={style.ndchimuc}>Hệ mật ECC</div>
                            <div className={style.more}>
                                <a href='#'>Chuyển lên đầu trang</a>
                            </div>
                        </div>
                        <div className={style.roww}>
                            <div className={style.lg4md6}>
                                <div className={style.card}>
                                    <a href='/ECC1'>
                                        <img className={style.anhtin} src='https://images.squarespace-cdn.com/content/v1/5ece2ac40514bb77afb1018d/1629365941182-ZL2WSH2AIBWBD6D0IQ0A/Elliptic+Curve+Cryptography.jpg'></img>
                                        <div className={style.ndtintuc}>
                                            <span className={style.titlelink}>
                                                Đường cong trên trường hữu hạn & Phương pháp giải ECDLP
                                            </span>
                                            <p className={style.mota}>
                                                Sơ lược về đường cong trên trường số thực và các phương pháp: Bước nhỏ - Bước lớn, Pholig - Hellman...
                                            </p>
                                            <div className={style.chitiet}>
                                                <div className={style.chitietleft}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/calendar.png'></img>
                                                    <span className={style.spantin}>07/05/2025</span>
                                                </div>
                                                <div className={style.chitietright}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/tags.png'></img>
                                                    <span className={style.spantin}>Hệ mật ECC</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className={style.lg4md6}>
                                <div className={style.card}>
                                    <a href='/ECC2'>
                                        <img className={style.anhtin} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg83kVdJrON4LBQCUpwBTrqHmua0ef1CMSBQ&s'></img>
                                        <div className={style.ndtintuc}>
                                            <span className={style.titlelink}>
                                                Sơ đồ trao đổi khóa ECDH
                                            </span>
                                            <p className={style.mota}>
                                                Bài toán CDH, DDH và đánh giá bảo mật.
                                            </p>
                                            <div className={style.chitiet}>
                                                <div className={style.chitietleft}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/calendar.png'></img>
                                                    <span className={style.spantin}>07/05/2025</span>
                                                </div>
                                                <div className={style.chitietright}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/tags.png'></img>
                                                    <span className={style.spantin}>Hệ mật ECC</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className={style.lg4md6}>
                                <div className={style.card}>
                                    <a href='/ECC3'>
                                        <img className={style.anhtin} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnNRGlUwDqL0PDJbT1RwM_IJrXzGciJ-GWrw&s'></img>
                                        <div className={style.ndtintuc}>
                                            <span className={style.titlelink}>
                                                Sơ đồ trao đổi khóa EC - Elgamal
                                            </span>
                                            <p className={style.mota}>
                                                Tổng quan và ví dụ minh họa về EC - Elgamal.
                                            </p>
                                            <div className={style.chitiet}>
                                                <div className={style.chitietleft}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/calendar.png'></img>
                                                    <span className={style.spantin}>07/05/2025</span>
                                                </div>
                                                <div className={style.chitietright}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/tags.png'></img>
                                                    <span className={style.spantin}>Hệ mật ECC</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.listofnews}>
                    <div className={style.col12}>
                        <div className={style.chimuc}>
                            <div className={style.ndchimuc}>Chữ ký số & ECDSA</div>
                            <div className={style.more}>
                                <a href='#'>Chuyển lên đầu trang</a>
                            </div>
                        </div>
                        <div className={style.roww}>
                            <div className={style.lg4md6}>
                                <div className={style.card}>
                                    <a href='/ECDSA1'>
                                        <img className={style.anhtin} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzW17xvYrlmejRBIs6BiLtzoQ1-G_HY51p7w&s'></img>
                                        <div className={style.ndtintuc}>
                                            <span className={style.titlelink}>
                                                Khái niệm và sơ đồ chữ ký số
                                            </span>
                                            <p className={style.mota}>
                                                Mở đầu về chữ ký số.
                                            </p>
                                            <div className={style.chitiet}>
                                                <div className={style.chitietleft}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/calendar.png'></img>
                                                    <span className={style.spantin}>07/05/2025</span>
                                                </div>
                                                <div className={style.chitietright}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/tags.png'></img>
                                                    <span className={style.spantin}>Chữ ký số & ECDSA</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className={style.lg4md6}>
                                <div className={style.card}>
                                    <a href='/ECDSA2'>
                                        <img className={style.anhtin} src='https://whitehat.vn/attachments/1676626349464-png.13412/'></img>
                                        <div className={style.ndtintuc}>
                                            <span className={style.titlelink}>
                                                Hệ thống chữ ký số ECDSA
                                            </span>
                                            <p className={style.mota}>
                                                Hệ thống chữ ký số ECDSA. Áp dụng cho đoạn text & Văn bản PDF.
                                            </p>
                                            <div className={style.chitiet}>
                                                <div className={style.chitietleft}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/calendar.png'></img>
                                                    <span className={style.spantin}>07/05/2025</span>
                                                </div>
                                                <div className={style.chitietright}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/tags.png'></img>
                                                    <span className={style.spantin}>Chữ ký số & ECDSA</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className={style.lg4md6}>
                                <div className={style.card}>
                                    <a href='/About'>
                                        <img className={style.anhtin} src='https://linx.software/docs/6/reference/plugins/cryptography/content/processverifyecdsasignature.png'></img>
                                        <div className={style.ndtintuc}>
                                            <span className={style.titlelink}>
                                                Hệ thống chứng thực chữ ký số
                                            </span>
                                            <p className={style.mota}>
                                               Giới thiệu về hệ thống chứng thực chữ kí số.
                                            </p>
                                            <div className={style.chitiet}>
                                                <div className={style.chitietleft}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/calendar.png'></img>
                                                    <span className={style.spantin}>07/05/2025</span>
                                                </div>
                                                <div className={style.chitietright}>
                                                    <img className={style.imgtin} src='https://ems.com.vn/img/icon/tags.png'></img>
                                                    <span className={style.spantin}>Chữ ký số & ECDSA</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default News