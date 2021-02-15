import React from 'react'
import "./Item.css"

const Item = ({title, backgroundImg, desc, descLink, leftBtnTxt, leftBtnLink, rightBtnLink, rightBtnTxt, twoButtons, oneButton}) => {
    return (
        <div className="item" style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
            <div className="item__text">
                <p className="item__title">{title}</p>
                {desc && <div className="item__textDesc">
                    <a className="item__descLink" href={descLink}>{desc}</a>
                </div>}
                <div className="item__lowerThird">
                    {twoButtons && <div className="item__buttons">
                        <a href={leftBtnLink} className="btn btn-dark-70">{leftBtnTxt}</a>
                        <a href={rightBtnLink} className="btn btn-white-70">{rightBtnTxt}</a>
                    </div>}
                    {oneButton && <a href={leftBtnLink} className="btn btn-dark">{leftBtnTxt}</a>}
                </div>
            </div>
        </div>
    )
}

export default Item
