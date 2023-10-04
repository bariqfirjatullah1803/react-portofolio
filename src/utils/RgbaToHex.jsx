const RgbaToHex = (rgb) => {
    // Split the RGB value into its components
    const rgbArray = rgb.match(/\d+/g);
    if (!rgbArray || rgbArray.length !== 3) {
        return null; // Invalid RGB format
    }

    const r = parseInt(rgbArray[0]);
    const g = parseInt(rgbArray[1]);
    const b = parseInt(rgbArray[2]);

    // Convert the individual components to hex
    const rHex = r.toString(16).padStart(2, '0');
    const gHex = g.toString(16).padStart(2, '0');
    const bHex = b.toString(16).padStart(2, '0');

    // Create the hex color string
    const hexColor = `#${rHex}${gHex}${bHex}`;

    return hexColor;
}

export default RgbaToHex;