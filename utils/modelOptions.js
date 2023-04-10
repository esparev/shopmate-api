/**
 * Defines the options for the sequelize configuration model
 * 
 * #### Example
 * 
 * ```javascript
 * // With the table name as a string
 * const options = modelOptions(false, 'Shoplist', 'shoplist');
 * // With the table name as a variable
 * const options = modelOptions(false, 'Shoplist', SHOPLIST_TABLE);
 * ```
 * 
 * @param {boolean} timestamp If the model should have timestamps
 * @param {string} modelName The model name
 * @param {string} tableName The table name
 * @returns {object} The model options
 */
const modelOptions = (timestamp, modelName, tableName) => {
	return {
		timestamp: timestamp || false,
		modelName: modelName,
		tableName: tableName,
	};
};

module.exports = modelOptions;
