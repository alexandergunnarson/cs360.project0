mvn install:install-file \
  -DgroupId=com.datomic \
  -DartifactId=datomic-free \
  -Dversion=0.9.5344 \
  -Dpackaging=jar \
  -Dfile=./dev-resources/datomic-free-0.9.5344/datomic-free-0.9.5344.jar 

# LOCAL
# Separate process for this:
cd ./dev-resources/datomic-free-0.9.5344/ && ./bin/transactor ./config/samples/free-transactor-template.properties

# rm -rf ./dev-resources/public/js/compiled/ && lein figwheel