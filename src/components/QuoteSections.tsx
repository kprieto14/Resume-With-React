import React from "react"
import QuoteLeft from '../assets/Quote_Left_IMG.png'
import QuoteRight from '../assets/Quote_Right_IMG.png'

export function QuoteSection() {
    return (
      <section className="quote-section">
          <img src={ QuoteLeft} alt="Symbol of quotation marks facing left"/>
          <p>
            I have always enjoyed crafting and solving puzzles, so I decided to pursue becoming a
            developer so I can have an enjoyable career where I can blend my love for creating things
            and exercising my brain by using my problem-solving skills. While I may be switching careers 
            from a social service career to a technology based one, my hope is that one day, when I am 
            proficient in my coding skills, I can still help people by creating technology that will help 
            those with and without disabilities have access to more technology that will improve their lives, 
            such as creating communication and learning applications.
          </p>
          <img src={ QuoteRight } alt="Symbol of quotation marks facing right"></img>
      </section>
    )
}