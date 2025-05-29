import { Link } from "react-router-dom";
import styles from "@scss/user/components/Footer/Footer.module.scss"
export default function Footer(){
    return (
        <>
        <div className={`container-fluid ${styles.bgImg} text-secondary`} style={{marginTop: '90px'}}>
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-4 col-md-6 mb-lg-n5">
                        <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary border-inner p-4">
                            <a href="index.html" className="navbar-brand">
                                <h1 className="m-0 text-uppercase text-white"><i className="fa fa-birthday-cake fs-1 text-dark me-3"></i>KingEvents</h1>
                            </a>
                            <p className="mt-3">Dịch vụ tổ chức sự kiện chuyên nghiệp toàn quốc: hội nghị, hội thảo, khai trương, ra mắt sản phẩm, team building, gala dinner... Đồng hành cùng doanh nghiệp nâng tầm thương hiệu và lan tỏa giá tr</p>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6">
                        <div className="row gx-5">
                            <div className="col-lg-4 col-md-12 pt-5 mb-5">
                                <h4 className="text-primary text-uppercase mb-4">Get In Touch</h4>
                                <div className="d-flex mb-2">
                                    <i className="bi bi-geo-alt text-primary me-2"></i>
                                    <p className="mb-0">78 Nguyen Phuoc Chu, Da Nang, Viet Nam</p>
                                </div>
                                <div className="d-flex mb-2">
                                    <i className="bi bi-envelope-open text-primary me-2"></i>
                                    <p className="mb-0">kinglun56@gmail.com</p>
                                </div>
                                <div className="d-flex mb-2">
                                    <i className="bi bi-telephone text-primary me-2"></i>
                                    <p className="mb-0">+0795 038 785</p>
                                </div>
                                <div className="d-flex mt-4">
                                    <a className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 me-2" href="https://www.facebook.com/khoa.lenguyenanh.581/"><i className="fab fa-facebook-f fw-normal"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 me-2" href="https://www.linkedin.com/in/king-lê-b04702368/"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                <h4 className="text-primary text-uppercase mb-4">Quick Links</h4>
                                <div className="d-flex flex-column justify-content-start">
                                    <Link to="/" className="text-secondary mb-2" ><i className="bi bi-arrow-right text-primary me-2"></i>Trang Chủ</Link>
                                    <Link to="/about" className="text-secondary mb-2" ><i className="bi bi-arrow-right text-primary me-2"></i>Về Chúng Tôi</Link>
                                    <Link to="/events" className="text-secondary mb-2" ><i className="bi bi-arrow-right text-primary me-2"></i>Sự Kiện</Link>
                                    <Link to="/payment" className="text-secondary mb-2" ><i className="bi bi-arrow-right text-primary me-2"></i>Thanh Toán</Link>
                                    <Link to="/contact" className="text-secondary" ><i className="bi bi-arrow-right text-primary me-2"></i>Liên Hệ</Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                <h4 className="text-primary text-uppercase mb-4">Newsletter</h4>
                                <p>Nhận thông tin sự kiện mới nhất, xu hướng tổ chức chuyên nghiệp và ưu đãi độc quyền từ KingEvents – nền tảng tổ chức sự kiện hàng đầu toàn quốc.</p>
                                <form action="">
                                    <div className="input-group">
                                        <input type="text" className="form-control border-white p-3" placeholder="Your Email"/>
                                        <button className="btn btn-primary">Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid text-secondary py-4" style={{background: '#111111'}}>
            <div className="container text-center">
                <p className="mb-0">&copy; <a className="text-white border-bottom" href="#">KingEvents</a>. All Rights Reserved. </p>
            </div>
        </div>
        </>
    ) 
}