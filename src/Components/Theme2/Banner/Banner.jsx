import { Card } from 'react-bootstrap';
import './Banner.css';
import { Link } from 'react-router-dom';


const Banner = ({ top_title = "sasa", content_align_h = "justify-content-lg-start justify-content-center", bottom_title, btn_link, btn_text, text_align }) => {


    return (
        <Card className="border-0 rounded-0 topTitle_overlay">
            {/* <Card.Img
                className="w-100 h-100 border-0 rounded-0"
                src={topImage}
                alt="Card_image"
            /> */}
            {/* <picture>
                <source media="(max-width:767px)"  srcset={topImage_mobile} />
                <img
                    className="w-100 h-100 border-0 rounded-0"
                    src={topImage}
                    alt="Card_image"
                />
            </picture> */}


            <Card.ImgOverlay className={`d-flex ${content_align_h}  align-items-end title ${text_align} ps-lg-5 py-5`}>
                <div>
                    {
                        top_title && <h2 className="m-0 fw-bold cl_white font_size_40">{top_title}</h2>
                    }

                    {
                        bottom_title && <p className='cl_white font_size_16 fw_500'>{bottom_title}</p>
                    }


                    {
                        btn_text && <Link to={btn_link}>
                            <button >{btn_text}</button>
                        </Link>
                    }

                </div>
            </Card.ImgOverlay>
        </Card>
    );
};

export default Banner;