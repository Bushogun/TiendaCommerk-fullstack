const moment = require('moment-timezone');
const { v4: uuidv4 } = require('uuid'); // Utilizamos UUID para generar IDs únicos

/**
 * Clase para manejar la lógica base
 *
 * @class BaseRepositorySQL
 */
class BaseRepositorySQL {
    /**
     * Crea una instancia de BaseRepositorySQL.
     * @param {*} pool - Conexión al pool de SQL Server
     * @param {string} entity - Nombre de la tabla o entidad SQL
     * @memberof BaseRepositorySQL
     */
    constructor(pool, entity) {
        this._pool = pool;
        this._entity = entity;
    }

    // Métodos de manipulación de SQL Server

    async getAll(filter, sort) {
        // Implementa lógica para obtener todos los registros de la tabla SQL
        // Usando SQL queries con filtros y ordenamiento si son proporcionados
    }

    async get(id) {
        // Implementa lógica para obtener un registro basado en su ID
        // Usando una consulta SQL con el ID proporcionado
    }

    async create(entity) {
        // Implementa lógica para crear un nuevo registro en la tabla SQL
        // Utilizando la información proporcionada en el objeto `entity`
    }

    async update(id, entity) {
        // Implementa lógica para actualizar un registro existente
        // en la tabla SQL basado en su ID y la información proporcionada en `entity`
    }

    async delete(id) {
        // Implementa lógica para eliminar un registro basado en su ID
        // Usando una consulta SQL con el ID proporcionado
    }

    async getIds(ids) {
        // Implementa lógica para obtener registros basados en una lista de IDs proporcionada
        // Usando una consulta SQL con los IDs proporcionados
    }
}

module.exports = BaseRepositorySQL;
