docker build --no-cache -f SQL\Dockerfile.PostgreSql -t alident/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t alident/app ../..
