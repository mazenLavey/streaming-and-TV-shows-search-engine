import ShowCard from "../../components/ShowCard";
import { nanoid } from "nanoid";
import { Swiper, SwiperSlide } from 'swiper/react';
import useMedia from "../../hooks/useMedia";
import 'swiper/css';
import ShowCardSkeleton from "../../components/ShowCardSkeleton";
import StreamingSliderCSS from "./css/StreamingSlider.module.css";

const StreamingSlider = ({ streamingList, dataIsLoaded }) => {
    const {isMobileScreen, isTabletScreen, isDesktopScreen} = useMedia();

    const elements = streamingList.map(el => {
        return <SwiperSlide key={nanoid()}><ShowCard  data={el._embedded.show} badges={true} streamingDate={{ season: el.season, number: el.number }} /></SwiperSlide>
    })

    return (
        <>
        {dataIsLoaded?
            <Swiper
                spaceBetween={20}
                slidesPerView={isMobileScreen? 1.5 : isTabletScreen? 2.5 : isDesktopScreen? 3.5 : 4.5}
                style={{overflow: "unset"}}
            >
            {elements}
            </Swiper>
            :
            <div className={StreamingSliderCSS.skeleton__wrapper}>
                <ShowCardSkeleton cards={isMobileScreen? 1 : isTabletScreen? 2 : isDesktopScreen? 3 : 4}/>
            </div>
        }
        </>
    );
};

export default StreamingSlider;