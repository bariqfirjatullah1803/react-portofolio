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
        <button
            className={`rounded-lg lg:rounded-2xl px-3 lg:px-4 py-1 lg:py-2 text-lg lg:text-xl font-semibold ${customClass} ${className}`}>{children}</button>
    );
}

export default Button;