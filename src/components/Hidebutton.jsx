
export default function HideButton({ onClose, children = "×", className = "" }) {
    return (
      <button
        onClick={onClose}
        className={`text-xl cursor-pointer ${className}`}
        aria-label="Close"
      >
        {children}
      </button>
    );
  }
  