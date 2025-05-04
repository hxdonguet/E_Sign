import React, { useState } from 'react'
import style from './Sidebar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faFileImport, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'



function Sidebar() {
    return (
        <aside className={style.mainsb}>
            <div className={style.dropdown}>
                <a href='/Dashboard' className={style.brandlink}>
                    <h3 className={style.p0m0}>
                        <b className={style.mauchu}>E - SIGN</b>
                    </h3>
                </a>
            </div>
            <div className={style.pb4mb4}>
                <div className={style.os_padding}>
                    <div className={style.os_viewport}>
                        <div className={style.os_content}>
                            <nav className={style.mt2}>
                                <ul className={style.navpills}>
                                    <li className={style.navdrop}>
                                        <Link to='/Dashboard'><a className={style.navlinkedit}>
                                            <FontAwesomeIcon icon={faCircleUser} className={style.navicon}/>
                                            <p className={style.navnd}>Trang chủ</p>
                                        </a></Link>
                                    </li>
                                    <li className={style.navdrop}>
                                       <Link to='/HistoryUpload'><a className={style.navlinkedit}>
                                            <FontAwesomeIcon icon={faFileImport} className={style.navicon}/>
                                            <p className={style.navnd}>Lịch sử tải lên</p>
                                        </a></Link> 
                                    </li>
                                    <li className={style.navdrop}>
                                       <Link to='/Users'><a className={style.navlinkedit}>
                                            <FontAwesomeIcon icon={faUser} className={style.navicon}/>
                                            <p className={style.navnd}>Quản lý người dùng</p>
                                        </a></Link> 
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar