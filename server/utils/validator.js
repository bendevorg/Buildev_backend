/**
 * Module of validation functions
 * @module utils/validator
 */

const constants = require('./constants');

/**
 * Validate if the input is a valid not empty string
 *
 * @param {string} stringToValidate - String to be validated
 * @return {boolean} - True case the string is valid and false if it is not
 */
exports.isValidString = stringToValidate => {
  return (
    typeof stringToValidate === 'string' && stringToValidate.trim().length > 0
  );
};

/**
 * Validate if the input is a valid uuid
 *
 * @param {string} uuidToValidate - UUID to be validated
 * @return {boolean} - True case the uuid is valid and false if it is not
 */
exports.isValidUuid = uuidToValidate => {
  return constants.regex.uuid.test(uuidToValidate);
};

/**
 * Validate if the input is a valid email
 *
 * @param {string} emailToValidate - Email to be validated
 * @return {boolean} - True case the uuid is valid and false if it is not
 */
exports.isValidEmail = emailToValidate => {
  return constants.regex.email.test(emailToValidate);
};

/**
 * Valide if the input is a valid JSON
 * @param {string} JSONToValidate - JSON to be validated
 * @return {boolean} - True case the JSON is valid and false if it is not
 *
 */
exports.isValidJSON = JSONToValidate => {
  try {
    JSON.parse(JSONToValidate);
  } catch (err) {
    return false;
  }
  return true;
};

/**
 * Validate if the input is a valid integer
 *
 * @param {string} integerToValidate - Integer to be validated
 * @return {boolean} - True case the string is valid and false if it is not
 */
exports.isValidInteger = integerToValidate => {
  return (
    constants.regex.integer.test(integerToValidate) &&
    parseInt(integerToValidate) <= Number.MAX_SAFE_INTEGER &&
    parseInt(integerToValidate) >= Number.MIN_SAFE_INTEGER
  );
};

/**
 * Validate if the input is a valid array
 *
 * @param {array} arrayToValidate - Array to be validated
 * @return {boolean} - True case the array is valid and false if it is not
 */
exports.isValidArray = arrayToValidate => {
  return arrayToValidate && arrayToValidate instanceof Array;
};

/**
 * Validate if the input is a valid uuid array
 *
 * @param {array} arrayToValidate - Uuid array to be validated
 * @return {boolean} - True case the array is valid and false if it is not
 */
exports.isValidUuidArray = arrayToValidate => {
  return arrayToValidate &&
    arrayToValidate instanceof Array &&
    arrayToValidate.every(value => {
      return constants.regex.uuid.test(value);
    });
};

/**
 * Validate if the input is an empty array
 *
 * @param {array} arrayToValidate - Array to be validated
 * @return {boolean} - True case the array is empty and false if it is not
 */
exports.isEmptyArray = arrayToValidate => {
  return arrayToValidate &&
    arrayToValidate instanceof Array &&
    arrayToValidate.reduce((a, b) => a + b) === '';
};

/**
 * Validate if the file is a valid image
 *
 * @param {array} fileToValidate - File to be validated
 * @return {boolean} - True case the file is valid and false if it is not
 */
exports.isValidImage = fileToValidate => {
  return fileToValidate && constants.regex.image.test(fileToValidate.mimetype);
};

/**
 * Validate if the input is a valid not empty boolean
 *
 * @param {boolean} booleanToValidate - Boolean to be validated
 * @return {boolean} - True case the boolean is valid and false if it is not
 */
exports.isValidBoolean = booleanToValidate => {
  return typeof booleanToValidate === 'boolean';
};
