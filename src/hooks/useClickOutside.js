import { useEffect } from "react";


export default function useOnClickOutside(ref, callback) {
    useEffect(
        () => {
            const listener = (event) => {
                // if the reference is not present
                // or the target is descendant of the reference
                // return
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                // invoke the callback
                callback(event);
            };
            document.addEventListener("mousedown", listener);
            // document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                // document.removeEventListener("touchstart", listener);
            };
        },
        // add ref and callback to effect dependencies
        [ref, callback]
    );
}

/**
 The contains() method of the Node interface returns a boolean value indicating whether a node is a descendant 
 of a given node, that is the node itself, one of its direct children (childNodes), one of the children's direct 
 children, and so on.
 */