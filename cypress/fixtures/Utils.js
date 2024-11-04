class Utils {
    // Generate a random integer between min and max (inclusive)
    randomGenerate(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}
export default Utils