prisma deploy --env-file .env
graphql get-schema -p prisma
graphql-codegen --config codegen.yml

prettier --write "src/generated/**/*.ts"