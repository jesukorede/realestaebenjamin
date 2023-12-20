import React from 'react';
import './Contact.css';
import {MdCall} from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2';
import { BsFillCameraVideoFill } from 'react-icons/bs';

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy to Contact us.</span>
                <span className='secondaryText'>We always ready to help by providing the best services and we beleive a good place to live can make your life better</span>
                <div className="flexColStart contactModes">
                    {/* first row */}
                    <div className="flexStart row">
                        {/* first column */}
                        <div className="flexColStart mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={20} />      
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText" >Call</span>
                                    <span className="secondaryText">070-SOME-BODY</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Call Now
                            </div>
                        </div>
                        {/* second column */}
                        <div className="flexColStart mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={20} />      
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText" >Chat</span>
                                    <span className="secondaryText">070-SOME-BODY</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Chat Now
                            </div>
                        </div>
                    </div>
                    {/* second row */}
                    <div className="flexStart row">
                        {/* first column */}
                        <div className="flexColStart mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillCameraVideoFill size={20} />      
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText" >Video Call</span>
                                    <span className="secondaryText">080-BEN-JAMIN</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                               Video Call Now
                            </div>
                        </div>
                        {/* second column */}
                        <div className="flexColStart mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={20} />      
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText" >Message</span>
                                    <span className="secondaryText">080-BEN-JAMIN</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Message Now
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Contact