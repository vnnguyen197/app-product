import Image from "next/image";
import React from "react";
import logoLongTho from "../../assets/imgs/logoo3.jpg";
import logo from "../../assets/imgs/gach/zyro-image.png";
import style from "./style.module.scss";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
  return (
    <div className={style.main}>
      <div className={style.images}>
        <Image
          src={logoLongTho}
          style={{ objectFit: "contain", width:"100%", display: 'flex', alignItems: 'center' }}
          height="417px"
          alt="logo"
        />
      </div>
      <div className={style.menu}>
        <div className={style.styleImg}>
          <Image src={logo} width={100} height={45} alt="logo" />
        </div>
        <div className={style.items}>trang chủ</div>
        <div className={style.items}>giới thiệu <ArrowDropDownIcon/></div>
        <div className={style.items}>năng lực <ArrowDropDownIcon/></div>
        <div className={style.items}>sản phẩm <ArrowDropDownIcon/></div>
        <div className={style.items}>báo giá</div>
        <div className={style.items}>video</div>
        <div className={style.items}>liên hệ</div>
        
      </div>
      <div className="menu"></div>
    </div>
  );
}

export default Header;
