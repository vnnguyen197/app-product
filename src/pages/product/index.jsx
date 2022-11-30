import * as React from "react";
import Image from "next/image";
import logoLongTho from "../../assets/imgs/gach/gach_product.jpg";
import style from "./style.module.scss";
import FullWidthTabs from "./option";

function Product() {
  return (
    <div className={style.container}>
      <div className={style.containerContent}>
        <h1>Gạch lát Terrazzo</h1>
        <div className={style.main}>
          <div className={style.contentLeft}>
            <Image src={logoLongTho} width={404} height={361} alt="" />
          </div>
          <div className={style.contentRight}>
            <div className={style.title}>
              Gạch lát Terrazzo Long Thọ – Lịch sự đường phố, sang trọng sân
              vườn – Gạch Terrazzo sản xuất tại Công ty cổ phần Long Thọ là loại
              gạch xi măng sản xuất theo công nghệ ép kín hơi với dây chuyền
              thiết bị hiện đại của Italy. Có khả năng làm nổi bật vẻ đẹp của
              chất liệu cấu thành do cấu trúc đồng nhất và chắc rắn, được đánh
              bóng bề mặt một cách tinh vi. Với lực ép lên đến vài trăm tấn cho
              phép sản xuất Gạch Terrazzo với kích thước 500x500mm, đạt TCVN.
            </div>
            <div className={style.title}>
              – Đa dạng màu sắc, hoa văn đáp ứng mọi nhu cầu khách hàng.
            </div>
            <div className={style.title}>
              – Gạch Terrazzo Long Thọ đã được hợp chuẩn, kiểm soát chất lượng
              theo TCVN 7744 : 2013
            </div>
          </div>
        </div>
      </div>
      <div>
        <FullWidthTabs />
      </div>
    </div>
  );
}

export default Product;
