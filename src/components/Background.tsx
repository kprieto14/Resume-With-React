import React from "react"
import QuoteLeft from '../assets/Quote_Left_IMG.png'
import QuoteRight from '../assets/Quote_Right_IMG.png'

export function Background() {
    return (
        <section className="background">
            <div>
                <h2>Background</h2>
                
                <div className="quotations-section">
                    <img src={ QuoteLeft } alt="Picture of the left side of quotations mark" />

                    <p>
                    I am currently in the process of switching careers by learning to code to start working in the tech field. I have always enjoyed crafting and solving puzzles,
                    so I decided to pursue becoming a developer so I can have an enjoyable career where I can blend my love for creating projects and utilizing my brain through problem-solving skills. I have been working as a Recreation Therapist for the past 6 years, and while I may be switching from a social service
                    career to a technology based one, my hopes is to still create technology that will help improve the lives of everybody, including those with disabilities.
                    I started self-learning last year by teaching myself some basic HTML, CSS, and Javascript for my front-end skills. I am formally attending a Full Stack
                    Web Development course with Suncoast Developers Guild in order to further my studies and get serious about learning to code! I have so far learned basic
                    fundamentals for C#, SQL, Typescript/ Javascript, and React; although I look forward to learning so much more and honing in my skills!
                    </p>

                    <img src={ QuoteRight } alt="Picture of the right side of quotations mark" />
                </div>
            </div>
        </section>
    )
}