docker build --no-cache -f SQL\Dockerfile.PostgreSql -t alident-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t alident-java/app ../../..
