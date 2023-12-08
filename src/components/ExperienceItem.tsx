import React from "react";

type ExperienceInformation = {
    photoSource: string,
    photoDescription: string,
    name: string,
    title: string,
    dates: string,
    description: string,
    secondDescription: string | null,
    thirdDecsription: string | null
}

export function ExperienceItem({ photoSource, photoDescription, name, title, dates, description, secondDescription, thirdDecsription}: ExperienceInformation) {
    return (
        <article className="box-item">
            <img src={ photoSource } alt={ photoDescription }/>

            <h3>{ name }</h3>
            <hr/>
            <h4>{ title }</h4>

            <p>{ dates }</p>
            
            <p>{ description }</p>
            <p>{ secondDescription }</p>
            <p>{ thirdDecsription }</p>
        </article>
    )
}