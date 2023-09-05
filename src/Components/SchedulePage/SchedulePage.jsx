import { useState } from 'react';
import "./SchedulePage.css";
import hike from '../../assets/Images/hike.png';
import mountain2 from '../../assets/Images/peak2.png';

const SchedulePage = () => {
    const [mountain, setMountain] = useState("1");

    return (
        <div>
            <div className="mountain-page">
                <div className="container  mount-pager">
                    {/* <div className=""> */}
                    <button className="mountain1" style={{ background: mountain == '1' ? '#b0b4be' : 'transparent', color: mountain == '1' ? '#404f6c' : '#b0b4be', textDecoration: 'underline' }} onClick={() => setMountain('1')}>MOUNTAIN 1</button>
                    {/* </div> */}

                    {/* <div className=""> */}
                    <button className='mountain2' style={{ background: mountain == '2' ? '#b0b4be' : 'transparent', color: mountain == '2' ? '#404f6c' : '#b0b4be', textDecoration: 'underline' }} onClick={() => setMountain('2')}>MOUNTAIN 2</button>
                    {/* </div> */}
                </div>
            </div>


            <div className="main-holder" style={{ backgroundImage: `url(${mountain === '1' ? hike : mountain2})` }}>
                <div className="container schedule-holder">
                    <h2>SCHEDULE</h2>
                    <div className="schedule-tab">
                        <div>
                            <p>25 Nov 2016</p>
                        </div>
                        <div>
                            <p>Vestibulum Viverra</p>
                        </div>

                    </div>
                    <div className="schedule-tab">
                        <div>
                            <p>25 Nov 2016</p>
                        </div>
                        <div>
                            <p>Vestibulum Viverra</p>
                        </div>

                    </div>

                    <div className="schedule-tab2">
                        <div>
                            <p>18 Dec 2016</p>
                        </div>
                        <div>
                            <p>Vestibulum Viverra</p>
                        </div>

                    </div>
                    <div className="schedule-tab3">
                        <div>
                            <p>7 Jan 2017</p>
                        </div>
                        <div>
                            <p>Vestibulum Viverra</p>
                        </div>

                    </div>



                </div>

            </div>



        </div>
    )
}
export default SchedulePage;