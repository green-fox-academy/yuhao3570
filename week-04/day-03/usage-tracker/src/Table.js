import React from 'react';

const Table = (props) => {

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th><strong>Component</strong></th>
                        <th><strong>Time</strong></th>
                    </tr>
                
                    {props.usage.map((use) =>{
                        return (
                            <tr >
                                <td>{use.name}</td>
                                <td>{use.time}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </>
    )
}

export default Table;