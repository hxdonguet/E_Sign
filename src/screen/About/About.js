import React from 'react'
import style from './About.module.css'

function About() {
    return (
        <>
        <div className={style.subbanner}>
            <img src="/plugin.png"></img>
            <div className={style.title}>
                <div className={style.contain}>
                    <span className={style.tieude}>Giới thiệu về hệ thống chứng thực chữ ký số</span>
                </div>
            </div>
        </div>
        <div className={style.page}>
            <div className={style.contain2}>
                <div>
                    <div className={style.introduce}>
                        <ul>
                            <li>
                                <p className={style.ele}> Tên hệ thống:
                                <span className={style.td}> Hệ thống chứng thực chữ ký số</span>
                                </p>
                            </li>
                            <li>
                                <p className={style.ele}> Tên viết tắt:
                                <span className={style.td}> E - Sign</span>
                                </p>
                            </li>
                            
                        </ul>
                    </div>
                    <div className={style.tongquan}>
                        <div className={style.anhtongquan}>
                            <img src='/About (1).png' className={style.anh1}></img>
                        </div>
                        <div className={style.gttongquan}>
                            <p className={style.doanvan}>
                                <span className={style.menhde}>
                                    <strong>TỔNG QUAN HỆ THỐNG</strong>
                                </span>
                            </p>
                            <p className={style.doanvan}>
                                Hệ thống tượng trưng cho một đơn vị gồm các phòng ban được phân cấp. Người dùng trong hệ thống được cấp quyền truy cập khác nhau, mỗi người dùng có Username và Password để đăng nhập vào hệ thống và được cấp một chữ ký số riêng biệt. Khi chia sẻ tài liệu lên hệ thống, luồng công việc sẽ được thực hiện như sau:
                            </p>
                            <p className={style.doanvan}>•	User đăng nhập vào hệ thống bằng tài khoản đăng ký.</p>
                            <p className={style.doanvan}>•	Trước khi upload tài liệu lên, User cần mã hóa và ký số vào tài liệu dựa vào ứng dụng trên hệ thống.</p>
                            <p className={style.doanvan}>•	Để ký số lên tài liệu, người dùng có thể sử dụng các phần mềm để vào để chọn chứng thư số.</p>
                            <p className={style.doanvan}>•	Hệ thống gửi thông báo ký số thành công.</p>
                            <p className={style.doanvan}>•	Người dùng tài liệu gửi lên, và bắt đầu kiểm tra trạng thái chữ ký số.</p>
                            
                        </div>
                    </div>
                    <div className={style.tongquan}>
                        <div className={style.anhtongquan}>
                            <img src='/About (3).png' className={style.anh1}></img>
                        </div>
                        <div className={style.gttongquan}>
                            <p className={style.doanvan}>
                                <span className={style.menhde}>
                                    <strong>MÔI TRƯỜNG PHÁT TRIỂN ỨNG DỤNG</strong>
                                </span>
                            </p>
                            <p className={style.doanvan}>Môi trường phát triển ứng dụng web:</p>
                            <p className={style.doanvan}>•	CPU: Intel Core I5 hoặc cao hơn;</p>
                            <p className={style.doanvan}>•	RAM: 4 GB trở lên;</p>
                            <p className={style.doanvan}>•	SDD: Dung lượng trống trên 30 GB.</p>
                            <p className={style.doanvan}>Môi trường phần mềm sử dụng:</p>
                            <p className={style.doanvan}>•	Hệ điều hành: Windows 10;</p>
                            <p className={style.doanvan}>•	Công cụ phát triển: Visual Studio Code 2022.</p>
                        </div>
                    </div>
                    <div className={style.tongquan}>
                        <div className={style.anhtongquan}>
                            <img src='About (2).png' className={style.anh1}></img>
                        </div>
                        <div className={style.gttongquan}>
                            <p className={style.doanvan}>
                                <span className={style.menhde}>
                                    <strong>CÔNG NGHỆ SỬ DỤNG</strong>
                                </span>
                            </p>
                            <p className={style.doanvan}>Front - End:</p>
                            <p className={style.doanvan}>•	HTML - CSS - JS </p>
                            <p className={style.doanvan}>•	JQuery</p>
                            <p className={style.doanvan}>•	Bootstrap</p>
                            <p className={style.doanvan}>•	ReactJS</p>
                            <p className={style.doanvan}>Back - End:</p>
                            <p className={style.doanvan}>Do thời gian quá gấp (Từ 12/04/2025 đến 07/05/2025) nên phần BackEnd (Bao gồm Framework + HQT CSDL) tạm thời gác lại. Toàn bộ trang web đều là UI, đội phát triển sẽ hoàn thiện trong tương lai.</p>
                        </div>
                    </div>
                    <div className={style.findmore}>
                        <p className={style.tht}>
                            Tìm hiểu thêm
                        </p>
                        <div className={style.imgmore}>
                            <div className={style.item}>
                                <div className={style.itemsub}>
                                    <p className={style.anhmore}>
                                        <img src='/More.png' className={style.sup}></img>
                                    </p>
                                    <div className={style.morecontent}>
                                        <p><strong>Dịch vụ</strong></p>
                                        <p><a className={style.moreinfo} href='/AnotherServices'>Xem thêm</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.item}>
                                <div className={style.itemsub}>
                                    <p className={style.anhmore}>
                                        <img src='/ECC.jpg' className={style.sup}></img>
                                    </p>
                                    <div className={style.morecontent}>
                                        <p><strong>Kiến thức về ECC & ECDSA</strong></p>
                                        <p><a className={style.moreinfo} href='/News'>Xem thêm</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.item}>
                                <div className={style.itemsub}>
                                    <p className={style.anhmore}>
                                        <img src='/ECDSA_Main (1).png' className={style.sup}></img>
                                    </p>
                                    <div className={style.morecontent}>
                                        <p><strong>Hệ thống ECDSA (Trọng tâm đề tài)</strong></p>
                                        <p><a className={style.moreinfo} href='/ECDSA2'>Xem thêm</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default About