import { useState } from "react";
import ButtonTab from "/src/Components/HistoryPage/ButtonTab";
import tourist from "/src/assets/Images/tourist.png";
import tourist1 from "/src/assets/Images/tourist1.png";
import plus from "/src/assets/Icon/plus.png";
import minus from "/src/assets/Icon/minus.png";
import "./HistoryPage.css"
const HistoryPage = () => {



    const [showContent, setShowContent] = useState({
        privacy: false,
        isExpanded: false,
    })


    const toggleContentVisible = content => e => {

        setShowContent(prev => ({ ...prev, [content]: !prev[content] }))
    };
    return (
        <div id="History" className="main-page">
            <div className="container">
                <div className="history-tab">
                    <div className="sub-tab">
                        <div>
                            <h2 className="title-tab">01</h2>
                        </div>

                        <div className="sub-tab-tab">
                            <h3 className="sub-history">HISTORY</h3>
                            <ButtonTab icon={showContent.isExpanded ? minus : plus} onClick={toggleContentVisible('isExpanded')} />
                            <div className="div-tab"> </div>
                        </div>
                    </div>
                    {showContent.isExpanded && (
                        <p className="lorem-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum eratrutrum,conectetur mi. Proin at maximus est. Nullam purus ex, iaculis sed, blandit tincidunt quam. Cras Scelerisque id quam
                            sed dignissim pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivannus suscrpit dignissim tortor nec congue
                        </p>)}
                </div>

            </div>

            <div className="tourist-tab">
                <div className="container tourist">
                    <img className="padding" src={tourist} />
                    <img className="padding" src={tourist1} />
                    <img className="padding" src={tourist} />
                    <img className="padding" src={tourist1} />
                </div>
                <div className='dots'>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                </div>
            </div>

        </div>
    )
}
export default HistoryPage;