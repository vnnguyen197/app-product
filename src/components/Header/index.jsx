import Image from "next/image";
import React from "react";
import logoLongTho from "../../assets/imgs/gach/1.png";
import logo from "../../assets/imgs/gach/zyro-image.png";
import style from "./style.module.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter()

  return (
    <div className={style.main}>
      <div className={style.images}>
        <Image
          src={logoLongTho}
          style={{
            objectFit: "contain",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
          height="417px"
          alt="logo"
        />
      </div>
      <div className={style.menu}>
        <div className={style.styleImg}>
          <Image src={logo} width={100} height={45} alt="logo" />
        </div>
        <div className={style.items} onClick={() => router.push('/')}>trang chủ</div>
        <div className={style.items}>
          giới thiệu <ArrowDropDownIcon />
        </div>
        <div className={style.items}>
          năng lực <ArrowDropDownIcon />
        </div>
        <div className={style.items}>
          sản phẩm <ArrowDropDownIcon />
          <div className={style.listItems}>
            <div className={style.titleProduct} onClick={() => router.push('/product')}>Gạch lát terrazzo</div>
            <div className={style.titleProduct}>Đang update...</div>
          </div>
        </div>
        <div className={style.items}>báo giá</div>
        <div className={style.items}>video</div>
        <div className={style.items}>liên hệ</div>
      </div>
      <div className="menu"></div>
    </div>
  );
}

export default Header;
