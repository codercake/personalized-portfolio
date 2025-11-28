import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hello there! I'm<br /> {Bio.name}</Title>
                        
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>

                        <SubTitle>{Bio.description}</SubTitle>

                        <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
                            <ResumeButton 
                                href={Bio.resumeView} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                View Resume
                            </ResumeButton>

                            <ResumeButton 
                                href={Bio.resumeDownload} 
                                download="Ishitha-Chaudhary-Resume.pdf"
                            >
                                Download Resume
                            </ResumeButton>
                        </div>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
}

export default HeroSection
