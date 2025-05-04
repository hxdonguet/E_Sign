import React from 'react'
import style from './AnotherServices.module.css'

function MPAnotherServices() {
    return (
        <>
            <div className={style.subbanner7}>
                <img src="/plugin.png"></img>
                <div className={style.title7}>
                    <div className={style.contain7}>
                        <span className={style.tieude7}>DỊCH VỤ E - SIGN</span>
                    </div>
                </div>
            </div>
            <div className={style.containanother}>
                <div className={style.service3}>
                    <h1 className={style.tieudedv3}>
                        <strong>TRANG DỊCH VỤ</strong>
                    </h1>
                </div>
                <div className={style.dvkhac3}>
                    <h2>MỞ KHÓA TOKEN</h2>
                    <div className={style.dvkhac3ct}>
                        <div className={style.wrnonrow3}>
                            <div className={style.colsm412_3}>
                                <div className={style.anothersv3}>
                                    <div className={style.dvk3_img3}>
                                        <div className={style.dvk3_icon3}>
                                            <img src='/token.png'></img>
                                        </div>
                                    </div>
                                    <div className={style.dvk3_title3}>
                                        <a href='/RequireToken'><h3>GỬI YÊU CẦU MỞ KHÓA TOKEN</h3></a>
                                    </div>
                                    <div className={style.dvk3_descrip3}>
                                        <p>Chọn chứng thư của Token để gửi yêu cầu mở khóa Token.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.colsm412_3}>
                                <div className={style.anothersv3}>
                                    <div className={style.dvk3_img3}>
                                        <div className={style.dvk3_icon3}>
                                            <img src='/token.png'></img>
                                        </div>
                                    </div>
                                    <div className={style.dvk3_title3}>
                                        <a href='/UnlockToken'><h3>THỰC HIỆN MỞ KHÓA TOKEN</h3></a>
                                    </div>
                                    <div className={style.dvk3_descrip3}>
                                        <p>Nhập mã kích hoạt để thực hiện mở khóa Token.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.colsm412_3}>
                                <div className={style.anothersv3}>
                                    <div className={style.dvk3_img3}>
                                        <div className={style.dvk3_icon3}>
                                            <img src='/token.png'></img>
                                        </div>
                                    </div>
                                    <div className={style.dvk3_title3}>
                                        <a href='/AnotherServices' onClick={() => {alert('Dịch vụ dừng cung cấp!')}}><h3>HỦY MỞ KHÓA TOKEN</h3></a>
                                    </div>
                                    <div className={style.dvk3_descrip3}>
                                        <p>Hủy kích hoạt để hủy yêu cầu kích hoạt Token.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.dvkhac3}>
                    <h2>CTS & CHỨNG THƯ SỐ</h2>
                    <div className={style.dvkhac3ct}>
                        <div className={style.wrnonrow3}>
                            <div className={style.colsm412_3}>
                                <div className={style.anothersv3}>
                                    <div className={style.dvk3_img3}>
                                        <div className={style.dvk3_icon3}>
                                            <img src='/token.png'></img>
                                        </div>
                                    </div>
                                    <div className={style.dvk3_title3}>
                                        <a href='/CheckCTS'><h3>KIỂM TRA TRẠNG THÁI CTS</h3></a>
                                    </div>
                                    <div className={style.dvk3_descrip3}>
                                        <p>Kiểm tra trạng thái chứng thư số.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.colsm412_3}>
                                <div className={style.anothersv3}>
                                    <div className={style.dvk3_img3}>
                                        <div className={style.dvk3_icon3}>
                                            <img src='/token.png'></img>
                                        </div>
                                    </div>
                                    <div className={style.dvk3_title3}>
                                        <a href='/DownloadCTS'><h3>TẢI VỀ CHỨNG THƯ SỐ</h3></a>
                                    </div>
                                    <div className={style.dvk3_descrip3}>
                                        <p>Tải về chứng thư số.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.colsm412_3}>
                                <div className={style.anothersv3}>
                                    <div className={style.dvk3_img3}>
                                        <div className={style.dvk3_icon3}>
                                            <img src='/token.png'></img>
                                        </div>
                                    </div>
                                    <div className={style.dvk3_title3}>
                                        <a href='/CapBuCTS'><h3>CẤP BÙ CHỨNG TỪ SỐ</h3></a>
                                    </div>
                                    <div className={style.dvk3_descrip3}>
                                        <p>Triển khai chương trình cấp bổ sung thời hạn cho những khách hàng đang sử dụng dịch vụ chữ ký số.</p>
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
export default MPAnotherServices