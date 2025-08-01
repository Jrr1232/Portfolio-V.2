export default function Scrolltext(props) {
    // Use props.text or fallback to a default message
    const text = props.text || "Scrolling Text";

    return (
        <div className="scroll-container">
            <div className="scroll-text">
                {text} {text} {text} {text} {text}&nbsp;&nbsp;&nbsp;{/* spacing */}
                {text} {text} {text} {text} {text}&nbsp;&nbsp;&nbsp;
            </div>
        </div>
    );
}