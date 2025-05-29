import styles from "@scss/user/components/Hero/Hero.module.scss"
export default function Hero(){
    return (
        <div className={`${styles.heroHeader} container-fluid bg-primary py-5 mb-5`}>
            <div className="container py-5">
                <div className="row justify-content-start">
                    <div className="col-lg-8 text-center text-lg-start">
                        <h1 className={`${styles.fontSecondary} text-primary mb-4`}>Sự Kiện Hoàn Hảo</h1>
                        <h1 className="display-1 text-uppercase text-white mb-4">KingEvents</h1>
                        <h1 className="text-uppercase text-white">Tổ Chức Sự Kiện Chuyên Nghiệp Hàng Đầu</h1>
                        <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                            <a href="" className="btn btn-primary border-inner py-3 px-5 me-5">Xem Thêm Dịch vụ</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}