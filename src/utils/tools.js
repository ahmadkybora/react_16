import React from 'react';

export const Style = {
    fontWeight: "bold", 
    color: "green"
}

export const ImgStyle = {}

export const Form = () => {}

export const Input = ({ type, name, className, id=null, value=null, placeholder=null }) => {
    return (
        <input 
            type={type}
            name={name}
            value={value} 
            className={className}
            id={id}
            placeholder={placeholder}
        />
    )
}

export const Button = ({ type, name, value, className=null, id=null }) => {
    return (
        <button
            type={type}
            name={name}
            className={className}
            id={id}
        >
            {value}
        </button>
    )
}

export const Select = ({ name, key, value, className, id }) => {
    return (
        <select 
            name={name} 
            className={className} 
            id={id}
        >
            <option key={key}>{value}</option>
        </select>
    )
}

export const TextArea = ({ name, value, className=null, id=null }) => {
    return (
        <textArea 
            name={name} 
            className={className} 
            id={id}
        >
            {value}
        </textArea>
    )
}

export const Label = ({ htmlFor, value }) => {
    return (
        <label htmlFor={htmlFor} style={Style}>{value}</label>
    )
}

export const Table = () => {}

export const THead = () => {}

export const TBody = () => {}

export const Th = ({ className, value }) => {
    return (
        <th className={className}>{value}</th>
    )
}

export const Td = ({ className, value }) => {
    return (
        <td className={className}>{value}</td>
    )
}

export const Tr = ({ className, value }) => {
    return (
        <tr className={className}>{value}</tr>
    )
}

export const Img = ({ width, height, className, value }) => {
    return (
        <img width={width} height={height} className={className} src={value} style={ImgStyle} />
    )
}

export const Card = ({ styleCard, img, width, height, title, text, linkReadMore, linkBuy }) => {
    return (
        <div className="card mb-3" style={styleCard}>
            <div className='row g-0'>
                <div className='col-md-4'>
                    <img src={img} width={width} height={height} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className='col-md-8'>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>

                        <a href={linkReadMore}>
                            <I className="fa fa-leaf btn btn-primary" />
                        </a>

                        <a href={linkBuy}>
                            <I className="fa fa-shopping-cart btn btn-success" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const I = ({ className }) => {
    return (
        <i className={className} ariaHidden="true"></i>
    )
}