import { PropsWithChildren } from "react"

export const Panel = ({ children }: PropsWithChildren) => {
    return (
        <div className="bg-gray-100 rounded-lg shadow-md p-4">
            {children}
        </div>
    )
}