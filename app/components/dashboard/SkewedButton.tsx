type SkewedButtonProps = {
    onClick?: () => void,
    text?: string,
    color: string,
    textColor: string,
}

export default function SkewedButton({onClick, text, color, textColor}: SkewedButtonProps) {
    return (
        <svg
            width="178"
            height="36"
            viewBox="0 0 178 36"
            fill="#none"
            xmlns="http://www.w3.org/2000/svg"
            className="group cursor-pointer md:ml-9"
        >
            <path
            d="M43.2796 34.9707H0.824644L28.8711 0.392929H124.653L119.7 6.24619L119.153 6.89293H120H131.5H131.682L131.8 6.75381L137.182 0.392929H177.172L149.126 34.9707H127.701L131.835 28.2049L132.201 27.6071H131.5H120H119.792L119.675 27.7793L114.792 34.9707H55.7006L59.8353 28.2049L60.2006 27.6071H59.5H48H47.7796L47.6647 27.7951L43.2796 34.9707Z"
            fill={`#${color}`}
            stroke="#ffffff"
            strokeWidth="0.785859"
            className="transition-colors group-hover:fill-gray-800"
            />
            <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill={`#${textColor}`}
            fontSize="12"
            fontWeight="medium"
            className="transition-colors group-hover:fill-gray-300"
            >
                {text}
            </text>
        </svg>
      );
}