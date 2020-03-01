module.exports = {
	port: process.env.PORT || 3000,
	db: {
		database: process.env.DB_NAME || "tabtracker",
		user: process.env.DB_USER || "tabtracker",
		password: process.env.DB_PASSWORD || "tabtracker",
		// sequelize related configuration
		options: {
			dialect: process.env.DIALECT || "sqlite", // database type
			host: process.env.HOST || "localhost", // database location
			storage: "./src/db/tabtracker.sqlite" // sqlite file location
		}
	},
	authentication: {
		jwtSecret: process.env.JWT_SECRET || "secret"
	}
};
