import { Text, textTypes } from "../../shared/Text/Text";
import { Btn } from "../../shared/Btn/Btn";
import styles from "./market.module.css";
import classNames from "classnames";

import bg from "./assets/bg1.svg";

import piechartIcon from "./assets/piechart.svg";
import aiIcon from "./assets/ai.svg";
import dashboardIcon from "./assets/dashboard.svg";
import liquidityIcon from "./assets/liquidity.svg";
import gridImage from "./assets/grid-image.png";
import swords from "./assets/swords.svg";

import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

export const Market = () => {
    return (
        <div className="container">
            <div className={classNames([styles.intro_bg_wrapper])}>
                <img src={bg} alt="bg" className={styles.bg1} />
            </div>
            <section className={classNames([styles.intro])}>
                <div className={styles.intro__title}>
                    <div className={styles.intro__text_row}>
                        <Fade top>
                            <Text data={"Platform features"}
                                type={textTypes.PageTitle} />
                        </Fade>
                    </div>
                </div>
                <Fade top>
                    <Text text={"We've crafted an ecosystem that empowers projects, market-makers and individual investors, granting them tools for unprecedented market control and efficiency in liquidity management."}
                        classes={[styles.intro__subtext]}
                    />
                </Fade>
            </section>
            <section className={classNames(["section", styles.grid])}>
                <div className={classNames([styles.grid__content])}>
                    <div className={classNames([styles.grid__content_item])}>
                        <img src={piechartIcon} alt="icon" className={classNames([styles.grid__content_item_img])} />
                        <Text text={"Market-making and Yield generation"} type={textTypes.TextTitle} />
                    </div>
                    <div className={classNames([styles.grid__content_item])}>
                        <img src={gridImage} alt="pair Dashboard"
                            className={classNames(["image", styles.grid__image])} />
                    </div>
                    <div className={classNames([styles.grid__content_item])}>
                        <img src={aiIcon} alt="icon" className={classNames([styles.grid__content_item_img])} />
                        <Text text={"AI-powered automated system"} type={textTypes.TextTitle} />
                    </div>
                    <div className={classNames([styles.grid__content_item])}>
                        <img src={dashboardIcon} alt="icon" className={classNames([styles.grid__content_item_img])} />
                        <Text text={"In-depth analytics and RAW market data"} type={textTypes.TextTitle} />
                    </div>
                    <div className={classNames([styles.grid__content_item])}>
                        <img src={liquidityIcon} alt="icon" className={classNames([styles.grid__content_item_img])} />
                        <Text text={"Liquidity provision marketplace"} type={textTypes.TextTitle} />
                    </div>
                    <div className={classNames([styles.grid__content_item])}>
                        <Fade>
                            <div>
                                <Text text={"Projects with their distinct tokens"} type={textTypes.TextTitle}
                                    classes={[styles.grid__coontent_text_title]} />
                                <Text
                                    text={"Projects with their distinct tokens can harness the robust tools of Stels for cost-effective and precise market-making, tailored to their unique strategy and goals. Meanwhile, private investors gain access to advanced algorithms, ensuring their capital not only remains under their control but also works diligently for them, maximizing returns without the typical risks."}
                                    type={textTypes.regularDark}
                                />
                            </div>
                            <Btn type="link" action="https://web.stels.app/ " text={"Learn more about platform"}
                                classes={[styles.grid__content_btn]} />
                        </Fade>
                    </div>
                </div>
            </section>
            <section className={classNames(["section", styles.vs])}>
                {
                    window.innerWidth > 1199 ?
                        <div className={classNames([styles.vs__title_block])}>
                            <Fade left>
                                <Text text={"Market challenges"} type={textTypes.BlockTitle}
                                    classes={[styles.vs__title_item]} />
                            </Fade>
                            <Fade right>
                                <Text data={"The Stels solutions"} type={textTypes.BlockTitle}
                                    classes={[styles.vs__title_item]} />
                            </Fade>
                        </div>
                        :
                        <div className="block_title" style={{ "textAlign": "left" }}>
                            <Text
                                data={"Market challenges versus the Stels solutions"}
                                type={textTypes.BlockTitle}
                            // classes={[styles.vs__title_item]}
                            />
                        </div>
                }

                <div className={classNames([styles.vs__table])}>
                    <div className={classNames([styles.vs_table_row])}>
                        <div className={classNames([styles.vs_table_cell])}>
                            <Fade left>
                                <Text text={"Prevailing market inefficiencies"} type={textTypes.regularDark} />
                            </Fade>
                        </div>
                        <div className={classNames([styles.vs_table_div])}>
                            <img src={swords} alt="divider" />
                        </div>
                        <div className={classNames([styles.vs_table_cell])}>
                            <Fade right>
                                <Text text={"Web 3.0 market control: advanced, AI-driven market intervention and control."} />
                            </Fade>
                        </div>
                    </div>
                    <div className={classNames([styles.vs_table_row])}>
                        <div className={classNames([styles.vs_table_cell])}>
                            <Fade left>
                                <Text
                                text={"Limited transparency from exchanges lacking raw data and market performance metrics"}
                                type={textTypes.regularDark} />
                            </Fade>
                        </div>
                        <div className={classNames([styles.vs_table_div])}>
                            <img src={swords} alt="divider" />
                        </div>
                        <div className={classNames([styles.vs_table_cell])}>
                            <Fade right>
                                <Text text={"Data transparency: offering in-depth analytics and raw market insights"} />
                            </Fade>
                        </div>
                    </div>
                    <div className={classNames([styles.vs_table_row])}>
                        <div className={classNames([styles.vs_table_cell])}>
                            <Fade left>
                                <Text text={"Inadequate and costly market-making solutions"} type={textTypes.regularDark} />
                            </Fade>
                        </div>
                        <div className={classNames([styles.vs_table_div])}>
                            <img src={swords} alt="divider" />
                        </div>
                        <div className={classNames([styles.vs_table_cell])}>
                            <Fade right>
                                <Text text={"Fish text filling entire two rows and describe this solution"} />
                            </Fade>
                        </div>
                    </div>
                    <div className={classNames([styles.vs_table_row])}>
                        <div className={classNames([styles.vs_table_cell])}>
                            <Fade left>
                                <Text text={"Difficulty in accessing and drawing liquidity on CEX platforms"} type={textTypes.regularDark} />
                            </Fade>
                        </div>
                        <div className={classNames([styles.vs_table_div])}>
                            <img src={swords} alt="divider" />
                        </div>
                        <div className={classNames([styles.vs_table_cell])}>
                            <Fade right>
                                <Text text={"Liquidity solutions: a dedicated marketplace for efficient liquidity provisioning"} />
                            </Fade>
                        </div>
                    </div>
                    <div className={classNames([styles.vs_table_row])}>
                        <div className={classNames([styles.vs_table_cell])}>
                            <Fade left>
                                <Text text={"Elevated risks and IL hindering optimal yield generation and passive income streams"} type={textTypes.regularDark} />
                            </Fade>
                        </div>
                        <div className={classNames([styles.vs_table_div])}>
                            <img src={swords} alt="divider" />
                        </div>
                        <div className={classNames([styles.vs_table_cell])}>
                            <Fade right>
                                <Text text={"AI-powered systems: sophisticated automations designed for market-making and yield generation"} />
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
