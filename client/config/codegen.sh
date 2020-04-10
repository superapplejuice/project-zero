apollo client:codegen src/resolvers/mutations/types -c=config/mutations.config.js --target typescript --outputFlat
apollo client:codegen src/resolvers/queries/types -c=config/queries.config.js --target typescript --outputFlat

prettier --write "src/resolvers/**/*.ts"