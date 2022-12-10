import { useEffect, useState } from "react";
import { dataColumn, postColumn } from "../../data/fakedata";

const DashboardPage = () => {
    // const [state, setState] = useState({data: []});

    // useEffect(()=>{
    //     let arrConvert = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] ;
    //     arrConvert.reduceRight((r,i,_,s) => (r.push(s.splice(0,5)),r),[])
    //     console.log(arrConvert,"arrConvert====")
    // },[])

    return (
        <section className="column-page">
            <div className="wrapper-recommend">
                <div className="wrapper-recommend-item">
                    <h4 className="wrapper-recommend-item_title">RECOMMENDED COLUMN</h4>
                    <hr className="wrapper-recommend-item_line text-white" />
                    <span className="wrapper-recommend-item_label">ダイエット</span>
                </div>
                <div className="wrapper-recommend-item">
                    <h4 className="wrapper-recommend-item_title">RECOMMENDED DIET</h4>
                    <hr className="wrapper-recommend-item_line text-white" />
                    <span className="wrapper-recommend-item_label">オススメ</span>
                </div>
                <div className="wrapper-recommend-item">
                    <h4 className="wrapper-recommend-item_title">RECOMMENDED BEAUTY</h4>
                    <hr className="wrapper-recommend-item_line text-white" />
                    <span className="wrapper-recommend-item_label">美容</span>
                </div>
                <div className="wrapper-recommend-item">
                    <h4 className="wrapper-recommend-item_title">RECOMMENDED HEALTH</h4>
                    <hr className="wrapper-recommend-item_line text-white" />
                    <span className="wrapper-recommend-item_label">健康</span>
                </div>
            </div>

            <div className="wrapper-post">

                <div className="d-flex wrapper-post-line" >

                    {/* {
                            dataColumn.map((item: postColumn)=>{
                                return <>
                                    <div className="col-md-3" key={item?.id}>
                                        <div className="wrapper-post_item ">
                                            <div className="wrapper-post_img">
                                                <img src={item?.img} alt="" />
                                                <div className="img-time"> <span>2021.05.17   23:25</span></div>
                                            </div>
                                            <p className="post_item-description">魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…</p>
                                            <span className="post_item-tag">#魚料理</span>
                                            <span className="post_item-tag">#和食</span>
                                            <span className="post_item-tag">#DHA</span>
                                        </div>
                                    </div>

                                </>
                            })
                        } */}

                    <div className="col-md-3">
                        <div className="wrapper-post_item ">
                            <div className="wrapper-post_img">
                                <img src="../img/column-1.jpg" alt="" />
                                <div className="img-time"> <span>2021.05.17   23:25</span></div>
                            </div>
                            <p className="post_item-description">魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…</p>
                            <span className="post_item-tag">#魚料理</span>
                            <span className="post_item-tag">#和食</span>
                            <span className="post_item-tag">#DHA</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="wrapper-post_item ">
                            <div className="wrapper-post_img">
                                <img src="../img/column-2.jpg" alt="" />
                                <div className="img-time"> <span>2021.05.17   23:25</span></div>
                            </div>
                            <p className="post_item-description">魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…</p>
                            <span className="post_item-tag">#魚料理</span>
                            <span className="post_item-tag">#和食</span>
                            <span className="post_item-tag">#DHA</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="wrapper-post_item ">
                            <div className="wrapper-post_img">
                                <img src="../img/column-3.jpg" alt="" />
                                <div className="img-time"> <span>2021.05.17   23:25</span></div>
                            </div>
                            <p className="post_item-description">魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…</p>
                            <span className="post_item-tag">#魚料理</span>
                            <span className="post_item-tag">#和食</span>
                            <span className="post_item-tag">#DHA</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="wrapper-post_item ">
                            <div className="wrapper-post_img">
                                <img src="../img/column-4.jpg" alt="" />
                                <div className="img-time"> <span>2021.05.17   23:25</span></div>
                            </div>
                            <p className="post_item-description">魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…</p>
                            <span className="post_item-tag">#魚料理</span>
                            <span className="post_item-tag">#和食</span>
                            <span className="post_item-tag">#DHA</span>
                        </div>
                    </div>

                </div>
                <div className="d-flex wrapper-post-line">
                    <div className="col-md-3">
                        <div className="wrapper-post_item ">
                            <div className="wrapper-post_img">
                                <img src="../img/column-5.jpg" alt="" />
                                <div className="img-time"> <span>2021.05.17   23:25</span></div>
                            </div>
                            <p className="post_item-description">魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…</p>
                            <span className="post_item-tag">#魚料理</span>
                            <span className="post_item-tag">#和食</span>
                            <span className="post_item-tag">#DHA</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="wrapper-post_item ">
                            <div className="wrapper-post_img">
                                <img src="../img/column-6.jpg" alt="" />
                                <div className="img-time"> <span>2021.05.17   23:25</span></div>
                            </div>
                            <p className="post_item-description">魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…</p>
                            <span className="post_item-tag">#魚料理</span>
                            <span className="post_item-tag">#和食</span>
                            <span className="post_item-tag">#DHA</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="wrapper-post_item ">
                            <div className="wrapper-post_img">
                                <img src="../img/column-7.jpg" alt="" />
                                <div className="img-time"> <span>2021.05.17   23:25</span></div>
                            </div>
                            <p className="post_item-description">魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…</p>
                            <span className="post_item-tag">#魚料理</span>
                            <span className="post_item-tag">#和食</span>
                            <span className="post_item-tag">#DHA</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="wrapper-post_item ">
                            <div className="wrapper-post_img">
                                <img src="../img/column-8.jpg" alt="" />
                                <div className="img-time"> <span>2021.05.17   23:25</span></div>
                            </div>
                            <p className="post_item-description">魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…</p>
                            <span className="post_item-tag">#魚料理</span>
                            <span className="post_item-tag">#和食</span>
                            <span className="post_item-tag">#DHA</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wrapper-read-more">
                <button className="btn btn-more"> <span>コラムをもっと見る</span> </button>
            </div>

        </section>
    )
};

export default DashboardPage;