
import { Card, Col, Row } from 'react-bootstrap';
import './GridGallery.css';
import testImage from '../../../Assets/Theme2/test_grid_gallery.webp';
import testImage2 from '../../../Assets/Theme2/test_grid_gallery2.webp';
import { Link } from 'react-router-dom';

const GridGallery = ({ grid_size = 4,content_align_w = "align-items-center", top_title, bottom_title, btn_link, btn_text, image }) => {
    return (
        <div className='grid_gallery'>
            <div className="custom_container">
                <Row>
                    <Col  lg={(grid_size == 4) ? 4 : 3} md={6}  className='mb-4'>
                        <div className="grid_gallery_image">
                            <Card className="cl_white border-0 rounded-0 grid_gallery_overlay">
                                {
                                    image == 4 ? 
                                    <Card.Img className='w-100 rounded-0' src={testImage} alt="Card image" />
                                    :
                                    <Card.Img className='w-100 rounded-0' src={testImage2} alt="Card image" />
                                }
                                <Card.ImgOverlay className={`d-flex ${content_align_w} justify-content-center title mx-auto`}>
                                    <div className='text-center  '>
                                        {
                                            top_title && <h2 className='text-uppercase font_size_28 fw_700'>{top_title}</h2>
                                        }
                                        {
                                            bottom_title && <p className='font_size_16 fw_500'>{bottom_title}</p>
                                        }
                                        {
                                            btn_text && <Link to={btn_link}>
                                                <button >{btn_text}</button>
                                            </Link>
                                        }
                                    </div>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    </Col>
                    <Col lg={(grid_size == 4) ? 4 : 3} md={6} className='mb-4'>
                        <div className="grid_gallery_image">
                            <Card className="cl_white border-0 rounded-0 grid_gallery_overlay">
                                {
                                    image == 4 ? 
                                    <Card.Img className='w-100 rounded-0' src={testImage} alt="Card image" />
                                    :
                                    <Card.Img className='w-100 rounded-0' src={testImage2} alt="Card image" />
                                }
                                <Card.ImgOverlay className={`d-flex ${content_align_w} justify-content-center title mx-auto`}>
                                    <div className='text-center  '>
                                        {
                                            top_title && <h2 className='text-uppercase font_size_28 fw_700'>{top_title}</h2>
                                        }
                                        {
                                            bottom_title && <p className='font_size_16 fw_500'>{bottom_title}</p>
                                        }
                                        {
                                            btn_text && <Link to={btn_link}>
                                                <button >{btn_text}</button>
                                            </Link>
                                        }
                                    </div>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    </Col>
                    <Col lg={(grid_size == 4) ? 4 : 3} md={6} className='mb-4'>
                        <div className="grid_gallery_image">
                            <Card className="cl_white border-0 rounded-0 grid_gallery_overlay">
                                {
                                    image == 4 ? 
                                    <Card.Img className='w-100 rounded-0' src={testImage} alt="Card image" />
                                    :
                                    <Card.Img className='w-100 rounded-0' src={testImage2} alt="Card image" />
                                }
                                <Card.ImgOverlay className={`d-flex ${content_align_w} justify-content-center title mx-auto`}>
                                    <div className='text-center  '>
                                        {
                                            top_title && <h2 className='text-uppercase font_size_28 fw_700'>{top_title}</h2>
                                        }
                                        {
                                            bottom_title && <p className='font_size_16 fw_500'>{bottom_title}</p>
                                        }
                                        {
                                            btn_text && <Link to={btn_link}>
                                                <button >{btn_text}</button>
                                            </Link>
                                        }
                                    </div>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    </Col>
                    <Col lg={(grid_size == 4) ? 4 : 3} md={6} className='mb-4'>
                        <div className="grid_gallery_image">
                            <Card className="cl_white border-0 rounded-0 grid_gallery_overlay">
                                {
                                    image == 4 ? 
                                    <Card.Img className='w-100 rounded-0' src={testImage} alt="Card image" />
                                    :
                                    <Card.Img className='w-100 rounded-0' src={testImage2} alt="Card image" />
                                }
                                <Card.ImgOverlay className={`d-flex ${content_align_w} justify-content-center title mx-auto`}>
                                    <div className='text-center  '>
                                        {
                                            top_title && <h2 className='text-uppercase font_size_28 fw_700'>{top_title}</h2>
                                        }
                                        {
                                            bottom_title && <p className='font_size_16 fw_500'>{bottom_title}</p>
                                        }
                                        {
                                            btn_text && <Link to={btn_link}>
                                                <button >{btn_text}</button>
                                            </Link>
                                        }
                                    </div>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default GridGallery;