import { Panel } from "./ui/Panel";

export const Slugify = ({ input }: { input: String }) => {
    const newInput = input

    const slug = String(newInput)
        .normalize('NFKD') // split accented characters into their base characters and diacritical marks
        .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
        .trim() // trim leading or trailing whitespace
        .toLowerCase() // convert to lowercase
        .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
        .replace(/\s+/g, '-') // replace spaces with hyphens
        .replace(/-+/g, '-'); // remove consecutive hyphens

    return (
        <Panel>
            <h3>Slug</h3>
            <p>{slug}</p>
        </Panel>
    )
}