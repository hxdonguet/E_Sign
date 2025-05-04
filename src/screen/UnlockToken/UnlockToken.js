import React from 'react'
import style from './UnlockToken.module.css'

function Search() {
  return (
    <>
      <div className={style.subbanner2}>
        <img src="/plugin.png"></img>
        <div className={style.title2}>
          <div className={style.contain2}>
            <span className={style.tieude2}>THỰC HIỆN MỞ KHÓA TOKEN</span>
          </div>
        </div>
      </div>
      <div className={style.tracuu}>
        <div className={style.containtc}>
          <div className={style.holidayoff}>
            <div className={style.holidaytext}>
              <img src='https://ems.com.vn/img/icon/order-search.png'></img>
              <div>Vui lòng nhập mã kích hoạt (*):</div>
            </div>
            <div className={style.actoff}>
              <form className={style.formtracuu}>
                <div className={style.hangcss}>
                  <div className={style.phandai}>
                    <input type="text" placeholder="Mã kích hoạt..." autocomplete="off" value=""></input>
                  </div>
                  <div className={style.phanngan}>
                    <button className={style.nutbam}>Chọn</button>
                  </div>
                </div>
                <div className={style.hangcss}>
                  <div className={style.chuy}>
                    <i>(*): Không được bỏ trống.</i>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Search