import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Slugify } from "../components/Slugify";
import { Reverse } from "../components/Reverse";

export const Route = createLazyFileRoute("/")({
    component: Index,
});

function Index() {
    const [input, setInput] = useState("");

    const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    return (
        <div className="my-4">
            <h3>Enter some text!</h3>
            <input type="text" name="string" id="string" value={input} onChange={updateInput} className="border border-black rounded px-2 py-1 w-full text-lg" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                <Slugify input={input} />
                <Reverse input={input} />
            </div>
        </div>
    );
}
