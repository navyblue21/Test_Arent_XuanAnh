import { handleScrollTop } from "../../helper/helpFunction";

const FooterPage = () => {
    

    return (
        <>
            <div className="wrapper-footer">
                <div className="wrapper-footer_content">
                    <span>会員登録</span>
                    <span>運営会社</span>
                    <span>利用規約</span>
                    <span>個人情報の取扱について</span>
                    <span>特定商取引法に基づく表記</span>
                    <span>お問い合わせ</span>
                </div>
                
            </div>

            <div className="wrapper-scroll-top">
                <img src="../svg-icon/scroll.svg" alt="" onClick={handleScrollTop}/>
            </div>
        </>
    )
}

export default FooterPage;