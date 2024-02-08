import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
export const Hero = () => {
    const transition = { duration: 3, type: "spring" };
    const mobile = window.innerWidth <= 768? true : false;
    return (
        <div className={css.container}>
            {/* left side */}
            <div className={css.h_sides}>
                <span className={css.text1}>skin protection cream</span>

                <div className={css.text2}>
                    <span>Trendy Collection</span>
                    <span>This is a collection of beauty websites and esthetician websites that are both beautiful and functional.</span>
                </div>
            </div>
            {/*middle side hero image */}
            <div className={css.wrapper}>
                {/* blueCircle */}
                <motion.div
                    initial={{ bottom: !mobile && "2rem" }}
                    whileInView={{ bottom: "0rem" }}
                    transition={transition}
                    className={css.blueCircle}
                ></motion.div>

                {/*Hero Image */}
                <motion.img
                    initial={{ bottom: !mobile && "-2rem" }}
                    whileInView={{ bottom: "0rem" }}
                    transition={transition}
                    src={HeroImg}
                    alt=""
                    width={600}
                />
                {/*Cart div animating */}
                <motion.div
                    initial={{ right: !mobile && "4%" }}
                    whileInView={{ right: !mobile && "2%" }}
                    transition={transition}
                    className={css.cart2}
                >
                    <RiShoppingBagFill />
                    <div className={css.signup}>
                        <span>Best Signup Offers</span>
                        <div>
                            <BsArrowRight />
                        </div>
                    </div>
                </motion.div>
            </div>
            {/*right side */}
            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>1.5m</span>
                    <span>Monthly traffic</span>
                </div>

                <div className={css.customers}>
                    <span>100k</span>
                    <span>Happy Customers</span>
                </div>
            </div>
        </div>
    );
};

export default Hero;
