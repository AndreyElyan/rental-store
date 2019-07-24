import Sequelize, { Model } from 'sequelize';

export default class Movie extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        director: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Disk, { foreignKey: 'disk_id' });
  }
}
