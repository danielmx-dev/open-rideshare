/* eslint no-unused-vars: 0 */
let dbm
let type
let seed

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = (options, seedLink) => {
  dbm = options.dbmigrate
  type = dbm.dataType
  seed = seedLink
}

exports.up = db => {
  return db.createTable('riders', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: 'char',
      length: 32,
      unique: true,
      notNull: true
    },
    email: {
      type: 'string'
    },
    password: {
      type: 'string'
    }
  }).then(() => {
    return db.createTable('identities', {
      id: {
        type: 'int',
        primaryKey: true,
        autoIncrement: true
      },
      riderId: {
        type: 'int',
        foreignKey: {
          name: 'identities_user_id_fk',
          table: 'riders',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: {
            riderId: 'id'
          }
        }
      },
      externalId: {
        type: 'string',
        length: 32
      },
      provider: {
        type: 'string',
        length: 32
      },
      metadata: 'blob'
    })
  })
}

exports.down = db => {
  return db.dropTable('identities')
  .then(() => db.dropTable('riders'))
}

exports._meta = {
  version: 1
}
