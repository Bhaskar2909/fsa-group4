/**
 * Sequelize database configurer.
 *
 * Returns a default function that applies higher-level
 * database configuration aspects, such as associations between
 * models.
 *
 * @link See: https://sequelize.org/master/manual/assocs.html
 *
 * @param {*} sequelize
 */

module.exports = async (sequelize) => {
    const Location = await sequelize.models;


    // each location can have one or more clues
    // Location.hasMany(Clue);
    // Clue.belongsTo(Location);


};