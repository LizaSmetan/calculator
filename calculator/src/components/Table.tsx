import React from 'react'
import styles from '../../styles/Main.module.scss';

type Props = {
    thead: Array<string>,
    data: Array<Array<any>>
  }
const Table = ({ thead, data }: Props) => {
    return (
        <div className={styles.tableWrapper}>
            <table>
                <thead>
                    <tr>
                        {thead.map((item: string, index) => <th key={`th_${index}`}>{item}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item: Array<any>, indexRow) => {
                            return (
                                <tr key={`tr_${indexRow}`}>
                                    {
                                        item.map((item: any, index) => {
                                            return (
                                                <td key={`td_${indexRow}_${index}`}>
                                                    {item}
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}


export default Table