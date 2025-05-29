import eventImg from "@images/aboutcomponent/event-img.jpg"
export default function AboutComponent (){
    return (
        <div className="container-fluid pt-5">
            <div className="container">
                <div className="section-title position-relative text-center mx-auto mb-5 pb-3" style={{maxWidth: "600px"}}>
                    <h2 className="text-primary font-secondary">About Us</h2>
                    <h1 className="display-4 text-uppercase">Welcome To KingEvents</h1>
                </div>
                <div className="row gx-5">
                    <div className="col-lg-5 mb-5 mb-lg-0" style={{minHeight: "400px"}}>
                        <div className="position-relative h-100">
                            <img className="position-absolute w-100" src={eventImg} style={{objectFit: "cover",top:"25%"}}/>
                        </div>
                    </div>
                    <div className="col-lg-6 pb-5">
                        <h4 className="mb-4">Về Chúng Tôi – KingEvents, Nền Tảng Tổ Chức Sự Kiện Toàn Quốc</h4>
                        <p className="mb-5">KingEvents là nền tảng tổ chức sự kiện chuyên nghiệp toàn quốc, cung cấp giải pháp trọn gói cho doanh nghiệp, tổ chức và cộng đồng. Chúng tôi chuyên tổ chức hội nghị, hội thảo, lễ khai trương, ra mắt sản phẩm, team building, gala dinner và các sự kiện sáng tạo theo yêu cầu. Với đội ngũ giàu kinh nghiệm và quy trình chuyên nghiệp, King cam kết mang đến những sự kiện chỉn chu, ấn tượng và lan tỏa giá trị bền vững.</p>
                        <div className="row g-5">
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center justify-content-center bg-primary border-inner mb-4" style={{width: "90px", height: "90px"}}>
                                    <i className="fa fa-microphone fa-2x text-white"></i>
                                </div>
                                <h4 className="text-uppercase">Hội Nghị & Sự Kiện</h4>
                                <p className="mb-0">Tổ chức hội nghị chuyên nghiệp, sự kiện đẳng cấp với công nghệ hiện đại.</p>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center justify-content-center bg-primary border-inner mb-4" style={{width: "90px", height: "90px"}}>
                                    <i className="fa fa-users fa-2x text-white"></i>
                                </div>
                                <h4 className="text-uppercase">Hội Nhóm</h4>
                                <p className="mb-0">Xây dựng tinh thần đội nhóm qua team building và gala dinner ấn tượng.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}