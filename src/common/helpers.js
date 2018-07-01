
/** 
* Search inside props for a specific query parameter
* @param {object} props - PropTypes from the component.
* @param {string} param - query value to search.
*/
const getQueryParameterFromProps = (props, param) => props.location ? props.location.query[param] : null;


/** 
* Get the first element of an Array
* @param {array} array - Array to get the frist element.
*/
const getFirstArrayElement = (array) => array ? array[0] : null;


export default {
    getQueryParameterFromProps,
    getFirstArrayElement
}