import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import style from "./style.module.scss";
import hopChuan from "../../../assets/imgs/hopchuan.png";
import cuango from "../../../assets/imgs/CuangophiaBac1.jpg";
import Terrazzo3 from "../../../assets/imgs/Terrazzo3.jpg";
import prd1 from "../../../assets/imgs/prd1.jpg";
import prd2 from "../../../assets/imgs/prd2.jpg";
import prd3 from "../../../assets/imgs/prd3.jpg";
import prd4 from "../../../assets/imgs/prd4.jpg";
import prd5 from "../../../assets/imgs/prd5.jpg";
import prd6 from "../../../assets/imgs/prd6.jpg";
import prd7 from "../../../assets/imgs/prd7.jpg";
import prd8 from "../../../assets/imgs/prd8.jpg";
import prd9 from "../../../assets/imgs/prd9.jpg";

import Image from "next/image";
import Link from "next/link";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: 1237 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          sx={{ fontSize: "18px !important", fontWeight: "800 !important" }}
        >
          <Tab
            label="Giới thiệu sản phẩm"
            {...a11yProps(0)}
            sx={{ fontSize: "18px !important", fontWeight: "800 !important" }}
          />
          <Tab
            label="Thông số kỹ thuật"
            {...a11yProps(1)}
            sx={{ fontSize: "18px !important", fontWeight: "800 !important" }}
          />
          <Tab
            label="Báo giá"
            {...a11yProps(2)}
            sx={{ fontSize: "18px !important", fontWeight: "800 !important" }}
          />
          <Tab
            label="Ảnh công trình"
            {...a11yProps(3)}
            sx={{ fontSize: "18px !important", fontWeight: "800 !important" }}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className={style.items} style={{ color: "blue" }}>
            Gạch lát Terrazzo Long Thọ – Lịch sự đường phố, sang trọng sân vườn
          </div>
          <div className={style.items}>
            – Gạch Terrazzo sản xuất tại Công ty cổ phần Long Thọ là loại gạch
            xi măng sản xuất theo công nghệ ép kín hơi với dây chuyền thiết bị
            hiện đại của Italy. Có khả năng làm nổi bật vẻ đẹp của chất liệu cấu
            thành do cấu trúc đồng nhất và chắc rắn, được đánh bóng bề mặt một
            cách tinh vi. Với lực ép lên đến vài trăm tấn cho phép sản xuất Gạch
            Terrazzo với kích thước 500x500mm, đạt TCVN.
          </div>
          <div className={style.items}>
            – Đa dạng màu sắc, hoa văn đáp ứng mọi nhu cầu khách hàng.
          </div>
          <div className={style.items}>
            – Gạch Terrazzo Long Thọ đã được hợp chuẩn, kiểm soát chất lượng
            theo <span style={{ fontWeight: "bold" }}>TCVN 7744 : 2013</span>
          </div>
          <div>
            <Image src={hopChuan} alt="" />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div className={style.items}>
            Gạch Terrazzo được sản xuất bằng cách ép thuỷ lực 2 thành phần vữa
            riêng biệt lại với nhau: lớp thứ nhất - hay "lớp bề mặt" - và lớp
            thứ hai - hay "lớp dưới". Sự khác nhau giữa các viên gạch lát chủ
            yếu là ở hình dạng, kích thước và độ dày cũng như thành phần nguyên
            liệu tạo nên lớp thứ nhất và thành phần nguyên liệu đó là yếu tố
            quyết định đối với bề mặt hoàn thiện của lớp thứ nhất.
          </div>
          <div className={style.images}>
            <Image src={cuango} width={500} alt="" />
          </div>
          <div className={style.items} style={{ margin: "20px 0" }}>
            Với công nghệ ép kín hơi của OCEM có thể sản xuất ra các loại gạch
            lát sau:
          </div>
          <div className={style.items}>
            - Gạch lát có mài làm từ đá cẩm thạch và xi măng, gọi là "gạch
            Terrazzo", thành phần có nhiều bột đá cẩm thạch, mảnh vụn đá cẩm
            thạch hoặc granite, bột màu, xi măng trắng hoặc đen. Loại này bao
            gồm cả: gạch lát có mài được đánh bóng như gương và có thể vát cạnh
            dành cho sàn nhà có chất lượng cao đặc biệt, gạch trang trí (với 2 -
            5 màu khác nhau), gạch lát chịu mài mòn cao, gạch lát với lớp thứ
            nhất là những lát đá cẩm thạch lớn và cuối cùng là gạch có mài, đánh
            bóng, vát cạnh và gạch mỏng dùng lát sàn nhà và ốp tường đòi hỏi
            chất lượng cao.
          </div>
          <div className={style.images}>
            <Image src={Terrazzo3} width={500} alt="" />
          </div>
          <div className={style.items} style={{ margin: "20px 0" }}>
            - Gạch nhám lát ngoài trời, còn gọi là "pietrino": lớp thứ nhất được
            tạo thành bởi cát và xi măng, cũng có cả mảnh vụn đá cẩm thạch, xi
            măng đen hoặc hiếm khi trắng và bột màu. Loại gạch lát này dùng để
            lát vỉa hè, khu dành cho người đi bộ, các trung tâm lịch sử văn hoá,
            sân chơi, quảng trường, bãi đỗ xe,... Cấu trúc bề mặt với những hoa
            văn đa dạng hay mặt thô (giả đá, kiểu đá pocfia) có được là nhờ các
            đế cao su tạo hoa văn đặc biệt được đặt ở dưới đáy khuôn, bề mặt của
            đế cao su ngược lại hoàn toàn với bề mặt của gạch muốn sản xuất.
            Hiện có sẵn catalog cho hàng trăm các loại đế cao su để khách hàng
            chọn lựa, với nhiều kích thước khác nhau.
          </div>
          <div className={style.items} style={{ margin: "20px 0" }}>
            - Gạch lát ngoài trời mài hoặc bắn hạt (hoàn toàn hay một phần),
            loại này được tạo ra nhờ quá trình mài hoặc bắn hạt hoặc cả hai quá
            trình liên tục. Với các thiết bị đặc biệt (mặt nạ để bắn hạt hoặc đế
            cao su đặc biệt được lắp vào máy ép), có thể mài hoặc bắn hạt một
            phần viên gạch. Có thể có cách làm khác nữa là dùng búa gõ, bề mặt
            trên của viên gạch sẽ được đập bằng một loạt búa gõ chạy bằng khí
            nén thay cho việc bắn các hạt kim loại hình cầu.
          </div>
          <div className={style.items} style={{ margin: "20px 0" }}>
            - Gạch bê tông rửa: trên bề mặt của viên gạch, với số lượng lớn các
            hạt có kích thước tuỳ thuộc vào mức độ thẩm mỹ mà ta muốn, một số mm
            xi măng được bỏ đi để lộ ra hình dạng và màu của hạt. Loại gạch lát
            này thường được dùng ở những nước lạnh và có nhiều mưa (Bắc Mỹ, Bắc
            Âu) vì có khả năng chống trượt và bề mặt thô và còn được sử dụng cả
            ở miền trung và miền nam nước Ý vì nó có tính chất trang trí (lát
            vườn, khu dạo chơi,...). Gạch bê tông rửa cũng có thể được sản xuất
            với các loại hạt 2 - 3 màu khác nhau cho mỗi chỗ trên bề mặt viên
            gạch để tạo dáng hình học (gạch bê tông rửa trang trí) hoặc ghép với
            những lát đá lớn "cocciame segato". Loại gạch này cũng được sử dụng
            để lát các tiền sảnh hoặc phủ trên mài của các hăng ga hay toà nhà
            công nghiệp - chúng được lắp vào các bệ đỡ bằng nhựa với chiều cao
            có thể thay đổi được và có thể làm phẳng (vỉa hè có khả năng thông
            khí) bởi vì nó có thể đảm bảo bảo vệ chống lại các tác động của thời
            tiết như mưa, tuyết, mưa đá, ánh sáng, các tia nắng gắt của mặt
            trời, bảo đảm tuổi thọ lâu dài và làm giảm yêu cầu bảo dưỡng cho các
            hệ thống bên dưới. Nó còn có tác dụng cách nhiệt cho toà nhà. Một
            điểm đặc biệt của bề mặt gạch bê tông rửa là phải dùng một loại giấy
            hoá học để làm chậm quá trình đông cứng của vài mm xi măng lại
            khoảng 24 giờ, cho phép ta dễ dàng loại bỏ lớp xi măng đó bằng cách
            dùng bàn chải và nước để chải đi vào 1 ngày sau ngày sản xuất, hoặc
            có thể dùng máy rửa trực tiếp của OCEM, máy rửa này có tác dụng như
            1 vòi hoa sen, xối phần xi măng giữa các hạt đá của viên gạch đi.
          </div>
          <div className={style.items} style={{ margin: "20px 0" }}>
            - Gạch lát hè (gạch tự chèn): với công nghệ ép kín hơi của OCEM, có
            thể sản xuất ra loại gạch này với nhiều hình thức bề mặt khác nhau
            (mặt nhám, có mài, bắn hạt hoặc rửa). Thông thường loại gạch này có
            kích thước nhỏ (15x15, 15x30, 13x13, 18x24, 20x20, 25x25 cm,...) và
            có độ dày lớn (từ 5 cm đến 10 cm). Bởi vậy, loại gạch này thường
            được sử dụng ở những nơi có nhiều người đi lại như đường phố, vỉa
            hè, trạm xăng, cổng thu phí và gạch lát hè được lát trên nền cát đầm
            chứ không dùng vữa xi măng.
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <div
            className={style.items}
            style={{
              textDecoration: "underline",
              margin: "20px 0",
              fontSize: "18px",
            }}
          >
            {" "}
            Báo giá toàn bộ sản phẩm Long Thọ tháng 12.2022
          </div>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <div className={style.images}>
            <Image src={prd1} width={500} alt="" />
            <Image src={prd2} width={500} alt="" />
          </div>
          <div className={style.images}>
            <Image src={prd3} width={500} alt="" />
            <Image src={prd4} width={500} alt="" />
          </div>
          <div className={style.images}>
            <Image src={prd5} width={500} alt="" />
            <Image src={prd6} width={500} alt="" />
          </div>
          <div className={style.images} style={{ padding: "10px 0" }}>
            <Image src={prd7} width={500} alt="" />
            <Image src={prd8} width={500} alt="" />
          </div>
          <div className={style.images} style={{ padding: "10px 0" }}>
            <Image src={prd9} width={500} alt="" />
          </div>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
