import React from 'react'
import style from './DownloadCTS.module.css'

function DownloadCTS() {
  return (
    <>
      <div className={style.subbanner2}>
        <img src="/plugin.png"></img>
        <div className={style.title2}>
          <div className={style.contain2}>
            <span className={style.tieude2}>TẢI VỀ CHỨNG THƯ SỐ</span>
          </div>
        </div>
      </div>
      <div className={style.containerr}>
        <div className={style.roww}>
            <h2 className={style.h22}>
            Tải về chứng thư số
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
                        Chủ chứng thư:
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
                        Tỉnh/Thành phố:
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
                        Quận/Huyện:
                        <span className={style.batbuoc}>
                            (*)
                        </span>
                    </label>
                </div>
                <div className={style.colsm6xs12}>
                    <input type='text' className={style.sochungthu}></input>
                </div>
            </div>

            <div className={style.check}>
                <div className={style.nothing}></div>
                <div className={style.xacthuc}>
                    <button className={style.check_button}>Tải về</button>
                </div>
            </div>

        </div>
      </div>
    </>
  )
}

export default DownloadCTS