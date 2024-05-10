import { Panel } from "./ui/Panel"

export const Reverse = ({ input }: { input: String }) => {
    const newInput = input

    const reverse = newInput.split("").reverse().join("")

    return (
        <Panel>
            <h3>Reverse</h3>
            <p>{reverse}</p>
        </Panel>
    )
}