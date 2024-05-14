import style from "./style.module.css";

import { siteInfos } from "@/utils/siteInfos";
import LogoComponent from "../Logo";

import { BsArrowUp } from "react-icons/bs";
import { ButtonComponent } from "../Buttons";

interface IFooterComponent {
  styles?: any;
}

export default function FooterComponent({ styles }: IFooterComponent) {
  return (
    <footer className={style.page_footer} style={styles}>
      <LogoComponent
        logoColor="var(--whiteFixed)"
        secondNameColor="var(--whiteFixed)"
      />
      <span>{siteInfos.copyright}</span>
      <ButtonComponent
        className={style.footer_button}
        onClick={() => {
          document.body.scrollIntoView();
        }}
      >
        <BsArrowUp className={style.footer_button_svg} size={"1.25rem"} />
      </ButtonComponent>
    </footer>
  );
}
