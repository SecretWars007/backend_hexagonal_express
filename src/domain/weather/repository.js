/**
 * @interface
 * @exports Repository
 * Interface for the Repository, following the Hexagonal Architecture pattern.
 * This interface defines the methods that a repository should implement.
 */
export default class WeatherRepositoryInterface {
    /**
     * A method to update the data stored in the repository.
     * This method should return a Promise that resolves to the same updated data.
     * @abstract
     * @param {Weather} weather - The weather object to update.
     * @returns {Promise<Weather>} A Promise that resolves to the updated data in the repository.
     * @throws {Error} If there's an error accessing the repository.
     */
    async update(weather) {
        throw new Error(
            'WeatherRepositoryInterface "update" method not implemented!'
        );
    }
    /**
     * A method to retrieve the first weather object stored in the repository.
     * This method should return a Promise that resolves to a {Weather} object.
     * @abstract
     * @returns {Promise<Weather>} A Promise that resolves to the first weather object in the repository.
     * @throws {Error} If there's an error accessing the repository.
     */
    async findFirst() {
        throw new Error(
            'WeatherRepositoryInterface "findFirst" method not implemented!'
        );
    }
}