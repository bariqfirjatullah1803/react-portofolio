const Button = ({children, variant, className}) => {

    let customClass;

    switch (variant) {
        case 'primary':
            customClass = 'bg-[#F6C90E] text-[#303841]';
            break;
        case 'outline':
            customClass = 'bg-white text-[#303841] border-2 border-[#303841]';
            break;
        default:
            customClass = 'bg-[#F6C90E] text-[#303841]';
    }

    return (
        <button className={`rounded-2xl px-4 py-2 font-semibold text-xl ${customClass} ${className}`}>{children}</button>
    );
}

export default Button;