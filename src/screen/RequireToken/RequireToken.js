import React from 'react'
import style from './RequireToken.module.css'

function Search() {
  return (
    <>
      <div className={style.subbanner2}>
        <img src="/plugin.png"></img>
        <div className={style.title2}>
          <div className={style.contain2}>
            <span className={style.tieude2}>GỬI YÊU CẦU MỞ KHÓA TOKEN</span>
          </div>
        </div>
      </div>
      <div className={style.tracuu}>
        <div className={style.containtc}>
          <div className={style.holidayoff}>
            <div className={style.holidaytext}>
              <img src='https://ems.com.vn/img/icon/order-search.png'></img>
              <div>Vui lòng chọn chứng thư của Token:</div>
            </div>
            <div className={style.actoff}>
              <form className={style.formtracuu}>
                <div className={style.hangcss}>
                  <div className={style.phandai}>
                    <input type="text" placeholder="Chứng thư" autocomplete="off" value=""></input>
                  </div>
                  <div className={style.phanngan}>
                    <button className={style.nutbam}>Chọn</button>
                  </div>
                </div>
                <div className={style.hangcss}>
                  <div className={style.chuy}>
                    <i>Plugin E-CAMS cần được sẵn sàng hoặc được bật trước khi tra cứu.</i>
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