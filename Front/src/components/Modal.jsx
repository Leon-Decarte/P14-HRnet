function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null

    return (
        <div
            style={{
                position: "fixed",
                top: 0, left: 0,
                width: "100%", height: "100%",
                backgroundColor: "rgba(0,0,0,0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <div style={{ backgroundColor: "#fff", padding: "2rem", borderRadius: "10px" }}>
                {children}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default Modal
