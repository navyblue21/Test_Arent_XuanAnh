const DashboardPage = () => {
    return(
        <>
            <div className="wrapper-recommend">
                <div className="wrapper-recommend-item">
                    <h4 className="wrapper-recommend-item_title">RECOMMENDED COLUMN</h4>
                    <hr className="wrapper-recommend-item_line"/>
                    <span className="wrapper-recommend-item_label">ダイエット</span>
                </div>
                <div className="wrapper-recommend-item">
                    <h4 className="wrapper-recommend-item_title">RECOMMENDED DIET</h4>
                    <hr className="wrapper-recommend-item_line"/>
                    <span className="wrapper-recommend-item_label">オススメ</span>
                </div>
                <div className="wrapper-recommend-item">
                    <h4 className="wrapper-recommend-item_title">RECOMMENDED BEAUTY</h4>
                    <hr className="wrapper-recommend-item_line"/>
                    <span className="wrapper-recommend-item_label">美容</span>
                </div>
                <div className="wrapper-recommend-item">
                    <h4 className="wrapper-recommend-item_title">RECOMMENDED HEALTH</h4>
                    <hr className="wrapper-recommend-item_line"/>
                    <span className="wrapper-recommend-item_label">健康</span>
                </div>
            </div>

            <div className="wrapper-post">
                <div className="row">
                    <div className="col-md-3">
                        <div className="wrapper-post_item ">
                            <img src="../img/column-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="wrapper-post_item ">
                            <img src="../img/column-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="wrapper-post_item ">
                            <img src="../img/column-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="wrapper-post_item ">
                            <img src="../img/column-1.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default DashboardPage;