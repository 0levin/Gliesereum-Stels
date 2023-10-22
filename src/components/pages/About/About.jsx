import styles from "./about.module.css";
import classNames from "classnames";
import bg from "./assets/bg1.svg";
import { Text, textTypes } from "../../shared/Text/Text";

import rocketIcon from "./assets/089-rocket.svg";
import img from "./assets/img.png";
import fileIcon from "./assets/036-file.svg";
import profitIcon from "./assets/058-profits.svg";
import bg2 from "./assets/bg2.svg";

export const About = () => {
    return (
        <div className="container">
            <div className={classNames([styles.intro_bg_wrapper])}>
                <img src={bg} alt="bg" className={styles.bg1} />
            </div>
            <section className={classNames([styles.intro])}>
                <div className={styles.intro__title}>
                    <div className={styles.intro__text_row}>
                        <Text data={[{ text: "About ", accent: true }, { text: "us" }]} type={textTypes.PageTitle} />
                    </div>
                </div>
                <Text text={"We are Gliesereum, the vanguard of next-generation blockchain technology poised to redefine the contours of digital market management."} classes={[styles.intro__subtext]} />
            </section>
            <section className={classNames(["section", styles.text_info])}>
                <img src={rocketIcon} alt="rocket" />
                <Text
                    classes={[styles.text_info__reg_text]}
                    text={"Our ethos is rooted in ceaseless innovation, meticulous refinement, and a relentless pursuit of expanding our ecosystem. Our endeavor is to deliver unparalleled value to our users, thereby sculpting the future of digital market landscapes."}
                    type={textTypes.medium}
                />
                <div className={classNames([styles.text_info__list])}>
                    <Text text={"We are a team of dedicated professionals with 7+ years of experience in Tier1 Market-Making. Our core aspiration is to revolutionize market management and yield generation, forging a paradigm where every stakeholder relishes the benefits of supreme capital efficiency."}
                        type={textTypes.regularDark}
                    />
                    <Text text={"In an ever-evolving digital landscape, Gliesereum stands as a beacon of advanced technology, embodying the perfect marriage of blockchain capabilities with AI intelligence."}
                        type={textTypes.regularDark}
                    />
                </div>
            </section>
            <section className={classNames(["section", styles.img_info])}>
                <div className="block_title">
                    <Text
                        data={[{ text: "Stels " }, { text: "by Gliesereum", accent: true }]}
                        type={textTypes.BlockTitle}
                    />
                    <Text text={"Stels by Gliesereum Web 3.0 market control is a result of multiple years of development, which shape out as an easy and intuitive set of tools to create and control the market."}
                        type={textTypes.medium}
                        classes={[styles.img_info__title_text]}
                    />
                </div>
                <div className={classNames([styles.img_info__photo])}>
                    <img src={img} alt="" className={classNames(["image"])} />
                    <div className={classNames([styles.img_info__card])} >
                        <img src={fileIcon} alt="" />
                        <Text classes={[styles.img_info__card_text]} text={"Our unique protocol solution allows our user to have access to RAW data from exchanges, offering a full scope of analytics and statistics over the market participants."} type={textTypes.regularDark} />
                    </div>
                    <div className={classNames([styles.img_info__card])} >
                        <img src={profitIcon} alt="" />
                        <Text classes={[styles.img_info__card_text]} text={"It allows users to shape the strategy for best market performance, and use the value generating opportunities."} type={textTypes.regularDark} />
                    </div>
                    <div className={classNames([styles.img_info__card])} >
                        <Text text={"Stels is an ecosystem for market management and yield generation, built for maximum capital efficiency."} type={textTypes.TextTitle} />
                    </div>
                </div>
            </section>
            <section className={classNames(["section", styles.text_info, styles.last_text_block])}>
                <div className={styles.bg2}>
                    <img src={bg2} alt="bg" />
                </div>
                <Text data={[
                    { text: "Ready to experience the future? ", accent: true },
                    { text: "Become a part of the Gliesereum community. Explore our products, engage with our team, and witness the future of market management and yield generation." }
                ]}
                    classes={[styles.text_info_re]}
                    type={textTypes.BlockTitle}
                />
            </section>
        </div>
    )
}