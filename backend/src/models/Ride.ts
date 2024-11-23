import { DataTypes, Model } from 'sequelize';
import sequelize from '../database';

class Ride extends Model {
  id?: number;
  customer_id?: string;
  date!: string;
  origin?: string;
  destination?: string;
  distance?: number;
  duration?: string;
  driver_id?: number;
  driver_name?: string;
  value?: number;
};

Ride.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    customer_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: false
    },
    distance: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false
    },
    driver_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    driver_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
  },
  { sequelize, modelName: 'Ride', tableName: 'rides' }
);

export default Ride;