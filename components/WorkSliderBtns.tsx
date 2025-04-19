"use client"

import { useSwiper } from "swiper/react"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"

interface WorkSliderBtnsProps {
    containerStyles: string;
    btnStyles: string;
}

const WorkSliderBtns:React.FC<WorkSliderBtnsProps> = ({ containerStyles, btnStyles }) => {
    const swiper = useSwiper()

    return (
        <div className={containerStyles}>
            <button className={btnStyles}
                onClick={() => swiper.slidePrev()}
                aria-label="Previous slide"
            >
                <PiCaretLeftBold />
            </button>
            <button className={btnStyles}
                onClick={() => swiper.slideNext()}
                aria-label="Next slide"
            >
                <PiCaretRightBold />
            </button>
        </div>
    )
}

export default WorkSliderBtns