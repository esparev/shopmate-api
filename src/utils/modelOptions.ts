/**
 * Defines the options for the sequelize configuration model
 *
 * #### Example
 *
 * ```javascript
 * // With the table name as a string
 * const options = modelOptions('shoplist', true);
 * // With the table name as a variable
 * const options = modelOptions(SHOPLIST_TABLE, true);
 * ```
 *
 * @param {string} tableName The table name
 * @param {boolean} timestamps If the model should have timestamps
 * @returns The model options
 */
const modelOptions = (tableName: string, timestamps?: boolean) => {
	return {
		timestamps: timestamps || true,
		createdAt: "created_at",
		updatedAt: "updated_at",
		modelName: tableName,
		tableName: tableName,
	};
};

export default modelOptions;
