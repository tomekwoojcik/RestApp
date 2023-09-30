import { FC } from "react"

interface propsModel {
    tableHeaders: string[]
}

const TableHeaders : FC<propsModel> = (tableHeaders) => {
    return (
        <thead>
            <tr>

            </tr>
        </thead>
    )
}

export default TableHeaders