const HeaderPage = () => {
    return (
        <>
            <div className="wrapper-header">
                <div className="logo">
                    <img src="../App_Logo.png" alt="" className="logo-img"/>
                </div>
                <div className="header-icon-list">
                    <div className="header-icon-list-wrapper wrapper-icon-memo">
                        <img src="../svg-icon/icon_memo.svg" alt="" className="header-icon"/>
                        <span className="header-icon-text">自分の記録</span>
                    </div>
                    <div className="header-icon-list-wrapper wrapper-icon-challenge">
                        <img src="../svg-icon/icon_challenge.svg" alt="" className="header-icon"/>
                        <span className="header-icon-text">チャレンジ</span>
                    </div>
                    <div className="header-icon-list-wrapper wrapper-icon-info">
                        <img src="../svg-icon/icon_info.svg" alt="" className="header-icon"/>
                        <div className="wrapper-baggage">
                            <div className="wrapper-baggage_bg">
                                <span className="wrapper-baggage_number">1</span>
                            </div>
                            <span className="header-icon-text">お知らせ</span>
                        </div>
                    </div>

                    <div className="wrapper-icon-menu">
                        {/* <img src="../svg-icon/icon_menu.svg" alt="" className="header-icon"/> */}
                            <input id="menu-toggle" type="checkbox" />
                            <label className="menu-btn" htmlFor="menu-toggle">
                            <span></span>
                            </label>

                            <ul className="menu-box">
                            <li><a className="menu-item" href="#">自分の記録</a></li>
                            <li><a className="menu-item" href="#">体重グラフ</a></li>
                            <li><a className="menu-item" href="#">目標</a></li>
                            <li><a className="menu-item" href="#">選択中のコース</a></li>
                            <li><a className="menu-item" href="#">コラム一覧</a></li>
                            <li><a className="menu-item" href="#">設定</a></li>
                            </ul>
                        <div className="hamburger-menu">
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default HeaderPage;