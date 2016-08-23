FROM frolvlad/alpine-oraclejdk8:slim
VOLUME /tmp
ADD /target/quran-analyzer-0.1.0.jar api.jar
RUN sh -c 'touch /api.jar'
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/api.jar"]
