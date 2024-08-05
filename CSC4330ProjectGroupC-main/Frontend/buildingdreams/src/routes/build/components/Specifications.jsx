import React, { useEffect, useState } from 'react';
import '../stylesheets/specifications.css';

/**
 * @param {String} name
 * @param {String} price
 * @param {Object} part_data
 * @returns 
 */
export default function Specifications(props) {

    const { specs } = props;

    const specsToArray = Object.keys(specs).map((spec) => {
        if (spec !== 'name' && spec !== 'price') {
            return ([spec, specs[spec]]);
        } else {
            return (null);
        }
    });

    if (specs) {
        return (
            <div className="specs-container">
                <p className='specs-name'>{specs.name}</p>
                <div style={{width: '90%', display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                    {
                        specsToArray.length > 0
                        ?
                        <div className='spec'>
                            <p className='specs-part-title'>PRICE</p>
                            <p className='specs-part-value'>{specs.price}</p>
                        </div>
                        :
                        null
                    }
                    {
                        specsToArray.map((part) => {
                            if (part) {
                                return (
                                    <div className='spec'>
                                        <p className='specs-part-title'>{String(part[0]).toUpperCase().replaceAll("_", " ")}</p>
                                        <p className='specs-part-value'>{part[1] ? part[1] : 'None'}</p>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        )
    }
}