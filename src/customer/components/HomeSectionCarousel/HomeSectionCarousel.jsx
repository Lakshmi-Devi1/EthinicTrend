import React, { useState, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';


const HomeSectionCarousel = ({data,sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev = () => {
        if (carouselRef.current && activeIndex > 0) {
            carouselRef.current.slidePrev();
        }
    };

    const slideNext = () => {
        if (carouselRef.current && activeIndex < items.length - responsive[1024].items) {
            carouselRef.current.slideNext();
        }
    };

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    const items = data.slice(0, 10).map((item) => <HomeSectionCard key={item.id} product={item} />);

    return (
        <div className="px-4 lg:px-8 border">
            <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className="relative p-5">
                <AliceCarousel
                    ref={carouselRef}
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex < items.length - responsive[1024].items && (
                    <Button
                        variant="contained"
                        className="z-50"
                        onClick={slideNext}
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            right: '0',
                            transform: 'translateY(-50%)',
                            bgcolor: 'white',
                            minWidth: 'auto', // ensures the button is a square
                            padding: '8px' // gives some padding for better look
                        }}
                        aria-label="next"
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: 'rotate(180deg)', color: 'black' }} />
                    </Button>
                )}
                {activeIndex > 0 && (
                    <Button
                        variant="contained"
                        className="z-50"
                        onClick={slidePrev}
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '0',
                            transform: 'translateY(-50%)',
                            bgcolor: 'white',
                            minWidth: 'auto', // ensures the button is a square
                            padding: '8px' // gives some padding for better look
                        }}
                        aria-label="prev"
                    >
                        <KeyboardArrowLeftIcon sx={{ color: 'black' }} />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default HomeSectionCarousel;
