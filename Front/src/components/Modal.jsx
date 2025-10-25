import React, { useEffect } from "react"
import "./Modal.css"

export default function Modal({
    isOpen,
    onClose,
    children,
    fadeDuration = 200,
    clickClose = true,
    escapeClose = true,
    showClose = true,
    closeText = "O",
    className = ""
}) {
    useEffect(() => {
        if (!isOpen || !escapeClose) return
        const handleKey = (e) => e.key === "Escape" && onClose()
        window.addEventListener("keydown", handleKey)
        return () => window.removeEventListener("keydown", handleKey)
    }, [isOpen, escapeClose, onClose])

    if (!isOpen) return null

    return (
        <div
            className="modal-overlay"
            onClick={clickClose ? onClose : undefined}
            style={{ animationDuration: `${fadeDuration}ms` }}
        >
            <div
                className={`modal-content ${className}`}
                onClick={(e) => e.stopPropagation()}
                style={{ animationDuration: `${fadeDuration}ms` }}
            >
                {showClose && (
                    <button className="modal-close" onClick={onClose}>
                        {closeText}
                    </button>
                )}
                <div className="modal-body">{children}</div>
            </div>
        </div>
    )
}
