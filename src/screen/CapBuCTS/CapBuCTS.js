import React from 'react'
import style from './CapBuCTS.module.css'
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CapBuCTS() {
    return (
        <>
            <div className={style.subbanner2}>
                <img src="/plugin.png"></img>
                <div className={style.title2}>
                    <div className={style.contain2}>
                        <span className={style.tieude2}>CẤP BÙ CHỨNG THƯ SỐ</span>
                    </div>
                </div>
            </div>

            <section className={style.containerr}>
                <div className={style.containerr2}>
                    <div className={style.roww}>

                        <div className={style.cotnoidung}>
                            <h1 className={style.tieude}>
                                Cấp bù chứng thư số E - Sign CA
                            </h1>
                            <h2 className={style.tomtat}>
                                E - Sign triển khai chương trình cấp bổ sung thời hạn cho những khách hàng đang sử dụng dịch vụ chữ ký số do E - Sign cung cấp có thời hạn chứng thư số hiển thị trên chứng thư số là ngày 07/05/2025.
                            </h2>
                            <div className={style.ndchinh}>
                                <ul className={style.listndchinh}>
                                    <li className={style.ndct}>
                                        Đây là chương trình được thực hiện hoàn toàn miễn phí bởi E - Sign nhằm đảm bảo quyền lợi cho các khách hàng theo gói cước dịch vụ đã đăng ký.
                                    </li>
                                    <li className={style.ndct}>
                                        Quý khách vui lòng kiểm tra và thực hiện ngay chương trình cấp bổ sung thời hạn nếu chữ ký số của Quý khách đang thuộc điều kiện nêu trên để không bị gián đoạn dịch vụ.
                                    </li>
                                    <li className={style.ndct}>
                                        Quý khách có thể thực hiện theo các cách sau đây:
                                    </li>
                                    <ul className={style.listndchinh}>
                                        <li className={style.ndct}>
                                            <b>Cách 1: </b>
                                            Chủ động thực hiện tại liên kết Cấp bù chủ động theo Video hướng dẫn.
                                        </li>
                                        <li className={style.ndct}>
                                            <b>Cách 2: </b>
                                            Ấn vào liên kết đã được gửi về email và làm theo Video hướng dẫn. (Chỉ áp dụng cho khách hàng đã nhận được email thông báo cấp bù).
                                        </li>
                                    </ul>
                                </ul>
                            </div>
                            <div className={style.hero_action}>
                                <a className={style.batdau}>
                                    <span className={style.batdau_2}>
                                        Bắt đầu ngay
                                    </span>
                                    <FontAwesomeIcon icon={faArrowRight} className={style.arrowright}></FontAwesomeIcon>
                                </a>
                                <button className={style.viewmore}>
                                    Tìm hiểu thêm
                                    <FontAwesomeIcon icon={faArrowDown} className={style.arrowdown}></FontAwesomeIcon>
                                </button>
                            </div>
                        </div>

                        <div className={style.cothinhanh}>
                            <img src="https://smartca.vnpt.vn/styles/images/landingpage/bg-change-certificate.svg"></img>
                        </div>

                    </div>
                </div>
            </section>

            <section className={style.about_box}>
                <div className={style.containerr3}>

                    <div className={style.section_title}>
                        <h2 className={style.sec_title}>
                            <div className={style.smallline}></div>
                            Hướng dẫn cấp bù chứng thư số E - Sign CA 
                            <div className={style.blueline}></div>
                        </h2>
                        <p className={style.token}>
                            Vui lòng đảm bảo kết nối thiết bị USB Token với máy tính và thực hiện theo các hướng dẫn dưới đây:
                        </p>
                    </div>

                    <div className={style.roww4}>

                        <div className={style.videohd}>
                            <div className={style.logohd}>
                                <img src="https://smartca.vnpt.vn/styles/images/landingpage/Logo_SmartCA_bg.svg"></img>
                            </div>
                            <a href="https://www.youtube.com/watch?v=-PxrgQxTDss" className={style.playback}>
                                <div className={style.playback_1}></div>
                                <div className={style.playback_2}></div>
                            </a>
                            <div className={style.desc}>
                                <p>Hướng dẫn cấp bù</p>
                                <p>chữ kí số ECDSA</p>
                            </div>
                        </div>

                        <div className={style.instruction}>

                            <div className={style.step}>
                                <div className={style.numberofstep}>
                                    <div className={style.numberofstep_1}></div>
                                    01
                                    <div className={style.numberofstep_2}></div>
                                </div>
                                <h4 className={style.step_title}>
                                    Cài đặt Plugin hỗ trợ
                                    <i className={style.step_note}>(Bỏ qua bước này nếu máy tính đã cài đặt Plugin).</i>
                                </h4>
                                <p className={style.step_desc}>Vui lòng xem hướng dẫn tải và cài đặt Plugin tại đây</p>
                                <div className={style.step_download}>
                                    <a href="#" className={style.step_download2}>Tải Plugin kết nối USB Token</a>
                                </div>
                            </div>

                            <div className={style.step}>
                                <div className={style.numberofstep}>
                                    <div className={style.numberofstep_1}></div>
                                    02
                                    <div className={style.numberofstep_2}></div>
                                </div>
                                <h4 className={style.step_title}>
                                    Kiểm tra mail thông báo cấp bù
                                </h4>
                                <ul className={style.step_by_step}>
                                    <li className={style.step_by_step_ct}>
                                        <p className={style.step_desc}> - E - Sign sẽ gửi mail thông báo cấp bù qua địa chỉ email của Quý khách.</p>
                                        <p className={style.step_desc}> - Vui lòng kiểm tra hòm thư để nhận mã kích hoạt.</p>
                                        <p className={style.step_desc}> - Trường hợp Quý khách chưa nhận được mail thông báo cấp bù, vui lòng liên hệ nhân viên kinh doanh hoặc Tổng đài hỗ trợ.</p>
                                    </li>
                                </ul>
                            </div>

                            <div className={style.step}>
                                <div className={style.numberofstep}>
                                    <div className={style.numberofstep_1}></div>
                                    03
                                    <div className={style.numberofstep_2}></div>
                                </div>
                                <h4 className={style.step_title}>
                                    Kết nối Token
                                </h4>
                                <ul className={style.step_by_step}>
                                    <li className={style.step_by_step_ct}>
                                        <p className={style.step_desc}> - Trong thời gian thực hiện, Quý khách vui lòng giữ kết nối USB Token với máy tính và đảm bảo kết nối mạng.</p>
                                        <p className={style.step_desc}> - Quý khách có thể xem Hướng dẫn xử lý lỗi kết nối USB Token tại phần "Hướng dẫn sử dụng".</p>
                                    </li>
                                </ul>
                            </div>

                            <div className={style.step}>
                                <div className={style.numberofstep}>
                                    <div className={style.numberofstep_1}></div>
                                    04
                                    <div className={style.numberofstep_2}></div>
                                </div>
                                <h4 className={style.step_title}>
                                    Kích hoạt chứng thư số
                                </h4>
                            </div>

                            <div className={style.step}>
                                <div className={style.numberofstep}>
                                    <div className={style.numberofstep_1}></div>
                                    05
                                    <div className={style.numberofstep_2}></div>
                                </div>
                                <h4 className={style.step_title}>
                                    Hoàn thành
                                </h4>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

        </>
    )
}

export default CapBuCTS