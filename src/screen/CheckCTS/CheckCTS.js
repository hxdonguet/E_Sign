import React from 'react'
import style from './CheckCTS.module.css'
import { faRefresh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CheckCTS() {
  return (
    <>
      <div className={style.subbanner2}>
        <img src="/plugin.png"></img>
        <div className={style.title2}>
          <div className={style.contain2}>
            <span className={style.tieude2}>KIỂM TRA TRẠNG THÁI CHỨNG THƯ SỐ</span>
          </div>
        </div>
      </div>
      <div className={style.containerr}>
        <div className={style.roww}>
            <h2 className={style.h22}>
            Kiểm tra trạng thái chứng thư số
            </h2>

            <div className={style.colsmxs12}>
                <div className={style.colsm3xs12}>
                    <label className={style.sct}>
                        Số chứng thư:
                        <span className={style.batbuoc}>
                            (*)
                        </span>
                    </label>
                </div>
                <div className={style.colsm6xs12}>
                    <input type='text' className={style.sochungthu}></input>
                </div>
            </div>

            <div className={style.colsmxs12}>
                <div className={style.colsm3xs12}>
                    <label className={style.sct}>
                        CAPTCHA:
                    </label>
                </div>
                <div className={style.capt}>
                    <p className={style.captparent}>
                        <img className={style.captimg} src="https://www.vnpt-ca.vn:443/khach-hang/GetCaptchaImage.action?0.35910624400499036"></img>
                    </p>
                    <FontAwesomeIcon icon={faRefresh} className={style.iconfont}></FontAwesomeIcon>
                </div>
            </div>

            <div className={style.colsmxs12}>
                <div className={style.colsm3xs12}>
                    <label className={style.sct}>
                        Xác thực CAPTCHA:
                        <span className={style.batbuoc}>
                            (*)
                        </span>
                    </label>
                </div>
                <div className={style.xacthuc}>
                    <input type='text' className={style.xacthuccpt}></input>
                </div>
            </div>

            <div className={style.check}>
                <div className={style.nothing}></div>
                <div className={style.xacthuc}>
                    <button className={style.check_button}>Kiểm tra</button>
                </div>
            </div>

        </div>
      </div>
    </>
  )
}

export default CheckCTS