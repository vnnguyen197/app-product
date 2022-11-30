import React from "react";
import boCongThuong from "../../assets/imgs/gach/bocongthuong.jpg";
import style from "./styles.module.scss";
import Image from 'next/image'

function Footer() {
  return (
    <div className={style.mainfooter}>
      <div className={style.listItems}>
        <div className={style.title}>LIÊN HỆ</div>
        <div className={style.deps}>Công ty Cổ phần Long Thọ</div>
        <div className={style.items}>
          Địa chỉ: 200 Kinh Dương Vương, Thanh Khê Tây, Liên Chiểu, Đà Nẵng.
        </div>
        <div className={style.items}>Email: terrazzolongtho.com</div>
        <div className={style.items}>Phone: 0903 534 374</div>
        <div className={style.items}>Giấy chứng nhận ĐKKD số: 3300101519</div>
        <div className={style.items}>Người đại diện: Hoàng Phan Vĩnh Phước</div>
      </div>
      <div className={style.listItems}>
        <div className={style.title}>NỘI DUNG KHÁC</div>
        <div className={style.items}>Báo giá</div>
        <div className={style.items}>Chính sách bảo mật thông tin</div>
        <div className={style.items}>Quan hệ cổ đông</div>
        <div className={style.items}>Tư vấn hỗ trợ</div>
        <div className={style.items}>Hình ảnh hoạt động</div>
      </div>
      <div className={style.listItems3}>
        <Image src={boCongThuong} height={60} alt=""/>
        <div className={style.items}>Thống kê truy cập</div>
      </div>
      <div className={style.top}>Back to top</div>
    </div>
  );
}

export default Footer;
