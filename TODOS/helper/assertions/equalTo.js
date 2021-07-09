/**
 * Assert the element's text with the expected string.
 *
 * @param {string} element The element which is going to be compared.
 * @param {string} expected The expected string.
 * 
 */

export default async (element, expected) => {
    expect(await (await $(element)).getText()).toBe(expected);
}