/**
 * Represents the weather conditions.
 * @class
 * @default
 */
export default class Weather {
    /**
     * The temperature in degrees Celsius.
     * @type {number}
     */
    temperature = 0;
    /**
     * The humidity level as a percentage.
     * @type {number}
     */
    humidity = 0;
    /**
     * Create a new instance of the Weather class.
     * @constructor
     * @param {number} temperature - The temperature in degrees Celsius.
     * @param {number} humidity - The humidity level as a percentage.
     */
    constructor(temperature, humidity) {
        this.temperature = temperature;
        this.humidity = humidity;
    }
}