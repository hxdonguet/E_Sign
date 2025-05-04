import React from 'react'
import style from './DeleteForm.module.css'
import { useDeleteEmployeeMutation } from '../../app/features/api/employeeSlice'
function DeleteForm(props) {
    const [remove] = useDeleteEmployeeMutation();
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            await remove({ id: props.employee.id }).unwrap();
            props.handleRemove(props.index);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className={style.overlay}>
            <div className={style.modal_content}>
                <form className={style.modal_form} onSubmit={handleSubmit}>
                    <div className={style.box_delete}>
                        <h2>Xóa</h2>
                        <p>Bạn chắc chắn muốn xóa?</p>
                    </div>
                    <div className={style.field_delete}>
                        <button className={style.btn_close_delete} onClick={() => props.handleRemove(props.index)}>
                            Xác nhận</button>
                        <button className={style.btn_update_delete}>
                            Hủy bỏ
                        </button>

                    </div>
                </form>
            </div>
        </div>

    )
}

export default DeleteForm